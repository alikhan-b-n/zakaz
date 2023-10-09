import {baseUrl} from "../../../api/axios";
import {useMutation, useQuery} from "react-query";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useAuthHeader} from "react-auth-kit";
import React, {useState} from "react";

export function QuizComponents() {
    const authHeader = useAuthHeader()
    const {elementId, courseId} = useParams()
    const [answers, setAnswers] = useState([])
    const [result, setResult] = useState()
    const [attempts, setAttempts] = useState()
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const quizUrl = `${baseUrl}/auth/quizAttempt/${courseId}/${elementId}`

    const {isLoading, data, isError, error} = useQuery(['element/quiz', courseId, elementId], () => axios.get(quizUrl, {
        headers: {
            'Authorization': `${authHeader()}`
        }
    }))

    const {mutate, isLoadingSend} = useMutation(async () =>
        await axios.post(`${baseUrl}/auth/quizCheck/${courseId}/${elementId}`,
            {
                answers: answers
            }, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Authorization': `${authHeader()}`
                }
            }), {
        onSuccess: (successData) => {
            setResult(successData.data.result)
            setAttempts(successData.data.status)
        }
    })
    const handleAnswer = (answer) => {
        setAnswers(prevAnswers => [...prevAnswers, answer])
        setCurrentQuestionIndex(prevIndex => prevIndex + 1)

        // Check if all questions have been answered
        if (currentQuestionIndex + 1 === data.data.QuizQuestions.length) {
            mutate(answers);
        }
    };

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>{error.response.data.message}</p>
    }

    const question = data.data.QuizQuestions[currentQuestionIndex];

    console.log(result)

    return (
        <div className="flex flex-col justify-center items-center mb-[70px]">
            <div className="bg-white py-[20px] px-[50px] rounded-xl">
                <div>{data.data.name}</div>
                <div className="flex gap-x-1">
                    <span>Number of available attempts</span>
                </div>

                <div>

                    <h2 className="bold underline">{data.data.attempt}</h2>
                    <div className="my-[30px]">
                        {
                            currentQuestionIndex >= data.data.QuizQuestions.length ?
                                <div className="flex">
                                    {
                                        isLoadingSend ?
                                            <div>
                                                <p>Loading</p>
                                            </div>
                                            :
                                            <div>
                                                <div>
                                                    {result}
                                                </div>
                                                <div>
                                                    {attempts}
                                                </div>
                                            </div>
                                    }
                                </div>
                                :
                                <div>
                                    <h3>{question.question}</h3>
                                    <div className="flex flex-col">
                                        {question.answers.map((answer, index) => (
                                            <button key={index}
                                                    onClick={() => handleAnswer(answer)}
                                            className="flex justify-start">
                                                *{answer}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


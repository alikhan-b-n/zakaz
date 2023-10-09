import {baseUrl} from "../../../api/axios"
import {useMutation, useQuery} from "react-query"
import axios from "axios"
import {useParams} from "react-router-dom"
import {useAuthHeader} from "react-auth-kit"
import React, {useState} from "react"
import PropTypes from 'prop-types'

QuizComponents.propTypes = {
    urlGet: PropTypes.string,
    urlSend: PropTypes.string,
};

export function QuizComponents(prop) {

    const authHeader = useAuthHeader()
    const {elementId, courseId} = useParams()
    const [answers, setAnswers] = useState([])
    const [result, setResult] = useState()
    const [attempts, setAttempts] = useState()
    const [id, setId] = useState(1)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const quizUrlGet = prop.urlGet != null ? `${baseUrl}/${prop.urlGet}` : `${baseUrl}/auth/quizAttempt/${courseId}/${elementId}`
    const {isLoading, data, isError, error} = useQuery(prop.urlGet != null ? ['element/weekly/quiz', courseId, elementId] : ['element/quiz', courseId, elementId],
        () => axios.get(quizUrlGet, {
            headers: {
                'Authorization': `${authHeader()}`
            }
        }))


    const {mutate, isLoadingSend} = useMutation(async () => {
        setId(data.data.id)
        let quizUrlSend = prop.urlSend != null ? `${baseUrl}/${prop.urlSend}/${id}` : `${baseUrl}/auth/quizCheck/${courseId}/${elementId}`
        const response = await axios.post(quizUrlSend, {answers: answers}, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': `${authHeader()}`
            }
        });
        return response.data;
    }, {
        onSuccess: (data) => {
            setResult(data.result)
            setAttempts(data.status)
        }
    });

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>{error.response.data.message}</p>
    }

    const handleAnswer = (answer) => {
        setAnswers(prevAnswers => [...prevAnswers, answer])
        setCurrentQuestionIndex(prevIndex => prevIndex + 1)

        // Check if all questions have been answered
        if (currentQuestionIndex + 1 === data.data.QuizQuestions.length) {
            answers.push(answer)
            mutate(answers);
        }
    };

    const question = data.data.QuizQuestions[currentQuestionIndex];

    return (
        <div className="flex flex-col justify-center items-center mb-[70px]">
            <div className="bg-white rounded-xl py-[20px] px-[30px]">
                <div className="3xl:text-[30px] xl:text-[24px] md:text-[20px]">{data.data.name}</div>
                <div className="3xl:text-[24px] xl:text-[20px] md:text-[18px] flex gap-x-1">
                    <span>Number of available attempts</span>
                    <h2 className="bold underline">{data.data.attempts}</h2>
                </div>
                <div>
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
                                <div className="bg-white text-[20px]">
                                    <h3>{question.question}</h3>
                                    <div className="flex flex-col">
                                        {question.answers.map((answer, index) => (
                                            <div key={index} className="flex bg-gray-100 rounded-xl mb-[5px] pl-[10px]">
                                                <button
                                                    onClick={() => handleAnswer(answer)} className="w-full">
                                                    <p className="w-full">{answer}</p>
                                                </button>
                                            </div>
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


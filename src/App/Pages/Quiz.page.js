import {QuizComponents} from "../Components/courses/elementComponents/QuizComponents";
import {useNavigate, useParams} from "react-router-dom";
import React from "react";

export function QuizPage() {
    const {elementId, courseId} = useParams()
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/course/${courseId}/element/${elementId}`)
    }

    return (
        <div>
            <h1>Недельный квиз</h1>
            <QuizComponents urlGet="auth/dailyQuizAttempt/" urlSend="auth/dailyQuizCheck"/>
            <button onClick={handleClick} className="bg-orange-500 h-[50px] px-[10px] rounded-lg text-white lg:mb-[20px] 3xl:ml-[100px] xl:ml-0">Перейти на урок</button>
        </div>
    )
}
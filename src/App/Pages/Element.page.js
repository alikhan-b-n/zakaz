import {useQuery} from "react-query";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useAuthHeader} from "react-auth-kit";
import React from "react";
import {HeaderComponent} from "../Components/HeaderComponent";
import {SidebarComponent} from "../Components/SidebarComponent";
import {FooterComponent} from "../Components/FooterComponent";
import {VideoComponents} from "../Components/courses/elementComponents/VideoComponents";
import {baseUrl} from "../api/axios";
import {QuizComponents} from "../Components/courses/elementComponents/QuizComponents";

export function ElementPage() {
    const {elementId, courseId} = useParams()
    const authHeader = useAuthHeader()
    const navigate = useNavigate()
    const url = `${baseUrl}/auth/course/attend/${courseId}/${elementId}`

    const {isLoading, data, isError, error} = useQuery(['element', courseId, elementId], () =>
        axios.get(url, {
            headers: {
                'Authorization': `${authHeader()}`
            }
        })
    );

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        if (error.response.data.message === "pass daliy quiz"){
            navigate(`/course/${courseId}/element/${elementId}/weeklyQuiz`)
        }
        return <p>{error.response.data.message}</p>
    }

    return (
        <div>
            <HeaderComponent/>
            <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                <SidebarComponent page="courses"/>
            </div>
            <div className="mt-[5%] 3xl:font-bold xl:font-semibold md:font-medium">
                <div className="rounded-md p-[2%] flex flex-col 3xl:w-[1262px] 2xl:w-[1000px] xl:w-[800px] lg:w-[500px] md:w-[500px] sm:w-[310px]
             mx-auto bg-white">
                    <h1 className="3xl:text-[24px] xl:text-[20px] md:text-[18px]">{data.data.element.name}</h1>
                    <p className="3xl:text-[24px] xl:text-[20px] md:text-[18px]">{data.data.element.content}</p>
                </div>
                <VideoComponents videos={data.data.element.Videos} elementId={elementId}/>
                <QuizComponents/>
            </div>
            <FooterComponent/>
        </div>
    )
}
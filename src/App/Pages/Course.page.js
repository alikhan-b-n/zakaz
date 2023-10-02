import React, { useState } from "react";
import { useQuery } from 'react-query';
import axios from 'axios';
import { useAuthHeader } from "react-auth-kit";
import {useParams} from "react-router-dom";
import {MyTeacher} from "../Components/Extentions/Teacher/MyTeacher";

export const CoursePage = () => {
    const { id } = useParams();
    const authHeader = useAuthHeader();
    const url = `http://193.70.125.178:4000/auth/user/course/${id}`


    const {isLoading, data, isError, error } = useQuery(['course', id],  () =>
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
        return <p>{error.message}</p>
    }

    console.log(data.data.course)

    return (
        <div className="3xl:mr-[20px] mb-[20px] lg:mr-0 3xl:w-[400px] 3xl:h-[350px] 2xl:w-[320px] xl:w-[250px] xl:h-[370px] lg:h-[250px] lg:w-[500px]
             md:w-[450px] sm:w-[330px] xsm:w-[250px] sm:h-[290px] xxsm:h-[350px] font-medium
             bg-white rounded-2xl px-7 justify-between bg-no-repeat bg-cover">
            <div className="flex flex-col 3xl:items-baseline ">
                <div className="3xl:h-[45px] xl:h-[70px] rounded-xl text-[16px]">
                    <div className="justify-center items-center h-full">
                        <h2 className="bg-amber-50">{data.data.course.title}</h2>
                        <p>{data.data.course.description}</p>
                        <MyTeacher id={data.data.course.teacherId}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

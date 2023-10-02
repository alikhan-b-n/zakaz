import React, { useState } from "react";
import { useQuery } from 'react-query';
import axios from 'axios';
import { useAuthHeader } from "react-auth-kit";
import {useParams} from "react-router-dom";
import {MyTeacher} from "../Components/Extentions/Teacher/MyTeacher";
import {HeaderComponent} from "../Components/HeaderComponent";
import {SidebarComponent} from "../Components/SidebarComponent";
import CoursesComponent from "../Components/courses/CoursesComponent";
import {Appeal} from "../Components/AppealComponent";
import {FooterComponent} from "../Components/FooterComponent";

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
        <div>
            <HeaderComponent/>
            <div className="lg:ml-0 flex">
                <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                    <SidebarComponent page="courses"/>
                </div>
                <div className="flex flex-col  3xl:w-[1420px] 2xl:w-[1100px] xl:w-[900px] lg:w-[600px] md:w-[500px] m-auto
                    3xl:font-bold xl:font-semibold md:font-medium justify-center">
                    <h2 className="inline-block mt-[55px] 3xl:text-[60px] 2xl:text-[55px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xsm:text-[30px]
                    m-auto">Курс</h2>
                    <div className="3xl:mr-[20px] mb-[20px] lg:mr-0
                    3xl:w-[910px] 3xl:h-[400px] 2xl:w-[320px] xl:w-[250px] xl:h-[370px] lg:h-[250px] lg:w-[500px]
                    md:w-[450px] sm:w-[330px] xsm:w-[250px] sm:h-[290px] xxsm:h-[350px] font-medium
                    bg-white rounded-2xl px-7 justify-between bg-no-repeat bg-cover">
                        <div className="flex flex-col 3xl:items-baseline ">
                            <div className="rounded-xl text-[16px]">
                                <div className="justify-center items-center h-full">
                                    <h2 className="bg-amber-50">{data.data.course.title}</h2>
                                    <p>{data.data.course.description}</p>
                                    <MyTeacher id={data.data.course.teacherId}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>

    );
}
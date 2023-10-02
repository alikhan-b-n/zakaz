import React, { useState } from "react";
import { useQuery } from 'react-query';
import axios from 'axios';
import { useAuthHeader } from "react-auth-kit";
import {useParams} from "react-router-dom";
import {MyTeacher} from "../Components/Extentions/Teacher/MyTeacher";
import {HeaderComponent} from "../Components/HeaderComponent";
import {SidebarComponent} from "../Components/SidebarComponent";
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
                    <div className="flex justify-center">
                        <div className="3xl:mr-[20px] mb-[20px] lg:mr-0
                    3xl:w-[750px] 3xl:h-[360px] xl:w-[700px] xl:h-[380px] lg:h-[300px] lg:w-[550px]
                    md:w-[450px] md:h-[250px] sm:w-[350px] sm:h-[200px] font-medium
                    bg-white rounded-2xl px-7 justify-between bg-no-repeat bg-cover">
                            <div className="justify-center items-center h-full mt-[20px]">
                                <h2 className="3xl:text-[40px] lg:text-[30px] sm:text-[25px]">{data.data.course.title}</h2>
                                <p className="3xl:text-[28px] lg:text-[22px] sm:text-[18px] text-orange-500 w-[300px]">{data.data.course.description}</p>
                                <MyTeacher id={data.data.course.teacherId}/>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>

    );
}
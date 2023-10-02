import React, { useState } from "react";
import { useQuery } from 'react-query';
import axios from 'axios';
import { useAuthHeader } from "react-auth-kit";
import {useParams} from "react-router-dom";
import {MyTeacher} from "../Components/Extentions/Teacher/MyTeacher";
import {HeaderComponent} from "../Components/HeaderComponent";
import {SidebarComponent} from "../Components/SidebarComponent";
import {FooterComponent} from "../Components/FooterComponent";
import {ElementsComponent} from "../Components/courses/elementComponents/ElementsComponent";

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
    const divStyle = {
        'backgroundImage': `url(${'http://193.70.125.178:4000/static/' + data.data.course.image })`
    }

    return (
        <div>
            <HeaderComponent/>
            <div className="lg:ml-0 flex">
                <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                    <SidebarComponent page="courses"/>
                </div>
                <div className="flex flex-col  3xl:w-[1300px] 2xl:w-[1000px] xl:w-[900px] lg:w-[650px] md:w-[450px] sm:w-[300px] m-auto
                    3xl:font-bold xl:font-semibold md:font-medium justify-center">
                    <h2 className="inline-block mt-[55px] 3xl:text-[60px] 2xl:text-[55px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xsm:text-[30px]
                    m-auto">Курс</h2>
                   <div className="flex flex-col justify-center">
                       <div className="">
                           <MyTeacher id={data.data.course.teacherId}/>
                           <div className="grid 3xl:grid-cols-5 lg:grid-cols-1 flex 3xl:w-[1300px] 2xl:w-[1000px] xl:w-[900px]
                           lg:w-[650px] md:w-[450px] sm:w-[300px] mx-auto bg-white mb-[40px] rounded font-medium">
                               <div className="col-span-1 3xl:border-r-4 border-r-[#E2E9EF] lg:border-r-0 lg:border-b-4 p-[10px] flex lg:flex-row
                                    3xl:flex-col text-center items-center justify-center">
                                   <div style={divStyle} className="object-contain 3xl:w-[197px] 3xl:h-[197px]
                                            2xl:w-[180px] 2xl:h-[180px] xl:w-[140px] xl:h-[140px] lg:w-[150px]
                                            lg:h-[150px] lg:mb-[10px] rounded-[197px] bg-no-repeat bg-cover "/>
                               </div>
                               <div className="col-span-3 bg-white p-[30px] flex flex-col justify-between">
                                   <div>
                                       <h1 className="3xl:text-[25px] sm:text-[22px] font-[600]">{data.data.course.title}</h1>
                                       <p className="3xl:text-[18px] sm:text-[15px]">{data.data.course.description}</p>
                                   </div>
                               </div>
                           </div>
            {/*               <div className="mt-[5%]">*/}
            {/*                   <div className="rounded-md p-[2%] flex flex-col 3xl:w-[1262px] 2xl:w-[1000px] xl:w-[800px] lg:w-[500px] md:w-[500px] sm:w-[310px]*/}
            {/*3xl:font-bold xl:font-semibold md:font-medium 3xl:mb-[260px] 2xl:mb-[230px] xl:mb-[200px] lg:mb-[100px] mx-auto bg-white">*/}
            {/*                       <h1>{data.data.element.name}</h1>*/}
            {/*                   </div>*/}
            {/*               </div>*/}
                   </div>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>

    );
}
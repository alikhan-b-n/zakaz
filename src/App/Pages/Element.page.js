import {useQuery} from "react-query";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useAuthHeader} from "react-auth-kit";
import React from "react";
import {HeaderComponent} from "../Components/HeaderComponent";
import {SidebarComponent} from "../Components/SidebarComponent";
import {FooterComponent} from "../Components/FooterComponent";

export function ElementPage(){
    const { elementId, courseId } = useParams();
    const authHeader = useAuthHeader();
    const url = `http://193.70.125.178:4000/auth/course/attend/${courseId}/${elementId}`

    const {isLoading, data, isError, error } = useQuery(['element', courseId, elementId],  () =>
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

    console.log(data.data)

    return(
        <div>
            <HeaderComponent/>
            <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                <SidebarComponent page="courses"/>
            </div>
            <div className="mt-[5%]">
                <div className="rounded-md p-[2%] flex flex-col 3xl:w-[1262px] 2xl:w-[1000px] xl:w-[800px] lg:w-[500px] md:w-[500px] sm:w-[310px]
            3xl:font-bold xl:font-semibold md:font-medium 3xl:mb-[260px] 2xl:mb-[230px] xl:mb-[200px] lg:mb-[100px] mx-auto bg-white">
                    <h1>{data.data.element.name}</h1>

                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}
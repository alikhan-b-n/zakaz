import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import axios from "axios";
import {useAuthHeader} from "react-auth-kit";
import {HeaderComponent} from "../Components/HeaderComponent";
import {SidebarComponent} from "../Components/SidebarComponent";
import {FooterComponent} from "../Components/FooterComponent";
import React from "react";
import {baseUrl} from "../api/axios";

export function StreamPage(){
    const {courseId} = useParams()
    const authHeader = useAuthHeader()
    const url = `${baseUrl}/auth/stream/${courseId}`

    const {isLoading, data, isError, error } = useQuery(['stream', courseId],  () =>
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
        return <p>{error.response.data.message}</p>
    }

    let isStreamOn = data.data !== "";

    return(
        <div>
            <div>
                <HeaderComponent/>
                <div>
                    <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                        <SidebarComponent/>
                    </div>
                    <div className="flex flex-col  3xl:w-[1262px] 2xl:w-[1000px] xl:w-[800px] lg:w-[500px] md:w-[500px] sm:w-[310px] m-auto
            3xl:font-bold xl:font-semibold md:font-medium 3xl:mb-[260px] 2xl:mb-[230px] xl:mb-[200px] lg:mb-[100px]">
                        <h1 className="inline-block mt-[55px] 3xl:text-[60px] 2xl:text-[55px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xsm:text-[30px]
                    m-auto">Стрим</h1>
                        <div className="flex justify-center">
                            {
                                isStreamOn
                                    ?
                                    <div className="flex flex-col items-center 3xl:w-[700px] 3xl:h-[500px]  xl:w-[500px] xl:h-[400px] lg:w-[450px] lg:h-[350px] sm:w-[350px] sm:h-[300px] ">
                                        <iframe src={data.data.link} width="100%" height="100%" title="Stream" allowFullScreen
                                                className="embed-responsive-item "></iframe>
                                        <p className="3xl:text-[40px] xl:text-[35px] lg:text-[30px] sm:text-[25px] font-normal mt-[10px]">{`${data.data.teacherSurname} ${data.data.teacherName} ${data.data.teacherPatronymic}`}</p>
                                        <p className="3xl:text-[30px] xl:text-[25px] lg:text-[20px] sm:text-[15px] font-normal">{data.data.courseName}</p>
                                    </div>
                                    :
                                    <div>
                                        <h1>Stream ended</h1>
                                    </div>
                            }
                        </div>
                    </div>

                </div>
                <FooterComponent/>
            </div>
        </div>
    )
}
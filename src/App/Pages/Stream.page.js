import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import axios from "axios";
import {useAuthHeader} from "react-auth-kit";
import {HeaderComponent} from "../Components/HeaderComponent";
import {SidebarComponent} from "../Components/SidebarComponent";
import {FooterComponent} from "../Components/FooterComponent";
import React from "react";

export function StreamPage(){
    const {courseId} = useParams()
    const authHeader = useAuthHeader()
    const url = `http://193.70.125.178:4000/auth/stream/${courseId}`

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
        return <p>{error.message}</p>
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
                                    <div className="flex flex-col items-center">
                                        <iframe src={data.data.link} width="600px" height="300px" title="Stream"></iframe>
                                        <p className="text-[30px] font-normal mt-[10px]">{`${data.data.teacherSurname} ${data.data.teacherName} ${data.data.teacherPatronymic}`}</p>
                                        <p className="text-[25px] font-normal">{data.data.courseName}</p>
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
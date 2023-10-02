import React from "react";
import {useMutation, useQuery, useQueryClient} from 'react-query';
import axios from 'axios';
import {useAuthHeader} from "react-auth-kit";
import {useAuthUser} from "react-auth-kit";


export const CourseComponent = (prop) => {
    const divStyle = {
        'backgroundImage': `url(${'http://193.70.125.178:4000/static/' + prop.course.image })`
    }
    const getUser = useAuthUser();
    const user = getUser();
    const authHeader = useAuthHeader();
    const url = `http://193.70.125.178:4000/auth/attendCourse/${prop.course.id}`
    const {mutate, isLoading, isError, error} = useMutation(async () =>
        await axios.post(url, {
            }, {
                headers: {
                    'Authorization': `${authHeader()}`
                }
            }
        ), {
        onSuccess: (successData) => {

        }
    })

    return (
        // <div className="3xl:mr-[20px] mb-[20px] lg:mr-0 3xl:w-[400px] 3xl:h-[350px] 2xl:w-[320px] xl:w-[250px] xl:h-[370px] lg:h-[280px] lg:w-[500px]
        //      md:w-[450px] sm:w-[330px] xsm:w-[250px] sm:h-[290px] xxsm:h-[350px] font-medium
        //      bg-white rounded-2xl px-7 justify-between bg-no-repeat bg-cover " style={divStyle}>
        //     <div className="flex flex-col 3xl:items-baseline ">
        //         <div className="3xl:h-[45px] xl:h-[70px] px-3 bg-white rounded-xl text-[16px] mt-[23px]">
        //             <div className="flex justify-center items-center h-full">
        //                 {prop.course.title}
        //             </div>
        //         </div>
        //         <div className="px-3 bg-white rounded-xl text-[16px] 3xl:mt-[103px] xl:mt-[40px] lg:mt-[20px]">
        //             <div className="">
        //                 <div className="text-[18px] ">{prop.course.description}</div>
        //             </div>
        //             <div className="">
        //                 <div className="text-[18px]">{prop.course.price} тг</div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="flex justify-center w-full">
        //         <button onClick={() => mutate({})} className="mt-[15px] bg-orange-500 text-white rounded-xl p-[10px]" >Записаться</button>
        //     </div>
        //     {/*<div className="flex 3xl:min-w-[270px] 3xl:max-h-[330px]*/}
        //     {/*xl:min-w-[250px] xl:max-h-[290px] sm:hidden bg-contain bg-no-repeat" style={divStyle}></div>*/}
        // </div>
        <div className="grid 3xl:grid-cols-5 lg:grid-cols-1 flex 3xl:w-[1420] mx-auto bg-white mb-[40px] rounded font-medium">
            <div className="col-span-1 3xl:border-r-4 border-r-[#E2E9EF] lg:border-r-0 lg:border-b-4 p-[10px] flex lg:flex-row
                3xl:flex-col text-center items-center justify-center">
                <div style={divStyle} className="object-contain 3xl:w-[197px] 3xl:h-[197px]
                2xl:w-[180px] 2xl:h-[180px] xl:w-[140px] xl:h-[140px] lg:w-[150px] lg:h-[150px] lg:mb-[10px] rounded-[197px] bg-no-repeat bg-cover "/>
            </div>
            <div className="col-span-3 bg-white p-[30px] flex flex-col justify-between">
                <div>
                    <h1 className="3xl:text-[25px] sm:text-[22px] font-[600]">{prop.course.title}</h1>
                    <p className="3xl:text-[18px] sm:text-[15px]">{prop.course.description}</p>
                </div>
                <p className="3xl:text-[22px] sm:text-[15px] text-orange-500">{prop.course.price} тг</p>
            </div>
        </div>
    );
}
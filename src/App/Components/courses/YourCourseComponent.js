import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

export const YourCourseComponent = (props) => {
    const navigate = useNavigate();
    const divStyle = {
        'backgroundImage': `url(${'http://193.70.125.178:4000/static/' + props.course.image})`
    }

    const handleClick = () => {
        console.log(props.course.id)
        // navigate(`/course/${props.course.id}`)
    }


    return (
        <div className="3xl:mr-[20px] mb-[20px] lg:mr-0 3xl:w-[400px] 3xl:h-[350px] 2xl:w-[320px] xl:w-[250px] xl:h-[370px] lg:h-[250px] lg:w-[500px]
             md:w-[450px] sm:w-[330px] xsm:w-[250px] sm:h-[290px] xxsm:h-[350px] font-medium
             bg-white rounded-2xl px-7 justify-between bg-no-repeat bg-cover" style={divStyle}>
            <div className="flex flex-col 3xl:items-baseline ">
                <div className="3xl:h-[45px] xl:h-[70px] rounded-xl text-[16px]">
                    <div className="flex justify-center items-center h-full">
                        <h2 className="bg-amber-50">{props.course.title}</h2>
                    </div>
                </div>
            </div>
            <button onClick={handleClick} className="mt-[15px] bg-orange-500 text-white rounded-xl p-[10px]" >Go to the Course</button>
        </div>
    );
}

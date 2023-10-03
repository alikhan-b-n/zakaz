import React from "react";
import {useNavigate} from "react-router-dom";

export function ElementComponent(props){
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/course/${props.courseId}/element/${props.element.id}`)
    }
    return(
        <div className="grid 3xl:grid-cols-2 lg:grid-cols-1 flex 3xl:w-[1420] mx-auto bg-white mb-[40px]
        rounded font-medium rounded-lg ">
            <div className="p-[20px]">
                <h1 className="3xl:text-[25px] sm:text-[22px] font-[600]">{props.element.name}</h1>
                <p className="3xl:text-[18px] sm:text-[15px]">{props.element.content}</p>
            </div>
            <div className="flex justify-center w-full items-center">
                <button className="bg-orange-500 h-[50px] px-[10px] rounded-lg text-white lg:mb-[20px] 3xl:ml-[100px] xl:ml-0">Перейти на урок</button>
            </div>
        </div>
    )
}



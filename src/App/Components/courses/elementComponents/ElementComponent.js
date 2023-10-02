import {useNavigation} from "react-router-dom";
import React from "react";

export function ElementComponent(props){
    const navigate = useNavigation()
    const onClickHandler = () =>{
        navigate(`/course/${props.courseId}/element/${props.element.id}`)
    }

    return(
        <div className="grid 3xl:grid-cols-5 lg:grid-cols-1 flex 3xl:w-[1420] mx-auto bg-white mb-[40px] rounded font-medium">
            <div>
                <h1 className="3xl:text-[25px] sm:text-[22px] font-[600]">{props.element.name}</h1>
                <p className="3xl:text-[18px] sm:text-[15px]">{props.element.description}</p>
            </div>
            <div className="flex justify-center w-full">
                <button onClick={onClickHandler}>Перейти на урок</button>
            </div>
        </div>
    )
}
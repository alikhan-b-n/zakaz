import React from "react";
import {useNavigate} from "react-router-dom";

export const YourCourseComponent = (prop) => {
    const navigate = useNavigate();
    const divStyle = {
        'backgroundImage': `url(${'http://193.70.125.178:4000/static/' + prop.course.image})`
    }

    const handleClick = () => {
        navigate(`/course/${prop.course.id}`)
    }
    return (
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
                <div className="flex justify-center w-full">
                    <button onClick={handleClick} className="mt-[15px] bg-orange-500 text-white rounded-xl p-[10px]" >Перейти на курс</button>
                </div>
            </div>
        </div>
    );
}
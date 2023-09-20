import React from "react";

export function TeacherComponent(prop) {
    const imgUrl =  `${`http://193.70.125.178:4000/user/${prop.teacher.id}/` + prop.teacher.avatar }`
    console.log(imgUrl)
    return (
        <div className="grid 3xl:grid-cols-5 lg:grid-cols-1 flex 3xl:w-[1420] mx-auto bg-white mb-[40px] rounded font-medium">
            <div className="col-span-1 3xl:border-r-4 border-r-[#E2E9EF] lg:border-r-0 lg:border-b-4 px-[20px] pt-[15px] flex lg:flex-row
            3xl:flex-col text-center items-center justify-center">
                <img src={imgUrl}
                     alt="Teacher"
                     className="object-contain w-[197px] h-[197px] lg:w-[150px] lg:h-[150px] lg:mb-[10px] rounded-[197px] pb-[20px]"/>
            </div>
            <div className="col-span-3 bg-white p-[30px]">
                <h1 className="3xl:text-[25px] sm:text-[22px] font-[600]">{prop.teacher.surname} {prop.teacher.name} {prop.teacher.patronymic}</h1>
                <p className="3xl:text-[18px] sm:text-[15px] underline underline-offset-1 text-orange-500">{prop.teacher.email}</p>
                <p className="3xl:text-[18px] sm:text-[15px]">{prop.teacher.description}</p>
            </div>
        </div>
    );
}
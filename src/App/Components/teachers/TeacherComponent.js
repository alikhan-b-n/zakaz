import React from "react";

export function TeacherComponent(prop) {
    // const divStyle = {
    //     'backgroundImage': `url(${'http://193.70.125.178:4000/static/' + prop.course.avatar })`
    // }
    return (
        <div className="grid 3xl:grid-cols-5 lg:grid-cols-1 flex 3xl:w-[1420] mx-auto bg-white mb-[40px] rounded">
            <div className="col-span-1 3xl:border-r-4 border-r-[#E2E9EF] lg:border-r-0 lg:border-b-4 px-[20px] pt-[15px] flex lg:flex-row
            3xl:flex-col text-center items-center">
                {/*<img src={divStyle}*/}
                {/*     alt="Teacher"*/}
                {/*     className="object-contain w-[197px] h-[197px] lg:w-[150px] lg:h-[150px] lg:mb-[10px] rounded-[197px]"/>*/}
                <div className="lg:ml-[20px]">
                    <h1 className="text-[25px] font-bold text-black 3xl:hidden lg:inline">{prop.teacher.surname} {prop.teacher.name} {prop.teacher.patronymic}</h1>
                </div>
            </div>
            <div className="col-span-3 bg-white p-[30px]">
                <h1 className="text-[25px] font-bold text-black lg:hidden">{prop.teacher.surname} {prop.teacher.name} {prop.teacher.patronymic}</h1>
                <p className="text-[18px] text-black font-semibold">{prop.teacher.email}</p>
                <p className="text-[18px] text-black font-semibold">{prop.teacher.description}</p>
            </div>
        </div>
    );
}
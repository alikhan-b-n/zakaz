import React from "react";

export const CourseComponent = (prop) => {
    const divStyle = {
        'backgroundImage': `url(${'http://193.70.125.178:4000/static/' + prop.course.image })`
    }
    return (
        <div className="3xl:mr-[20px] mb-[20px] lg:mr-0 3xl:w-[400px] 3xl:h-[330px] 2xl:w-[320px] xl:w-[250px] xl:h-[300px] lg:h-[250px] lg:w-[500px]
             md:w-[450px] sm:w-[330px] xsm:w-[250px] font-medium
             bg-white rounded-2xl flex px-7 justify-between bg-no-repeat bg-cover" style={divStyle}>
            <div className="flex flex-col 3xl:items-baseline ">
                <div className="3xl:h-[45px] xl:h-[70px] px-3 bg-white rounded-xl text-[16px] mt-[23px]">
                    <div className="flex justify-center items-center h-full">
                        {prop.course.title}
                    </div>
                </div>
                <div className="px-3 bg-white rounded-xl text-[16px] 3xl:mt-[103px] xl:mt-[40px] lg:mt-[20px]">
                    <div className="">
                        <div className="text-[18px] ">{prop.course.description}</div>
                    </div>
                    <div className="">
                        <div className="text-[18px]">{prop.course.price} тг</div>
                    </div>
                </div>
                <buttin className="mt-[10px] bg-">Записаться</buttin>
            </div>
            {/*<div className="flex 3xl:min-w-[270px] 3xl:max-h-[330px]*/}
            {/*xl:min-w-[250px] xl:max-h-[290px] sm:hidden bg-contain bg-no-repeat" style={divStyle}></div>*/}
        </div>
    );
}
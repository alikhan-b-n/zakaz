import React from "react";

export const Course = ({ course }) => {
    const divStyleTeacher = {
        backgroundImage: `url(${process.env.PUBLIC_URL + course.imagePathTeacher})`,
    };
    const divStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL + course.imagePath})`,
        backgroundPosition: 'center'
    };

    return (
        <div className="mr-[30px] mb-4">
            <div className="3xl:w-[557px] 3xl:h-[330px] 2xl:w-[520px] xl:w-[440px] lg:h-[280px] sm:w-[400px] xsm:w-[300px]
            bg-white rounded-2xl flex px-7 justify-between bg-no-repeat" style={divStyle}>
                <div className="flex flex-col 3xl:items-baseline ">
                    <div className="w-[170px] h-[39px] bg-[#FFECEC] rounded-xl text-[16px] mt-[23px]">
                        <div className="flex justify-center items-center h-full">
                            {course.teacherName}
                        </div>
                    </div>
                    <div className="3xl:mt-[103px] xl:mt-[70px] lg:mt-[20px]">
                        <div className="3xl:text-[28px] 2xl:text-[26px] xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px]">{course.courseTitle}</div>
                        <div className="3xl:text-[18px] 2xl:text-[16px] xl:text-[14px] lg:text-[12px] md:text-[10px]
                         sm:text-[8px]">{course.courseDescription}</div>
                    </div>
                </div>
                <div className="flex 3xl:min-w-[270px] 3xl:max-h-[330px]
                xl:min-w-[250px] xl:max-h-[290px] sm:hidden bg-contain bg-no-repeat" style={divStyleTeacher}></div>
            </div>
        </div>
    );
}
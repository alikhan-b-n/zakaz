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
                    <div className="w-[150px] h-[39px] bg-[#FFECEC] rounded-xl text-[16px] mt-[23px]">
                        <div className="flex justify-center items-center h-full">
                            {course.course.teacherName}
                        </div>
                    </div>
                    <div className="3xl:mt-[103px] xl:mt-[70px] lg:mt-[20px]">
                        <div className="text-[28px]">{course.course.courseTitle}</div>
                        <div className="text-[18px] ">{course.course.courseDescription}</div>
                    </div>
                </div>
                <div className="flex 3xl:min-w-[270px] 3xl:max-h-[330px]
                xl:min-w-[250px] xl:max-h-[290px] sm:hidden bg-contain bg-no-repeat" style={divStyleTeacher}></div>
            </div>
        </div>
    );
}
import React from 'react';
import {SidebarComponent} from "../Components/SidebarComponent";
import {Appeal} from "../Components/AppealComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import {FooterComponent} from "../Components/FooterComponent";
import {OurTeachers} from "../Components/Extentions/Teacher/OurTeachers";
import {TeacherComponent} from "../Components/teachers/TeacherComponent";
import TeacherObject from "../Objects/TeacherObj";
import CoursesComponent from "../Components/courses/CoursesComponent";

function CoursesPage() {
    return (
        <div>
            <HeaderComponent/>
            <div className="lg:ml-0 flex">
                <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                    <SidebarComponent page="courses"/>
                </div>
                <div className="flex flex-col  3xl:w-[1420px] 2xl:w-[1100px] xl:w-[900px] lg:w-[600px] md:w-[500px] m-auto
                    3xl:font-bold xl:font-semibold md:font-medium">
                    <h2 className="inline-block mt-[55px] 3xl:text-[60px] 2xl:text-[55px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xsm:text-[30px]
                    m-auto">Курсы</h2>
                    <div className="mt-5">
                        <CoursesComponent/>
                    </div>
                    <div className="flex flex-col ">
                        <h2 className="inline-block 3xl:mt-[55px] lg:mt-0 3xl:text-[60px] 2xl:text-[55px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xsm:text-[30px] m-auto ">Нужна помощь?</h2>
                        <Appeal/>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default CoursesPage;
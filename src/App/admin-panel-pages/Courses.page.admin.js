import React from 'react';
import {HeaderComponent} from "../Components/HeaderComponent";
import {SidebarComponentAdmin} from "../AdminPanelComponents/SidebarComponent.Admin";
import CoursesComponent from "../AdminPanelComponents/courses/CoursesComponent";
import {FooterComponent} from "../Components/FooterComponent";
function CoursesPageAdmin() {
    return (
        <div>
            <HeaderComponent/>
            <div className="lg:ml-0 flex mb-[10%]">
                <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                    <SidebarComponentAdmin page="courses"/>
                </div>
                <div className="flex flex-col  3xl:w-[1420px] 2xl:w-[1100px] xl:w-[900px] lg:w-[600px] md:w-[500px] m-auto
                    3xl:font-bold xl:font-semibold md:font-medium justify-center">
                    <h2 className="inline-block mt-[55px] 3xl:text-[60px] 2xl:text-[55px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xsm:text-[30px]
                    m-auto">Курсы</h2>
                    <div className="flex justify-center">
                        <div className="mt-5">
                            <CoursesComponent/>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default CoursesPageAdmin;
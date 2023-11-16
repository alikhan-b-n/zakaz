import React from "react";
import {HeaderComponent} from "../Components/HeaderComponent";
import {FooterComponent} from "../Components/FooterComponent";
import {SidebarComponent} from "../Components/SidebarComponent";
import {MyProfileComponent} from "../Components/profile/MyProfileComponent";
import {useAuthUser} from 'react-auth-kit'
import YourCoursesComponent from "../Components/courses/YourCoursesComponent";


export default function (){
    const auth = useAuthUser()
    console.log(auth().id)
    return(
        <div>
            <HeaderComponent/>
            <div>
                <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                    <SidebarComponent/>
                </div>
                <div className="flex flex-col  3xl:w-[1262px] 2xl:w-[1000px] xl:w-[800px] lg:w-[500px] md:w-[500px] sm:w-[310px] m-auto
            3xl:font-bold xl:font-semibold md:font-medium 3xl:mb-[260px] 2xl:mb-[230px] xl:mb-[200px] lg:mb-[100px]">
                    <h1 className="inline-block mt-[55px] 3xl:text-[60px] 2xl:text-[55px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xsm:text-[30px]
                    m-auto">Мой профиль</h1>
                    <MyProfileComponent user={auth()}/>
                    <div>
                        <YourCoursesComponent/>
                    </div>
                </div>

            </div>
            <FooterComponent/>
        </div>
    )
}
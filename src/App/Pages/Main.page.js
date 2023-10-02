import {FooterComponent} from "../Components/FooterComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import {SidebarComponent} from "../Components/SidebarComponent";
import {Appeal} from "../Components/AppealComponent";
import {Banner} from "../Components/Extentions/Main/Banner";
import CoursesComponent from "../Components/courses/CoursesComponent";
import {OurCourses} from "../Components/Extentions/Categories/OurCourses";

export function MainPage() {
    return (
        <div>
            <HeaderComponent/>
            <div className="lg:ml-0 flex mb-[10%]">
                <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                    <SidebarComponent page="main"/>
                </div>
                <div className="flex flex-col  3xl:w-[1420px] 2xl:w-[1100px] xl:w-[900px] lg:w-[600px] md:w-[500px] m-auto
                               font-medium">
                    <Banner/>
                    <div className="flex flex-col justify-center">
                        <div className="flex m-auto lg:flex-col mt-3">
                            <OurCourses/>
                        </div>
                    </div>
                    {/*<div className="flex flex-col ">*/}
                    {/*    <h2 className="inline-block mt-[55px] 3xl:text-[60px] 2xl:text-[55px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xsm:text-[30px] m-auto ">Нужна помощь?</h2>*/}
                    {/*    <Appeal/>*/}
                    {/*</div>*/}
                </div>
            </div>
            <FooterComponent/>
        </div>
    );
}



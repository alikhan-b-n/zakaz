import {SidebarComponentAdmin} from "../AdminPanelComponents/SidebarComponent.Admin";
import {FooterComponent} from "../Components/FooterComponent";
import {CreateLessonComponent} from "../AdminPanelComponents/courses/lessons/CreateLessonComponent";
import {HeaderComponentAdmin} from "../AdminPanelComponents/HeaderComponentAdmin";
export function LessonsToCreate() {
    return(
        <div>
            <HeaderComponentAdmin/>
            <div className="flex font-normal mb-[10%]">
                <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                    <SidebarComponentAdmin page="courses"/>
                </div>
                <div className="m-auto 3xl:font-bold xl:font-semibold md:font-medium flex flex-col">
                    <h2 className="inline-block mt-[55px] 3xl:text-[60px] 2xl:text-[55px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xsm:text-[30px]
                    m-auto p-4">Урок</h2>
                    <div className="mt-5">
                        <CreateLessonComponent/>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}
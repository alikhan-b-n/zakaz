import {SidebarComponentAdmin} from "../AdminPanelComponents/SidebarComponent.Admin";
import {FooterComponent} from "../Components/FooterComponent";
import {DailyQuizComponent} from "../AdminPanelComponents/courses/DailyQuizComponent";
import {HeaderComponentAdmin} from "../AdminPanelComponents/HeaderComponentAdmin";

export function CreateDailyQuizComponentPageAdmin() {
    return(
        <div>
            <HeaderComponentAdmin/>
            <div className="flex font-normal mb-[10%]">
                <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                    <SidebarComponentAdmin page="courses"/>
                </div>
                <div className="m-auto 3xl:font-bold xl:font-semibold md:font-medium">
                    <div className="mt-5">
                        <DailyQuizComponent/>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}
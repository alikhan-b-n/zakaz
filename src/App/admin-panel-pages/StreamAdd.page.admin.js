import {SidebarComponentAdmin} from "../AdminPanelComponents/SidebarComponent.Admin";
import {FooterComponent} from "../Components/FooterComponent";
import {CreateStreamComponent} from "../AdminPanelComponents/Extentions/courses/Steam/CreateStreamComponent";
import {HeaderComponentAdmin} from "../AdminPanelComponents/HeaderComponentAdmin";

export function StreamAddPageAdmin(){

    return(
        <div>
            <HeaderComponentAdmin/>
            <div className="flex font-normal mb-[10%]">
                <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                    <SidebarComponentAdmin page="courses"/>
                </div>
                <div className="m-auto 3xl:font-bold xl:font-semibold md:font-medium">
                    <h2 className="inline-block mt-[55px] 3xl:text-[60px] 2xl:text-[55px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xsm:text-[30px]
                    m-auto p-4">Курсы</h2>
                    <div className="mt-5">
                        <CreateStreamComponent/>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}
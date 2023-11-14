import {HeaderComponent} from "../Components/HeaderComponent";
import {FooterComponent} from "../Components/FooterComponent";
import {AddUserComponent} from "../AdminPanelComponents/Users/AddUserComponent";
import {SidebarComponentAdmin} from "../AdminPanelComponents/SidebarComponent.Admin";

export function UsersToAddPageAdmin() {
    return(
        <div>
            <HeaderComponent/>
            <div className="flex font-normal mb-[10%]">
                <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                    <SidebarComponentAdmin page="users"/>
                </div>
                <div className="m-auto 3xl:font-bold xl:font-semibold md:font-medium flex flex-col">
                    <h2 className="inline-block mt-[55px] 3xl:text-[60px] 2xl:text-[55px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xsm:text-[30px]
                    m-auto">Пользователи</h2>
                    <div className="mt-5">
                        <AddUserComponent/>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}
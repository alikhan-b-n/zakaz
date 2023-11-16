import {SidebarComponentAdmin} from "../AdminPanelComponents/SidebarComponent.Admin";
import {FooterComponent} from "../Components/FooterComponent";
import {UsersComponent} from "../AdminPanelComponents/Users/UsersComponent";
import {Link} from "react-router-dom";
import {HeaderComponentAdmin} from "../AdminPanelComponents/HeaderComponentAdmin";

export function UsersPageAdmin() {
    return(
        <div>
            <HeaderComponentAdmin/>
            <div className="flex font-normal mb-[10%]">
                <div className="3xl:w-[150px] 2xl:w-[120px] xl:w-[100px] lg:w-0 h-70%">
                    <SidebarComponentAdmin page="users"/>
                </div>
                <div className="m-auto 3xl:font-bold xl:font-semibold md:font-medium">
                    <h2 className="inline-block mt-[55px] 3xl:text-[60px] 2xl:text-[55px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xsm:text-[30px]
                    m-auto">Пользователи</h2>
                    <div className="mt-5">
                        <UsersComponent/>
                        <Link to="/admin/users/usersAdd" className="3xl:py-5 3xl:px-10 3xl:text-2xl xl:py-4 xl:px-8 xl:text-xl
                        md:py-3 md:px-6 md:text-lg xsm:py-2 xsm:px-4 xsm:text-base
                        rounded-xl bg-orange-500 hover:bg-green-dark
                    justify-self-center text-white text-2xl mx-[45px]">Add</Link>
                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
}
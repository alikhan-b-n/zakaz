import {HeaderComponent} from "./HeaderComponent";
import {SidebarComponent} from "./SidebarComponent";

export function HeaderAndSidebarComponent(){
    return (
        <div className="relative">
            <HeaderComponent className="z-10" />
            <SidebarComponent className="z-0" />
        </div>
    );
}
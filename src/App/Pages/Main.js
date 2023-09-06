import {TeacherComponent} from "../Components/TeacherComponent";
import TeacherObj from "../Objects/TeacherObj";
import {FooterComponents} from "../Components/FooterComponents";
import {HeaderAndSidebarComponent} from "../Components/HeaderAndSidebarComponent";
import {HeaderComponent} from "../Components/HeaderComponent";

export function Main() {
    return (
        <div className="bg-[#F1F2F7]">
            <HeaderComponent/>
            <TeacherComponent obj={TeacherObj}/>
        </div>
    );
}



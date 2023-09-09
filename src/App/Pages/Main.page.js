import {TeacherComponent} from "../Components/TeacherComponent";
import TeacherObj from "../Objects/TeacherObj";
import {FooterComponent} from "../Components/FooterComponent";
import {HeaderAndSidebarComponent} from "../Components/HeaderAndSidebarComponent";
import {HeaderComponent} from "../Components/HeaderComponent";
import {SignInPage} from "./SignIn.page";
import {SignUpPage} from "./SignUp.page"

export function MainPage() {
    return (
        <div className="bg-[#F1F2F7]">
            <HeaderComponent />
            <h1>Main page</h1>
            <FooterComponent />
        </div>
    );
}



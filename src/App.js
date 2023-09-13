import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignInPage} from "./App/Pages/SignIn.page";
import {SignUpPage} from "./App/Pages/SignUp.page";
import {NotFoundPage} from "./App/Pages/NotFound.page";
import {MainPage} from "./App/Pages/Main.page";
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import TeacherPage from "./App/Pages/Teacher.page";
import MyProfilePage from "./App/Pages/MyProfile.page";
import {MyProfileComponent} from "./App/Components/MyProfileComponent";
import {CoursesPage} from "./App/Pages/Courses.page";

const queryClient = new QueryClient()

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/signin" element={<SignInPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/teachers" element={<TeacherPage/>}/>
                    <Route path="/courses" element={<CoursesPage/>}/>
                    <Route path="/myprofile" element={<MyProfilePage/>}/>

                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
        </QueryClientProvider>
    );
}
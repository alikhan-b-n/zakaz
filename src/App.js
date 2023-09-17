import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignInPage} from "./App/Pages/SignIn.page";
import {SignUpPage} from "./App/Pages/SignUp.page";
import {NotFoundPage} from "./App/Pages/NotFound.page";
import {MainPage} from "./App/Pages/Main.page";
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import TeacherPage from "./App/Pages/Teacher.page";
import {AuthProvider} from "react-auth-kit";
import CoursesComponent from "./App/Components/courses/CoursesComponent";
import CoursesPage from "./App/Pages/Courses.page";

const queryClient = new QueryClient()

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider
                authType={'cookie'}
                authName={'_auth'}
                cookieDomain={window.location.hostname}
                cookieSecure={window.location.protocol === "https:"}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/signin" element={<SignInPage/>}/>
                        <Route path="/signup" element={<SignUpPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/teachers" element={<TeacherPage/>}/>
                        <Route path="/courses" element={<CoursesPage/>}/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
            <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
        </QueryClientProvider>
    );
}
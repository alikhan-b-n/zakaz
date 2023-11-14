import {Route, Routes} from "react-router-dom";
import {SignInPage} from "./App/Pages/SignIn.page";
import {SignUpPage} from "./App/Pages/SignUp.page";
import {NotFoundPage} from "./App/Pages/NotFound.page";
import {MainPage} from "./App/Pages/Main.page";
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import TeacherPage from "./App/Pages/Teacher.page";
import {RequireAuth} from "./App/Components/Extentions/Auth/RequireAuth";
import CoursesPage from "./App/Pages/Courses.page";
import MyProfilePage from "./App/Pages/MyProfile.page";
import "./styles/index.css"
import {CoursePage} from "./App/Pages/Course.page";
import {ElementPage} from "./App/Pages/Element.page";
import {StreamPage} from "./App/Pages/Stream.page";
import {QuizPage} from "./App/Pages/Quiz.page";
import {SignInPageAdmin} from "./App/admin-panel-pages/SignIn.page.admin";
import CoursesPageAdmin from "./App/admin-panel-pages/Courses.page.admin";
import {UsersToAddPageAdmin} from "./App/admin-panel-pages/UsersToAdd.page.admin";
import {UsersPageAdmin} from "./App/admin-panel-pages/Users.page.admin";
import {CoursesToCreatePageAdmin} from "./App/admin-panel-pages/CoursesToCreate.page.admin";
import {LessonsToCreate} from "./App/admin-panel-pages/LessonsToCreate.page.admin";
import {CreateDailyQuizComponentPageAdmin} from "./App/admin-panel-pages/CreateDailyQuizComponent.page.admin";
import {StreamAddPageAdmin} from "./App/admin-panel-pages/StreamAdd.page.admin";
import {StreamDeletePageAdmin} from "./App/admin-panel-pages/StreamDelete.page.admin";
const queryClient = new QueryClient()

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/courses" element={<CoursesPage/>}/>
                <Route element={<RequireAuth/>}>
                    <Route path="/teachers" element={<TeacherPage/>}/>
                    <Route path="/profile" element={<MyProfilePage/>}/>
                    <Route path="/course/:id" element={<CoursePage/>}/>
                    <Route path="/course/:courseId/element/:elementId" element={<ElementPage/>}/>
                    <Route path="/course/:courseId/element/:elementId/weeklyQuiz" element={<QuizPage/>}/>
                    <Route path="/course/:courseId/stream" element={<StreamPage/>}/>
                </Route>

                <Route>
                    <Route path="/admin/signin" element={<SignInPageAdmin/>}/>
                    <Route path="/admin/" element={<CoursesPageAdmin/>}/>
                    <Route path="/admin/usersAdd" element={<UsersToAddPageAdmin/>}/>
                    <Route path="/admin/users" element={<UsersPageAdmin/>}/>
                    <Route path="/admin/courseCreate" element={<CoursesToCreatePageAdmin/>}/>
                    <Route path="/admin/:courseId/lessonCreate" element={<LessonsToCreate/>}/>
                    <Route path="/admin/createDailyQuiz" element={<CreateDailyQuizComponentPageAdmin/>}/>
                    <Route path="/admin/:courseId/Stream/Add" element={<StreamAddPageAdmin/>}/>
                    <Route path="/admin/:courseId/Stream/Delete" element={<StreamDeletePageAdmin/>}/>
                </Route>
            </Routes>
            <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
        </QueryClientProvider>
    );
}
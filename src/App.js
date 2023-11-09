import {Route, Routes} from "react-router-dom";
import {SignInPage} from "./App/Pages/SignIn.page";
import {NotFoundPage} from "./App/Pages/NotFound.page";
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import CoursesPage from "./App/Pages/Courses.page";
import "./styles/index.css"
import React from "react";
import {UsersToAddPage} from "./App/Pages/UsersToAdd.page";
import {UsersPage} from "./App/Pages/Users.page";
import {CoursesToCreatePage} from "./App/Pages/CoursesToCreate.page";
import {LessonsToCreate} from "./App/Pages/LessonsToCreate.page";
import {CreateDailyQuizComponentPage} from "./App/Pages/CreateDailyQuizComponent.page";
import {StreamAddPage} from "./App/Pages/StreamAdd.page";
const queryClient = new QueryClient()

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="/" element={<CoursesPage/>}/>
                <Route path="/usersAdd" element={<UsersToAddPage/>}/>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/courseCreate" element={<CoursesToCreatePage/>}/>
                <Route path=":courseId/lessonCreate" element={<LessonsToCreate/>}/>
                <Route path="/createDailyQuiz" element={<CreateDailyQuizComponentPage/>}/>
                <Route path=":courseId/Stream/Add" element={<StreamAddPage/>}/>
                <Route path=":courseId/Stream/Delete" element={<StreamAddPage/>}/>
            </Routes>
            <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
        </QueryClientProvider>
    );
}
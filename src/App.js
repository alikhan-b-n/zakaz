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
            </Routes>
            <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
        </QueryClientProvider>
    );
}
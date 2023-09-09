import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SignInPage} from "./App/Pages/SignIn.page";
import {SignUpPage} from "./App/Pages/SignUp.page";
import {NotFoundPage} from "./App/Pages/NotFound.page";
import {MainPage} from "./App/Pages/Main.page";
import {QueryClientProvider, QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'

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
                    <Route path="/teacher" element={<MainPage/>}/>
                    <Route path="/courses" element={<MainPage/>}/>
                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
        </QueryClientProvider>
    );
}
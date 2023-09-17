import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from 'react-hook-form';
import {useMutation} from "react-query";
import axios from "axios";
import {useSignIn} from 'react-auth-kit'


export const SignInPage = () => {
    const signIn = useSignIn()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPwd, setShowPwd] = useState(false)
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm()
    const showPassport = () => {
        setShowPwd(!showPwd)
    }

    const {mutate, isLoading, isError, error} = useMutation(async () =>
        await axios.post('http://193.70.125.178:4000/users/login',
            {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }), {
        onSuccess: (successData) => {
            signIn(
                {
                    token: successData.token,
                    expiresIn: successData.expiresIn,
                    tokenType: "Bearer",
                    authState: successData.authState
                }
            )
            navigate('/')
        }
    })

    if (isLoading) {
        return <p>Loading...</p>
    }


    if (isError) {
        return <p>{error.message}</p>
    }


    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="bg-grey-lighter min-h-screen flex flex-auto">
                <div
                    className="container 3xl:max-w-lg xl:max-w-md md:max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded-2xl shadow-md text-black w-full">
                        <div className="flex justify-between">
                            <button className="flex-initial text-xl font-bold pb-3 pl-2.5"
                                    onClick={() => navigate(-1)}>{`<`}</button>
                            <h1 className="flex-1 mb-5 text-2xl text-center mr-5 pr-3">Вход</h1>
                        </div>
                        <label className="pl-[18px] 3xl:text-[18px] md:text-[15px]">Email</label>
                        <input
                            type="text"
                            className="focus:outline-none focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block bg-slate-100 border bg-slate-100 mt-2 shadow-custom border-grey-light w-full p-3 rounded mb-4 shadow-custom"
                            name="email"
                            placeholder="Email"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                            })}
                            autoComplete="off"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            value={email}
                            required
                        />
                        {errors.email && <span className="text-rose-700	mb-[20px] block">Invalid email</span>}

                        <div>
                            <label className="pl-[18px]">Пароль</label>
                            <div className="mt-2">
                                <div
                                    className="outline-none block border bg-slate-100 w-full p-3 rounded mb-4 shadow-custom border-grey-light justify-between">
                                    <input type={showPwd ? "text" : "password"}
                                           className="bg-slate-100 3xl:w-[96%] xl:w-[95%] md:w-[90%] focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100"
                                           id="password"
                                           autoComplete="off"
                                           placeholder="Пароль"
                                           {...register("password", {
                                               required: true,
                                               pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                                           })}
                                           onChange={(e) => {
                                               setPassword(e.target.value)
                                           }}
                                           value={password}
                                           required
                                    />
                                    <button onClick={showPassport}>
                                        {showPwd ?
                                            <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="eye"
                                                 width="1em"
                                                 height="1em" fill="currentColor" aria-hidden="true">
                                                <path
                                                    d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                                            </svg>
                                            :
                                            <svg viewBox="64 64 896 896" focusable="false" className=""
                                                 data-icon="eye-invisible" width="1em" height="1em" fill="currentColor"
                                                 aria-hidden="true">
                                                <path
                                                    d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path>
                                                <path
                                                    d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path>
                                            </svg>
                                        }
                                    </button>
                                </div>
                                {errors.password &&
                                    <span className="text-rose-700 mb-[5px] block">Invalid password</span>}
                            </div>
                        </div>
                        {/*<div className="text-center text-sm text-grey-dark mt-4 mb-3">*/}
                        {/*    <a className="no-underline border-grey-dark text-gray-500" href="#">*/}
                        {/*        Забыли пароль?*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                        <div className="flex justify-center">
                            <button type="submit"
                                    onClick={handleSubmit(() => mutate({email: email, password: password}))} className="w-32 py-2 rounded-xl bg-orange-500 hover:bg-green-dark
                    justify-self-center text-white ">Войти
                            </button>
                        </div>
                        <div className="text-center text-sm text-grey-dark mt-4">
                            <Link to="/signup" className="border-grey-dark text-grey-dark text-orange-500">
                                Зарегестрироваться
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    )
}
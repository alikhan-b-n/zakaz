import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useMutation} from "react-query";
import axios from "axios";
import {baseUrl} from "../../api/axios";
import {useState} from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {useAuthHeader} from "react-auth-kit";

export function AddUserComponent() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronym, setPatronym] = useState('');
    const [roleId, setRoleId] = useState(1)
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm()
    const authHeader = useAuthHeader()
    const options = [
        1, 2, 3
    ];
    const defaultOption = options[0];

    const {mutate, isLoading, isError, error} = useMutation(async () =>
        await axios.post(`${baseUrl}/adminPanel/createUser`, {
                email: email,
                password: password,
                surname: surname,
                name: name,
                patronymic: patronym,
                roleId: roleId,
                description: ""
            }, {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `${authHeader()}`
                }
            }
        ), {
        onSuccess: () => {
            navigate('/users')
        }
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>{error.response.data.message}</p>
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="bg-grey-lighter flex flex-auto">
                <div
                    className="container  3xl:w-[800px] xl:w-[600px] md:w-[400px] xsm:w-[300px] mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded-2xl shadow-md text-black w-full">
                        <div className="flex justify-between">
                            <button className="flex-initial text-xl font-bold pb-3 pl-2.5"
                                    onClick={() => navigate(-1)}>{`<`}</button>
                            <h1 className="flex-1 mb-5 text-2xl text-center mr-5">Регистрация</h1>
                        </div>
                        <label className="pl-[18px]">Email</label>
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

                        <Dropdown className="my-3" placeholderClassName="p-[8px]" options={options} onChange={e=>setRoleId(e.value)} value={defaultOption} placeholder="Select an option" />

                        <label className="pl-[18px]">Имя</label>
                        <input
                            type="text"
                            className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            value={name}
                            required
                            placeholder="Имя"/>

                        <label className="pl-[18px]">Фамилие</label>
                        <input
                            type="text"
                            className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                            name="surname"
                            placeholder="Фамилие"
                            onChange={(e) => {
                                setSurname(e.target.value)
                            }}
                            value={surname}
                            required
                        />

                        <label className="pl-[18px]">Отчество</label>
                        <input
                            type="text"
                            className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                            name="patronym"
                            placeholder="Отчество"
                            onChange={(e) => {
                                setPatronym(e.target.value)
                            }}
                            value={patronym}
                            required
                        />

                        <label className="pl-[18px]">Пароль</label>
                        <div>
                            <div>
                                <div
                                    className="mt-2 outline-none block border bg-slate-100 w-full p-3 rounded mb-4 shadow-custom border-grey-light justify-between">
                                    <input type="text"
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
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button onClick={handleSubmit(() => mutate({
                                email: email,
                                password: password,
                                name: name,
                                surname: surname,
                                patronymic: patronym,
                                roleId: roleId
                            }))} type="submit" className="w-48 py-2 rounded-xl bg-orange-500 hover:bg-green-dark
                    justify-self-center text-white ">Зарегестрировать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useAuthHeader} from "react-auth-kit";
import {useMutation} from "react-query";
import axios from "axios";
import {baseUrl} from "../../api/axios";
import Dropdown from "react-dropdown";

export function CreateCourseComponent() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [price, setPrice] = useState(0)
    const navigate = useNavigate();
    const {handleSubmit} = useForm()
    const authHeader = useAuthHeader()
    const options = [
        1, 2, 3
    ];
    const defaultOption = options[0];

    const {mutate, isLoading, isError, error} = useMutation(async () =>
        await axios.post(`${baseUrl}/adminPanel/createUser`, {
                surname: surname,
                name: name,
                roleId: price
            }, {
                headers: {
                    'Content-Type': 'application/json',
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
            <div className="bg-grey-lighter min-h-screen flex flex-auto">
                <div
                    className="container 3xl:max-w-lg xl:max-w-md md:max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded-2xl shadow-md text-black w-full">
                        <div className="flex justify-between">
                            <button className="flex-initial text-xl font-bold pb-3 pl-2.5"
                                    onClick={() => navigate(-1)}>{`<`}</button>
                            <h1 className="flex-1 mb-5 text-2xl text-center mr-5">Добавлене курса</h1>
                        </div>

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
                        <div className="flex justify-center">
                            <button onClick={handleSubmit(() => mutate({
                                name: name,
                                surname: surname,
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
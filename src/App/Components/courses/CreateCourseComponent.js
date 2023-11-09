import {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useAuthHeader} from "react-auth-kit";
import {useMutation} from "react-query";
import axios from "axios";
import {baseUrl} from "../../api/axios";
import {useDropzone} from "react-dropzone";

export function CreateCourseComponent() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState();
    const [teacherId, setTeacherId] = useState(0)
    const navigate = useNavigate();
    const {handleSubmit} = useForm()
    const authHeader = useAuthHeader()


    const onDrop = useCallback((acceptedFiles) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(acceptedFiles[0])
        setFile(acceptedFiles[0])


    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop
    })

    const {mutate, isLoading, isError, error} = useMutation(async () =>
        await axios.post(`${baseUrl}/adminPanel/createCourse`, {
                description: description,
                name: name,
                price: price,
                teacherId: teacherId,
                image: file
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
                    'Authorization': `${authHeader()}`
                }
            }
        ), {
        onSuccess: () => {
            navigate('/')
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
                    className="container 3xl:w-[1000px] 2xl:w-[800px] xl:w-[600px] lg:w-[400px] sm:w-[300px] mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded-2xl shadow-md text-black w-full">
                        <div className="flex justify-between">
                            <button className="flex-initial text-xl font-bold pb-3 pl-2.5"
                                    onClick={() => navigate(-1)}>{`<`}</button>
                            <h1 className="flex-1 mb-5 text-2xl text-center mr-5">Добавлене курса</h1>
                        </div>

                        <label className="pl-[18px]">Название курса</label>
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

                        <label className="pl-[18px]">Изображение курса</label>
                        <div className="mb-[5%] flex flex-col justify-center items-center" {...getRootProps()}>
                            <input
                                {...getInputProps()}
                            />
                            {!isDragActive && (<p>Выберите файлы</p>)}
                        </div>

                        <label className="pl-[18px]">Id учителя</label>
                        <input
                            type="number"
                            step="any"
                            className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                            name="teacher_id"
                            onChange={(e) => {
                                setTeacherId(e.target.value)
                            }}
                            value={teacherId}
                            required
                            placeholder="Id Учителя"/>

                        <label className="pl-[18px]">Цена курса</label>
                        <input
                            type="number"
                            step="any"
                            className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                            name="price"
                            onChange={(e) => {
                                setPrice(e.target.value)
                            }}
                            value={price}
                            required
                            placeholder="Цена"/>

                        <label className="pl-[18px]">Описание</label>
                        <textarea
                            className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                            name="description"
                            placeholder="Описание"
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            value={description}
                            required
                        />
                        <div className="flex justify-center">
                            <button onClick={handleSubmit(() => mutate({
                                name: name,
                                description: description,
                                price: price,
                                teacherId: teacherId
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
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useAuthHeader} from "react-auth-kit";
import {useMutation} from "react-query";
import axios from "axios";
import {baseUrl} from "../../../api/axios";

export function CreateLessonComponent() {
    const [lessonName, setLessonName] = useState('');
    const [content, setContent] = useState('');
    const [quizName, setQuizName] = useState('')
    const [questions, setQuestions] = useState(0)
    const [answers, setAnswers] = useState(0)
    const [rightAnswers, setRightAnswers] = useState(0)
    const [courseId, setCourseId] = useState(0)
    const navigate = useNavigate();
    const {handleSubmit} = useForm()
    const authHeader = useAuthHeader()

    const {mutate, isLoading, isError, error} = useMutation(async () =>
        await axios.post(`${baseUrl}/adminPanel/createUser`, {
                name: lessonName,
                content: content,
                courseId: courseId,
                quiz:{
                    name: quizName,
                    questions: questions,
                    answers:answers,
                    rightAnswers:rightAnswers
                }
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
                            <h1 className="flex-1 mb-5 text-2xl text-center ml-3">Добавление урока</h1>
                        </div>
                        <label className="pl-[18px]">Название Урока</label>
                        <input
                            type="text"
                            className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            onChange={(e) => {
                                setLessonName(e.target.value)
                            }}
                            value={lessonName}
                            required
                            placeholder="Название Урока"/>
                        <label className="pl-[18px]">Содержание урока</label>
                        <input
                            type="text"
                            className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                            name="content"
                            placeholder="Содержание урока"
                            onChange={(e) => {
                                setContent(e.target.value)
                            }}
                            value={content}
                            required
                        />
                        <label className="pl-[18px]">Название Теста</label>
                        <input
                            type="text"
                            className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                            name="quizName"
                            placeholder="Название теста"
                            onChange={(e) => {
                                setQuizName(e.target.value)
                            }}
                            value={quizName}
                            required
                        />
                        <label className="pl-[18px]">ID курса</label>
                        <input
                            type="text"
                            className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                            name="courseId"
                            placeholder="ID курса"
                            onChange={(e) => {
                                setCourseId(e.target.value)
                            }}
                            value={courseId}
                            required
                        />
                        <div className="flex justify-center">
                            <button onClick={handleSubmit(() => mutate({
                                name: lessonName,
                                content: content,
                            }))} type="submit" className="w-48 py-2 rounded-xl bg-orange-500 hover:bg-green-dark
                    justify-self-center text-white ">Зарегестрировать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )

}
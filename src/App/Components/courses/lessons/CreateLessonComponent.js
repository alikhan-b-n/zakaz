import {useCallback, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useAuthHeader} from "react-auth-kit";
import {useMutation} from "react-query";
import axios from "axios";
import {baseUrl} from "../../../api/axios";
import {useDropzone} from "react-dropzone";

export function CreateLessonComponent() {
    const {courseId} = useParams()
    const [lessonName, setLessonName] = useState('');
    const [content, setContent] = useState('');
    const [quizName, setQuizName] = useState('')
    const [questions, setQuestions] = useState([{ question: "", correctAnswer: "", answers: [""] }]);
    const [Id] = useState(parseInt(courseId))
    const navigate = useNavigate();
    const {handleSubmit} = useForm()
    const authHeader = useAuthHeader()
    const [fileName, setFileName] = useState('')
    const [file, setFile] = useState();
    const [url, setUrl] = useState('')

    const onDrop = useCallback((acceptedFiles) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(acceptedFiles[0])
        setFile(acceptedFiles[0])
        setFileName(acceptedFiles[0].name)

    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop
    })

    const {mutate, isLoading, isError, error} = useMutation(async () =>
        await axios.post(`${baseUrl}/adminPanel/createLesson`, {
                name: lessonName,
                content: content,
                courseId: parseInt(courseId),
                quiz:{
                    name: quizName,
                    questions: questions.map(q=>q.question),
                    rightAnswers: questions.map(q=>q.correctAnswer),
                    answers: questions.map(q => q.answers.map(answer => ( answer )))
                }
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${authHeader()}`,

                }
            }
        ), {
        onSuccess: (successData) => {
            console.log(successData.data.Id)
            axios.post(`${baseUrl}/adminPanel/uploadVideo`, {
                "name": fileName,
                "courseElementId": successData.data.Id,
                "url": url,
                "file": file
            },{
                headers:{
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `${authHeader()}`,
                }
            }).then(r => r.data.name).then(navigate('/'))
        }
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>{error.response.data.message}</p>
    }

    const AddQuestion=()=>{
        setQuestions(questions.concat({ question: "", correctAnswer: "", answers: [""] }))
    }

return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="bg-grey-lighter flex flex-auto">
                <div
                    className="container 3xl:w-[1000px] 2xl:w-[800px] xl:w-[600px] lg:w-[400px] md:w-[300px] mx-auto flex-1 flex flex-col items-center justify-center px-2">
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

                        <label className="pl-[18px]">
                            Видео урока
                        </label>
                        <div {...getRootProps()}>
                            <input
                                {...getInputProps()}
                            />
                            {!isDragActive && (<p>Выберрите файлы</p>)}
                        </div>
                        <label className="pl-[18px]">Ссылка на ютуб-видео (Альтернатива)</label>
                        <input
                            type="text"
                            onChange={(e) => {
                                setUrl(e.target.value)
                            }}
                            className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Ссылка урока"
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
                        {
                            questions.map((question, index) => (
                                <div key={index}>
                                    <label className="pl-[18px]">Question: {index+1}</label>
                                    <input
                                        type="text"
                                        className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                                        value={question.question}
                                        placeholder="Вопрос"
                                        onChange={e => {
                                            const newQuestions = [...questions];
                                            newQuestions[index].question = e.target.value;
                                            setQuestions(newQuestions);
                                        }}
                                    />
                                    <label className="pl-[18px]">Correct answer</label>
                                    <input
                                        type="text"
                                        className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                                        value={question.correctAnswer}
                                        placeholder="Правильный ответ"
                                        onChange={e => {
                                            const newQuestions = [...questions];
                                            newQuestions[index].correctAnswer = e.target.value;
                                            newQuestions[index].answers[2] = e.target.value;
                                            setQuestions(newQuestions);
                                        }}
                                    />
                                    <label className="pl-[18px]">Incorrect answer</label>
                                    <input
                                        type="text"
                                        className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                                        value={question.answers[0]}
                                        placeholder="Ответ"
                                        onChange={e => {
                                            const newQuestions = [...questions];
                                            newQuestions[index].answers[0] = e.target.value;
                                            setQuestions(newQuestions);
                                        }}
                                    />
                                    <label className="pl-[18px]">Incorrect answer</label>
                                    <input
                                        type="text"
                                        className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                                        value={question.answers[1]}
                                        placeholder="Ответ"
                                        onChange={e => {
                                            const newQuestions = [...questions];
                                            newQuestions[index].answers[1] = e.target.value;
                                            setQuestions(newQuestions);
                                        }}
                                    />

                                    <label className="pl-[18px]">Incorrect answer</label>
                                    <input
                                        type="text"
                                        className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                                        value={question.answers[3]}
                                        placeholder="Ответ"
                                        onChange={e => {
                                            const newQuestions = [...questions];
                                            newQuestions[index].answers[3] = e.target.value;
                                            setQuestions(newQuestions);
                                        }}
                                    />
                                </div>
                            ))
                        }

                        <div className="flex justify-center mb-2">
                            <button className="w-48 py-2 rounded-xl bg-orange-500 hover:bg-green-dark
                    justify-self-center text-white " onClick={()=>AddQuestion()}>Добавить вопрос</button>
                        </div>

                        <div className="flex justify-center">
                            <button onClick={handleSubmit(() => mutate({
                                name: lessonName,
                                content: content,
                                Id: Id,
                                quiz:{
                                    name: quizName,
                                    questions: questions.map(q=>q.question),
                                    rightAnswers: questions.map(q=>q.correctAnswer),
                                    answers: questions.map(q => q.answers.map(answer => ( answer )))
                                }
                            }))} type="submit" className="w-48 py-2 rounded-xl bg-orange-500 hover:bg-green-dark
                    justify-self-center text-white ">Добавить урок
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )

}
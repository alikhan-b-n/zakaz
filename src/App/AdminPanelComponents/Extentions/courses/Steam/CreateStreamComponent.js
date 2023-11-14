import {useAuthHeader} from "react-auth-kit";
import {useNavigate, useParams} from "react-router-dom";
import {baseUrl} from "../../../../api/axios";
import {useMutation} from "react-query";
import axios from "axios";
import {useState} from "react";

export function CreateStreamComponent(){
    const authHeader = useAuthHeader()
    const [streamUrl, setStreamUrl] = useState()
    const {courseId} = useParams()
    const navigate = useNavigate();
    const url =`${baseUrl}/adminPanel/adminCreateStream`
    const {mutate, isLoading, isError, error} = useMutation(async () =>
        await axios.post(url, {
                link: streamUrl,
                courseId: parseInt(courseId)
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${authHeader()}`
                }
            }
        ), {
        onSuccess: () => {
            navigate('/admin')
        }
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>{error.response.data.message}</p>
    }


    return(
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="bg-grey-lighter flex flex-auto">
                    <div
                        className="container 3xl:w-[1000px] 2xl:w-[800px] xl:w-[600px] lg:w-[400px] md:w-[300px] mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded-2xl shadow-md text-black w-full">
                            <div className="flex justify-between">
                                <button className="flex-initial text-xl font-bold pb-3 pl-2.5"
                                        onClick={() => navigate(-1)}>{`<`}</button>
                                <h1 className="flex-1 mb-5 text-2xl text-center ml-3">Добавление стрима</h1>
                            </div>
                            <label className="pl-[18px]">Ссылка на стрим</label>
                            <input
                                type="text"
                                className="focus:outline-none autofill:appearance-none placeholder:bg-slate-100 autofill:bg-slate-100 hover:bg-slate-100 placeholder-shown:bg-slate-100 block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                                name="name"
                                onChange={(e) => {
                                    setStreamUrl(e.target.value)
                                }}
                                value={streamUrl}
                                required
                                placeholder="Название Урока"/>
                            <div className="flex justify-center">
                                <button onClick={() => mutate({
                                    link: streamUrl,
                                    courseId: courseId
                                    }
                                )} type="submit" className="w-48 py-2 rounded-xl bg-orange-500 hover:bg-green-dark
                    justify-self-center text-white ">Добавить стрим
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
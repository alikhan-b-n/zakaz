import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import axios from "axios";
import {useAuthHeader} from "react-auth-kit";

export function StreamPage(){
    const {courseId} = useParams()
    const authHeader = useAuthHeader()
    const url = `http://193.70.125.178:4000/auth/stream/${courseId}`

    const {isLoading, data, isError, error } = useQuery(['stream', courseId],  () =>
        axios.get(url, {
            headers: {
                'Authorization': `${authHeader()}`
            }
        })
    );

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>{error.message}</p>
    }

    let isStreamOn = data.data !== "";

    return(
        <div>
            {
                isStreamOn
                    ?
                    <div>
                        <iframe src={data.data.link} frameBorder="0" title="Stream"></iframe>
                        <p>{`${data.data.teacherSurname} ${data.data.teacherName} ${data.data.teacherPatronymic}`}</p>
                        <p>{data.data.courseName}</p>
                    </div>
                    :
                    <div>
                        <h1>Stream ended</h1>
                    </div>
            }
        </div>
    )
}
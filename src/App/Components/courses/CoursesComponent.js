import {useQuery} from "react-query";
import axios from "axios";

export function MainPage() {
    const fetchCourses = axios.get('')
    const [isLoading, data, isError, error] = useQuery(
        'courses'
    )
    return(
        <div>

        </div>
    )
}
import {useQuery} from "react-query";
import axios from "axios";
import {useState} from "react";
import {Course} from "./CourseComponent";

export async function CoursesComponent() {
    const [pageNumber, setPageNumber] = useState(1);
    const url = `http://193.70.125.178:4000/courses/:${pageNumber}`;
    const fetchCourses = async () => {
        return await axios.get(url)
    }
    const [isLoading, data, isError, error] = useQuery(
        'courses',
        await fetchCourses
    )
    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message()}</h2>
    }

    return (
        <div>
            {data.data.map((course) => (
                <Course course={course} key={course.id} /> // Make sure to include a unique key
            ))}
        </div>
    )
}
import React, {useState} from "react";
import axios from "axios";
import {useQuery} from "react-query";
import {CourseComponent} from "./CourseComponent";
import {NoCourses} from "./NoCourses";

function CoursesComponent() {
    const [pageNumber, setPageNumber] = useState(1);
    const url = `http://193.70.125.178:4000/courses/${pageNumber}`;

    const {isLoading, data, isError, error} = useQuery(
        ['courses', pageNumber],
        () => axios.get(url)
    );


    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <p>{error.response.data.message}</p>
    }

    return (
        <div className="carousel-container font-[600]">
            <div className="flex 3xl:flex-row">
                <button
                    className={`focus:outline-none ${pageNumber - 1 === 0 ? 'text-gray-400' : 'text-black'}
                    3xl:text-[50px] lg:text-[40px] mr-[20px]`}
                    disabled={pageNumber - 1 === 0}
                    onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                >
                    {"<"}
                </button>
                <div className="flex flex-col mr-[20px]">
                    {data!=null ? data.data.courses.map((x) => (
                        <div className="" key={x.id}>
                            <CourseComponent course={x}/>
                        </div>
                    )) : <NoCourses/>}
                </div>
                <button
                    className={`focus:outline-none ${data.data.numberOfPages - pageNumber === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-black'}
                    3xl:text-[50px] lg:text-[40px]`}
                    disabled={data.data.numberOfPages - pageNumber === 0}
                    onClick={() => setPageNumber((prev) => prev + 1)}
                >
                    {">"}
                </button>
            </div>
        </div>
    );
}

export default CoursesComponent;

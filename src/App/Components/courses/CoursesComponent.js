import React, {useState} from "react";
import axios from "axios";
import {useQuery} from "react-query";
import {CourseComponent} from "./CourseComponent";

function CoursesComponent() {
    const [pageNumber, setPageNumber] = useState(1);
    const url = `http://193.70.125.178:4000/courses/${pageNumber}`;

    const {isLoading, data, isError, error} = useQuery(
        ['courses', pageNumber], // Include the pageNumber in the query key to ensure it refetches when pageNumber changes
        () => axios.get(url)
    );

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <div className="carousel-container">
            <div className="flex 3xl:flex-row lg:flex-col">
                {data.data.courses.map((x) => (
                    <div className="" key={x.id}>
                        <CourseComponent course={x}/>
                    </div>
                ))}
            </div>
            <div className="text-[50px] flex justify-between w-[100px] text-orange-500">
                <button
                    className={`focus:outline-none ${pageNumber - 1 === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-orange-500 hover:bg-orange-600'}`}
                    disabled={pageNumber - 1 === 0}
                    onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                >
                    {"<"}
                </button>

                <button
                    className={`focus:outline-none ${data.data.numberOfPages - pageNumber === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-orange-500 hover:bg-orange-600'}`}
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

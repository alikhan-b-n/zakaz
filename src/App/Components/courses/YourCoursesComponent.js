import React, {useState} from "react";
import {useQuery} from "react-query";
import axios from "axios";
import {CourseComponent} from "./CourseComponent";


function YourCoursesComponent(prop){
    const [pageNumber, setPageNumber] = useState(1);
    const url = `http://193.70.125.178:4000/studentCourses/${prop.id}/${pageNumber}`;
    const {isLoading, data, isError, error} = useQuery(
        ['mycourses', pageNumber],
        () => axios.get(url)
    );


    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    return (
        <div className="carousel-container ">

            <div className="flex 3xl:flex-row">
                <button
                    className={`focus:outline-none ${pageNumber - 1 === 0 ? 'text-gray-400' : 'text-black'}
                    3xl:text-[50px] lg:text-[40px] mr-[20px]`}
                    disabled={pageNumber - 1 === 0}
                    onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                >
                    {"<"}
                </button>
                <div className="flex lg:flex-col lg:mr-[20px]">
                    {data?.data.mycourses.map((x) => (
                        <div className="" key={x.id}>
                            <CourseComponent mycourse={x}/>
                        </div>
                    ))}
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

export default YourCoursesComponent
import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Course } from "./CourseComponent";



function CoursesComponent() {
    const [pageNumber, setPageNumber] = useState(1);
    const url = `http://193.70.125.178:4000/courses/${pageNumber}`;

    const { isLoading, data, isError, error } = useQuery(
        'courses',
        () => axios.get(url)
    );

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{error.message}</h2>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Change this to control the number of items shown at once
        slidesToScroll: 1
    };

    return (
        <div>
            <div {...settings} className="flex 3xl:flex-row xl:flex-col">
                {data.data.courses.map((x) => (
                    <div >
                        <Course course={x} key={x.id} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoursesComponent;

import {useQuery} from "react-query";
import axios from "axios";
import React from "react";

export function MyTeacher(props){
    const url = `http://193.70.125.178:4000/teacherinfo/${props.id}`
    const {isLoading, data, isError, error } = useQuery(['course', props.id],  () =>
        axios.get(url)
    );

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>{error.response.data.message}</p>
    }
    const avatarUrl = `http://193.70.125.178:4000/user/${props.id}/${data.data.avatar}`
    const divStyle = {
        'backgroundImage': `url(${avatarUrl})`
    }
    return(
        <div className="flex justify-between lg:text-[16px] sm:text-[12px]">
            <div>
                <h1>{data.data.surname} {data.data.name} {data.data.patronymic}</h1>
                <h1>{data.data.email}</h1>
            </div>
            <div style={divStyle} className="3xl:w-[280px] 3xl:h-[300px] lg:w-[200px] lg:h-[240px] md:hidden 3xl:mt-[-120px] lg:mt-[-80px] bg-no-repeat bg-cover"></div>
        </div>
    );
}
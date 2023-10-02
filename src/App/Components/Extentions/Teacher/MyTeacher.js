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
        <div className="flex text-[32px]  mb-[20px] ">
            <div style={divStyle} className="w-[150px] h-[150px] md:hidden bg-no-repeat bg-cover rounded-3xl mr-[20px]"></div>
            <div className="flex flex-col justify-center">
                <h1>{data.data.surname} {data.data.name} {data.data.patronymic}</h1>
                <h1 className="underline text-orange-500">{data.data.email}</h1>
            </div>
        </div>
    );
}
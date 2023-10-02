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

    return(
        <div className="flex">
            <div>
                <h1>{data.data.email}</h1>
                <h1>{data.data.name}</h1>
                <h1>{data.data.surname}</h1>
                <h1>{data.data.patronymic}</h1>
            </div>
            <img src={avatarUrl} alt="Teachers avatar"/>
        </div>
    );
}
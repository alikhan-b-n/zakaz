import {YourCourseComponent} from "../YourCourseComponent";
import React from "react";
import {NoElements} from "./NoElements";

export function ElementsComponent(props){
    return(
        <div>
            {props!=null ? props.data.elements.map((x) => (
                <div className="" key={x.id}>
                    <YourCourseComponent courseId={props.courseId} element={x}/>
                </div>
            )) : <NoElements/>}
        </div>
    )
}
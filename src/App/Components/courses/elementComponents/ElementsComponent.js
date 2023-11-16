import React from "react";
import {NoElements} from "./NoElements";
import {ElementComponent} from "./ElementComponent";

export function ElementsComponent(props){
    console.log(props.elements)
    return(
        <div>
            {props.elements!=null ? props.elements.map((x) => (
                <div className="" key={x.Id}>
                    <ElementComponent courseId={props.courseId} element={x}/>
                </div>
            )) : <NoElements/>}
        </div>
    )
}
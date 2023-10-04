import React from "react";
import {NoVideo} from "./NoVideo";
import {VideoComponent} from "./VideoComponent";

export function VideoComponents(props){
    console.log(props)
    return(
        <div className="flex">
            {props.videos!=null ? props.videos.map((x, index) => (
                <div className="" key={index}>
                    <VideoComponent video={x} elementId={props.elementId}/>
                </div>
            )) : <NoVideo/>}
        </div>
    )
}
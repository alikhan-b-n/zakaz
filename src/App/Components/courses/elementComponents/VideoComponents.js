import React from "react";
import {NoVideo} from "./NoVideo";
import {VideoComponent} from "./VideoComponent";

export function VideoComponents(props){
    return(
        <div className="flex">
            {props!=null ? props.videos.map((x, index) => (
                <div className="" key={index}>
                    <VideoComponent video={x} elementId={props.elementId}/>
                </div>
            )) : <NoVideo/>}
        </div>
    )
}
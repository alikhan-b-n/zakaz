import React from "react";
import {NoVideo} from "./NoVideo";
import {VideoComponent} from "./VideoComponent";

export function VideoComponents(props){
    console.log(props)
    return(
        <div className="flex flex-col justify-center items-center mb-[70px]">
            <div className="text-[45px] my-[30px] font-semibold">Видео</div>
            {props.videos!=null ? props.videos.map((x, index) => (
                <div className="" key={index}>
                    <VideoComponent video={x} elementId={props.elementId}/>
                </div>
            )) : <NoVideo/>}
        </div>
    )
}
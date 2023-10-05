export function VideoComponent(prop){
    let isFile = prop.video.url === "";
    let videoUrl = prop.video.url
    let videoFile = `http://193.70.125.178:4000/video/${prop.elementId}/${prop.video.filename}`
    return(
        <div className="flex justify-center mb-[50px]">
            <div className="lg:w-[350px] lg:h-[350px] sm:w-[300px] sm-h-[300px]">
                {
                    !isFile
                        ?
                        <iframe
                                src={videoUrl}
                                width="100%"
                                height="auto"
                                allowFullScreen
                                className="embed-responsive-item"
                        >
                        </iframe>
                        :
                        <video controls>
                            <source src={videoFile} type="video/mp4"/>
                        </video>
                }
                <div className="flex justify-center mt-[10px]">
                    <h2 className="text-[30px]">{prop.video.name}</h2>
                </div>
            </div>
        </div>
    )
}
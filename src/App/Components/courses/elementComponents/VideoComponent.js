export function VideoComponent(prop){
    let isFile = prop.video.url === "";
    let videoUrl = prop.video.url
    let videoFile = `http://193.70.125.178:4000/video/${prop.elementId}/${prop.video.filename}`
    return(
        <div className="flex justify-center mb-[50px]">
            <div className="3xl:w-[700px] xl:w-[500px] lg:w-[350px] sm:w-[300px]">
                {
                    !isFile
                        ?
                        <iframe
                                src={videoUrl}
                                width="100%"
                                height="120%"
                                allowFullScreen
                                className="embed-responsive-item "
                        >
                        </iframe>
                        :
                        <video controls width="100%" height="auto">
                            <source src={videoFile} type="video/mp4"/>
                        </video>
                }
                <div className="flex justify-center mt-[10px] mb-[20px]">
                    <h2 className="text-[30px]">{prop.video.name}</h2>
                </div>
            </div>
        </div>
    )
}
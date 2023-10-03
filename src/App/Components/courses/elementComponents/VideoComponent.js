export function VideoComponent(prop){
    let isFile = prop.video.url === "";
    let videoUrl = prop.video.url
    let videoFile = `http://193.70.125.178:4000/video/${prop.elementId}/${prop.video.filename}`
    return(
        <div>
            {
                !isFile
                    ?
                    <iframe width="420" height="315"
                            src={videoUrl}
                            allowFullScreen
                            className="embed-responsive-item"
                    >
                    </iframe>
                    :
                    <video controls>
                        <source src={videoFile} type="video/mp4"/>
                    </video>
            }

            <h2>{prop.video.name}</h2>
        </div>
    )
}
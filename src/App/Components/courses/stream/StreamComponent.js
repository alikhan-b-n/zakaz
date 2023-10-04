import {useNavigate} from "react-router-dom";

export function StreamComponent(props){
    const navigate = useNavigate()
    function handleClick(){
        navigate(`/course/${props.courseId}/stream`)
    }

    return(
        <div>
            <button onClick={handleClick}>Go to stream</button>
        </div>
    )
}
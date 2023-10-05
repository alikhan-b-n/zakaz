import {useNavigate} from "react-router-dom";

export function StreamComponent(props){
    const navigate = useNavigate()
    function handleClick(){
        navigate(`/course/${props.courseId}/stream`)
    }

    return(
        <div>
            <button className="bg-orange-500 text-white p-[20px] rounded-lg mb-[20px]" onClick={handleClick}>Go to stream</button>
        </div>
    )
}
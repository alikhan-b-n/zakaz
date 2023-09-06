export function TeacherComponent(props) {
    return (
        <div className="grid grid-cols-5 flex 3xl:w-[1100px] mx-auto bg-white">
            <div className="col-span-1 border-r-4 border-r-[#E2E9EF] px-[20px] pt-[15px] pb-[53px] flex flex-col text-center">
                <img src={process.env.PUBLIC_URL+`../Assets/`+props.obj.imageUrl}
                     alt="Teacher"
                     className="object-contain w-[197px] h-[197px] rounded-[197px] pb-[14px]"/>
                <p className="text-black font-[15px] font-semibold pr-[10px]">Опыт работы: {props.obj.additional_info.experience}</p>
            </div>
            <div className="col-span-3 bg-white p-[30px]">
                <h1 className="text-[25px] font-bold text-black">{props.obj.name}</h1>
                <p className="text-[18px] text-black font-semibold">{props.obj.description}</p>
            </div>
            <div className="col-span-1">
                <ul className="mt-[20px] mr-[20px]">
                    <li className="align-middle justify-center py-[15px] px-[35px] mb-[20px] inline-flex shadow-custom bg-[#F1F2F7] rounded-[10px]">
                        <p className="font-[18px] font-[900] text-black">6 лет практики</p>
                    </li>
                    <li className="align-middle justify-center py-[15px] px-[35px] mb-[20px] inline-flex  shadow-custom bg-[#F1F2F7] rounded-[10px]">
                        <p className="font-[18px] font-[900] text-black">6 лет практики</p>
                    </li>
                    <li className="align-middle justify-center py-[15px] px-[35px] mb-[20px] inline-flex  shadow-custom bg-[#F1F2F7] rounded-[10px]">
                        <p className="font-[18px] font-[900] text-black">6 лет практики</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
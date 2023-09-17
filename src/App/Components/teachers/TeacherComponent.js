export function TeacherComponent(props) {
    return (
        <div className="grid 3xl:grid-cols-5 lg:grid-cols-1 flex 3xl:w-[1420] mx-auto bg-white mb-[40px] rounded">
            <div className="col-span-1 3xl:border-r-4 border-r-[#E2E9EF] lg:border-r-0 lg:border-b-4 px-[20px] pt-[15px] flex lg:flex-row
            3xl:flex-col text-center items-center">
                <img src={process.env.PUBLIC_URL+`../Assets/`+props.obj.imageUrl}
                     alt="Teacher"
                     className="object-contain w-[197px] h-[197px] lg:w-[150px] lg:h-[150px] lg:mb-[10px] rounded-[197px]"/>
                <div className="lg:ml-[20px]">
                    <h1 className="text-[25px] font-bold text-black 3xl:hidden lg:inline">{props.obj.name}</h1>
                    <p className="text-black font-[15px] font-semibold pr-[10px]">Опыт работы: {props.obj.additional_info.experience}</p>
                </div>
            </div>
            <div className="col-span-3 bg-white p-[30px]">
                <h1 className="text-[25px] font-bold text-black lg:hidden">{props.obj.name}</h1>
                <p className="text-[18px] text-black font-semibold">{props.obj.description}</p>
                <div className="flex">
                    <div className="3xl:hidden lg:inline lg:col-span-2">
                        <ul className="mt-[20px] mr-[20px] grid grid-cols-2 lg:grid-cols-2 gap-4 font-[18px] font-[900] lg:font-semibold">
                            <li className="items-center justify-center inline-flex shadow-custom bg-[#F1F2F7] rounded-[10px] lg:h-[50px] lg:w-[180px]
                            xsm:w-[140px]">
                                <p className="">6 лет практики</p>
                            </li>
                            <li className="items-center justify-center inline-flex shadow-custom bg-[#F1F2F7] rounded-[10px] lg:h-[50px] lg:w-[180px]
                            xsm:w-[140px]">
                                <p className="">6 лет практики</p>
                            </li>
                            <li className="items-center justify-center inline-flex shadow-custom bg-[#F1F2F7] rounded-[10px] lg:h-[50px] lg:w-[180px]
                            xsm:w-[140px]">
                                <p className="">6 лет практики</p>
                            </li>
                            <li>
                                <div className="">
                                    <button type="submit" className="
                                        lg:text-[18px] lg:w-[180px] lg:h-[43px] xsm:w-[140px]
                                        rounded-xl bg-orange-500 text-white text-normal">
                                        Подробнее
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-start">
                        <button type="submit" className="
                        3xl:text-[25px] 3xl:w-[200px] 3xl:h-[57px]
                        2xl:text-[23px] 2xl:w-[180px] 2xl:h-[50px]
                        xl:text-[20px] xl:w-[160px] xl:h-[45px]
                        lg:hidden
                        mt-[33px] w-48 text-base 3xl:mb-6
                        rounded-xl bg-orange-500 text-white">Подробнее</button>
                    </div>
                </div>
            </div>
            <div className="col-span-1 lg:hidden">
                <ul className="mt-[20px] mr-[20px]">
                    <li className="align-middle justify-center py-[10px] px-[35px] mb-[10px] inline-flex shadow-custom bg-[#F1F2F7] rounded-[10px]">
                        <p className="font-[16px] font-[800] text-black">6 лет практики</p>
                    </li>
                    <li className="align-middle justify-center py-[15px] px-[35px] mb-[10px] inline-flex  shadow-custom bg-[#F1F2F7] rounded-[10px]">
                        <p className="font-[16px] font-[800] text-black">6 лет практики</p>
                    </li>
                    <li className="align-middle justify-center py-[15px] px-[35px] mb-[10px] inline-flex  shadow-custom bg-[#F1F2F7] rounded-[10px]">
                        <p className="font-[16px] font-[800] text-black">6 лет практики</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
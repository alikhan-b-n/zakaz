export function CourseInfoComponent(props) {
    return (
        <div className="flex lg:flex-col 3xl:w-[1420px] 3xl:h-[250px] 2xl:w-[1100px] xl:w-[900px] lg:w-[600px] lg:h-[430px] md:w-[350px] md:h-[420px] mx-auto bg-white mb-[40px] rounded-xl">
            <div className="3xl:border-r-4 border-r-[#E2E9EF] lg:border-r-0 lg:border-b-4 px-[20px] pt-[15px] flex
            3xl:flex-col text-center items-center 3xl:mr-[50px] 2xl:mr-0 3xl:w-[250px] lg:w-[600px] md:w-[350px]">
                <img src={process.env.PUBLIC_URL+`../Assets/`+props.obj.imageUrl}
                     alt="Course"
                     className="object-contain w-[180px] h-[180px] lg:w-[150px] lg:h-[150px]
                      sm:w-[120px] sm:h-[120px] lg:mb-[10px] rounded-[197px]"/>
                <div className="lg:ml-[20px]">
                    <h1 className="text-[25px] font-bold text-black mt-[10px]">{props.obj.name}</h1>
                </div>
            </div>
            <div className="flex 3xl:justify-between lg:flex-col 2xl:justify-around items-end 3xl:pb-[30px] md:pb-0 3xl:w-[1100px]
             2xl:w-[900px] lg:w-[470px] md:w-[340px]">
                <div className="xl:flex 3xl:flex-col lg:flex-row xl:h-[200px] lg:h-[100px] lg:mt-[50px] justify-evenly">
                    <button type="submit" className="
                                3xl:text-[25px] 3xl:w-[200px] 3xl:h-[57px]
                                2xl:text-[23px] 2xl:w-[180px] 2xl:h-[50px]
                                xl:text-[20px] xl:w-[160px] xl:h-[45px]
                                md:text-[18px] md:w-[140px] md:h-[40px]
                                rounded-xl bg-orange-500 text-white mr-[50px]">Онлайн</button>
                    <button type="submit" className="
                                3xl:text-[25px] 3xl:w-[200px] 3xl:h-[57px]
                                2xl:text-[23px] 2xl:w-[180px] 2xl:h-[50px]
                                xl:text-[20px] xl:w-[160px] xl:h-[45px]
                                md:text-[18px] md:w-[140px] md:h-[40px]
                                rounded-xl bg-orange-500 text-white">Офлайн</button>
                </div>
                <button type="submit"  className="3xl:text-[50px] 2xl:text-[45px]
                        xl:text-[35px] md:text-[30px] text-base font-semibold mb-[10px] flex ">{props.obj.price} тг
                    <p className="text-[#ADADAD] 3xl:text-[25px] md:text-[20px]">/в месяц</p>
                </button>
            </div>
        </div>
    );
}
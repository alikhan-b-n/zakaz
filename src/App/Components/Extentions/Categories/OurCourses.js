const imagePathGraduate = process.env.PUBLIC_URL + '../Assets/coworkers.png';
const imagePathMessage = process.env.PUBLIC_URL + '../Assets/Group_.png'

export function OurCourses() {
    const divStyleMain = {
        backgroundImage: `url(${imagePathGraduate})`,
        backgroundSize: 'contain',
    };
    const divStyleMessage = {
        backgroundImage: `url(${imagePathMessage})`,
    };
    return (
        <div className="flex justify-center">
            <div className="3xl:w-[1400px] 2xl:w-[1100px] xl:w-[900px] lg:w-[600px] md:w-[500px] sm:w-[400px] xsm:w-[350px]  mt-8
            font-medium ">
                <div className="flex">
                    <div className="w-full bg-white rounded-2xl 3xl:pl-[40px] xl:pl-[30px] sm:pl-0">
                        <div className="flex 3xl:justify-around xl:justify-center 3xl:pl-10 lg:pl-0 lg:mt-3">
                            <div
                                className="3xl:text-[75px] 2xl:text-[55px] xl:text-[50px] lg:text-[30px] md:text-[30px] ">
                                <h2 className="sm:text-[20px]">НАШИ КУРСЫ</h2>
                                <div className="">
                                    <div className="text-sm 3xl:max-w-[600px] lg:max-w-[450px] sm:max-w-[300px]
                                        3xl:text-[24px] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[14px] font-normal">
                                        Наши онлайн курсы разработаны экспертами в соответствии с актуальными стандартами и требованиями, обеспечивая высокий уровень образования. Материалы курсов доступны 24/7, так что вы можете изучать их в темпе, который подходит именно вам.
                                    </div>
                                    <div style={divStyleMessage} className="3xl:w-[350px] 3xl:h-[170px] 2xl:w-[300px] 2xl:h-[130px] xl:w-[250px] xl:h-[100px]
                                    lg:w-[200px] lg:h-[80px] lg:mt-[-10px] lg:mb-[10px] md:w-[150px] md:h-[60px]
                                    ml-auto 3xl:mr-[-70px] 2xl:mr-[-40px] xl:mr-[-20px] md:mr-0 bg-contain bg-no-repeat z-0"></div>
                                </div>
                            </div>
                            <div className="flex 3xl:w-[700px] 2xl:w-[600px] xl:w-[500px] lg:w-[300px]
                                    3xl:h-[500px] 2xl:h-[400px] xl:h-[300px] lg:h-[150px] lg:hidden bg-cover bg-no-repeat mt-auto z-1 "
                                 style={divStyleMain}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-8 justify-between w-full lg:flex-col
                3xl:text-[60px] 2xl:text-[45px] xl:text-[35px] lg:text-[29px] md:text-[24px] ">
                    <div className="flex justify-evenly 3xl:w-[430px] 2xl:w-[360px] xl:w-[300px]
                    lg:w-full lg:justify-center lg:mb-[10px] items-center bg-white rounded-2xl">
                        <div className="text-orange-500 lg:mr-[10px]">25</div>
                        <div className="3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[13px] ">компетентных учителей
                        </div>
                    </div>
                    <div
                        className="flex justify-center 3xl:w-[430px] 2xl:w-[360px] xl:w-[280px] lg:w-full lg:mb-[10px] items-center bg-white rounded-2xl">
                        <div className="text-orange-500 mr-4 ">7</div>
                        <div className="3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[13px]">лет готовим
                            к <br/> экзаменам
                        </div>
                    </div>
                    <div
                        className="flex justify-evenly lg:justify-center 3xl:w-[440px] 2xl:w-[360px] xl:w-[300px] lg:w-full lg:mb-[10px] items-center bg-white rounded-2xl">
                        <div className="text-orange-500 lg:mr-[10px]">+110.000</div>
                        <div className="3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[13px]">Выпускников</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
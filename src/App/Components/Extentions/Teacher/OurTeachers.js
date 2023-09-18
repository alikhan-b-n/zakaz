const imagePathGraduate = process.env.PUBLIC_URL + '../Assets/old_man.svg';

export function OurTeachers() {
    const divStyleGraduate = {
        backgroundImage: `url(${imagePathGraduate})`,
        backgroundSize: 'contain',
    };
    return (
        <div className="flex justify-center">
            <div className="3xl:w-[1420px] 2xl:w-[1100px] xl:w-[900px] lg:w-[600px] md:w-[500px] sm:w-[400px] xsm:w-[350px]  mt-8
            3xl:font-bold xl:font-semibold md:font-medium ">
                <div className="flex">
                    <div className="w-full bg-white rounded-2xl 3xl:pl-[40px] xl:pl-[30px] sm:pl-0">
                        <div className="flex 3xl:justify-around xl:justify-center 3xl:pl-10 3xl:mt-3 lg:pl-0 ">
                            <div className="3xl:text-[75px] 3xl:mt-7 2xl:text-[55px] xl:text-[50px] lg:text-[30px] md:text-[25px] sm:mt-2 sm:ml-[30px]">
                                <h2 className="3xl:800px leading-tight">ПРОФФЕССИОНАЛЬНЫЕ
                                    ПРЕПОДАВАТЕЛИ</h2>
                                <div className="lg:flex">
                                    <div>
                                        <div className="text-sm 3xl:max-w-[531px] lg:max-w-[320px] 3xl:mt-[20px] sm:mt-0
                                        3xl:text-[24px] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-xs md:font-normal sm:mb-[20px]">
                                            - это настоящие путеводители в мире знаний. С многолетним опытом и глубокими знаниями в своих предметных областях, они не только делятся информацией, но и вдохновляют студентов на учебу и саморазвитие.
                                        </div>
                                    </div>
                                    <div className="flex lg:w-[200px] lg:h-[200px] bg-cover bg-no-repeat mt-auto sm:hidden" style={divStyleGraduate}></div>
                                </div>
                            </div>
                            <div className="flex 3xl:w-[550px] 2xl:w-[500px] xl:w-[400px]
                            3xl:h-[500px] 2xl:h-[400px] xl:h-[300px] lg:hidden bg-cover bg-no-repeat mt-auto " style={divStyleGraduate}></div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-8 justify-between w-full lg:flex-col
                3xl:text-[60px] 2xl:text-[45px] xl:text-[35px] lg:text-[29px] md:text-[24px] ">
                    <div className="flex justify-evenly 3xl:w-[430px] 2xl:w-[360px] xl:w-[300px]
                    lg:w-full lg:justify-center lg:mb-[10px] items-center bg-white rounded-2xl">
                        <div className="text-orange-500 lg:mr-[10px]">25</div>
                        <div className="3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[13px]">компетентных учителей</div>
                    </div>
                    <div className="flex justify-center 3xl:w-[430px] 2xl:w-[360px] xl:w-[280px] lg:w-full lg:mb-[10px] items-center bg-white rounded-2xl">
                        <div className="text-orange-500 mr-4 ">7 </div>
                        <div className="3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[13px]">лет готовим к <br/> экзаменам</div>
                    </div>
                    <div className="flex justify-evenly lg:justify-center 3xl:w-[440px] 2xl:w-[360px] xl:w-[300px] lg:w-full lg:mb-[10px] items-center bg-white rounded-2xl">
                        <div className="text-orange-500 lg:mr-[10px]">+110.000</div>
                        <div className="3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[13px]">Выпускников</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
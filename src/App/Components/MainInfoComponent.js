import {Link} from "react-router-dom";

const imagePathGraduate = process.env.PUBLIC_URL + '../Assets/happy-graduates.png';
const imagePathPlay = process.env.PUBLIC_URL + '../Assets/image_9.png'
const imagePathMessage = process.env.PUBLIC_URL + '../Assets/Group.png'

export function MainInfoComponent() {
    const divStyleGraduate = {
        backgroundImage: `url(${imagePathGraduate})`,
        backgroundSize: 'contain',
    };
    const divStylePlay = {
        backgroundImage: `url(${imagePathPlay})`
    };
    const divStyleMessage = {
        backgroundImage: `url(${imagePathMessage})`,
    };
    return (
        <div className="flex justify-center">
            <div className="3xl:w-[1420px] 2xl:w-[1100px] xl:w-[900px] lg:w-[600px] md:w-[500px] sm:w-[400px] xsm:w-[350px]  mt-8
            3xl:font-bold xl:font-semibold md:font-medium xxsm:hidden">
                <div className="flex">
                    <div
                        className="w-full bg-white rounded-2xl 3xl:pl-[40px] 3xl:pt-[20px] xl:pl-[30px] sm:pt-[5px] sm:pl-0">
                        <div className="flex 3xl:justify-around xl:justify-center 3xl:pl-10 lg:pl-0 lg:mt-3 md:pl-[10px]">
                            <div
                                className="3xl:text-[75px] 2xl:text-[55px] xl:text-[50px] lg:text-[30px] md:text-[30px]">
                                <h2 className="3xl:800px leading-tight font-bold sm:text-[20px]">ОНЛАЙН ПОДГОТОВКА</h2>
                                <div className="flex">
                                    <div className="bg-no-repeat
                                    3xl:w-[120px] 2xl:w-[80px] xl:w-[80px] lg:w-[60px] md:w-[50px] bg-contain"
                                         style={divStylePlay}></div>
                                    <h2 className="lg:w-[90px] font-bold sm:text-[20px]">К ЕНТ</h2>
                                    <div className="bg-no-repeat 3xl:mt-[-20px] lg:mt-[-10px]
                                    3xl:w-[450px] 2xl:w-[300px] xl:w-[235px] lg:w-[210px] md:w-[200px]
                                    bg-contain " style={divStyleMessage}></div>
                                </div>
                                <div className="lg:flex">
                                    <div>
                                        <div className="text-sm 3xl:max-w-[531px] lg:max-w-[320px]
                                     3xl:text-[24px] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-xs font-normal">
                                            Мы гарантируем качественные занятия, опытных преподавателей и индивидуальный
                                            подход к
                                            каждому студенту, чтобы обеспечить успешные результаты на экзамене.
                                        </div>
                                        <div className="flex justify-center">
                                            <Link to='/signin'>
                                                <button type="submit" className="
                                                3xl:text-[40px] 3xl:w-[400px] 3xl:h-[60px]
                                                2xl:text-[35px] 2xl:w-[370px] 2xl:h-[55px]
                                                xl:text-[30px] xl:w-[340px] xl:h-[50px]
                                                lg:text-[23px] lg:w-[250px] lg:h-[40px]
                                                mt-[33px] w-48 text-base 3xl:mb-6
                                                rounded-xl bg-orange-500 text-white">Записаться
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        className="flex lg:w-[200px] lg:h-[200px] bg-cover bg-no-repeat mt-auto sm:hidden"
                                        style={divStyleGraduate}></div>
                                </div>
                            </div>
                            <div className="flex 3xl:w-[550px] 2xl:w-[500px] xl:w-[400px]
                            3xl:h-[500px] 2xl:h-[400px] xl:h-[300px] lg:hidden bg-cover bg-no-repeat mt-auto "
                                 style={divStyleGraduate}></div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-8 justify-between w-full lg:flex-col
                3xl:text-[60px] 2xl:text-[45px] xl:text-[35px] lg:text-[29px] md:text-[24px] ">
                    <div className="flex justify-evenly 3xl:w-[430px] 2xl:w-[360px] xl:w-[300px]
                    lg:w-full lg:justify-center lg:mb-[10px] items-center bg-white rounded-2xl">
                        <div className="text-orange-500 lg:mr-[10px]">110+</div>
                        <div className="3xl:text-[22px] 2xl:text-[20px] xl:text-[18px] md:text-[13px] ">Средний бал
                            учеников
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
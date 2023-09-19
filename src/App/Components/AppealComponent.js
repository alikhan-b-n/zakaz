const imageUrl = process.env.PUBLIC_URL + '../Assets/girl.svg'

export const Appeal = () => {
    const divStyle = {
        backgroundImage: `url(${imageUrl})`
    };
    return (
        <div className="flex justify-center font-normal">
            <div className="flex items-center">
                <div style={divStyle} className="3xl:w-[552px] 3xl:h-[500px] 2xl:w-[450px] 2xl:h-[420px]
                xl:w-[400px] xl:h-[360px] lg:hidden bg-no-repeat bg-contain"></div>
                <div className="bg-grey-lighter flex">
                    <div className="container lg:ml-[35px] sm:ml-0  3xl:w-[655px] 2xl:w-[600px] xl:w-[500px] md:w-[450px] sm:w-[400px] xsm:w-[300px] flex items-center">
                        <div className="bg-white lg:mt-[20px] xl:mb-[30px] 3xl:px-6 py-8 rounded-2xl shadow-md text-black 3xl:w-[100%]">
                            <div className="flex justify-between">
                                <h1 className="flex-1 3xl:mb-5 lg:mb-2 3xl:text-2xl lg:text-[22px] text-center ">Оставить заявку</h1>
                            </div>
                            <label className="pl-[18px] text-[18px]">Имя Фамилия</label>
                            <input
                                type="text"
                                className="block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                                name="name"
                                placeholder="Имя Фамилия"/>
                            <label className="pl-[18px]">Номер телефона</label>
                            <input
                                type="password"
                                className="block border bg-slate-100 mt-2 shadow-inner border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="+ 7 707 777 7777"/>
                            <div className="flex justify-center">
                                <button type="submit" className="w-32 py-2 rounded-xl bg-orange-500 hover:bg-green-dark
                                text-white ">Записаться
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
import React from 'react';

export function Teacher({teacher }) {
    const divStyle = {
        backgroundImage: `url(${teacher.imageUrl})`,
    };

    return (
        <div className="flex 3xl:w-[900px] lg:w-[600px] bg-white rounded-2xl">
            <div className="w-[478px] mt-[37px] ml-[53px] flex flex-col items-baseline   ">
                <h2 className="text-2xl text-[40px] font-bold">{teacher.name}</h2>
                <h3 className="text-xl mt-[20px] text-[40px] text-orange-500">{teacher.subject}</h3>
                <h4 className="text-lg mt-[70px] 3xl:text-[20px] xl:text-[18px] lg:text-[16px] 3xl:max-h-[350px] leading-6 3xl:font-semibold
                xl:font-semibold">{teacher.description}</h4>
            </div>
            <div className="ml-4 bg-center bg-cover rounded-2xl
            3xl:w-[430px] 3xl:h-[520px] xl:w-[400px] xl:h-[520px] " style={divStyle}></div>
        </div>
    );
}

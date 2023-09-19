import {useState} from 'react';


const imageUrl = process.env.PUBLIC_URL + '../Assets/MyProfilePhoto.svg'

export const MyProfileComponent = (props) => {
    const [file, setFile] = useState();
    const divStyle = {
        backgroundImage: `url(${imageUrl})`
    };

    const SubmitHandler = () => {

    }

    return (<div className="">
            <div
                className="3xl:w-[1262px] 3xl:h-[429px] 2xl:w-[1000px] xl:w-[800px] lg:w-[500px] sm:w-[350px] rounded-xl bg-white grid grid-cols-2 lg:grid-cols-1 lg:h-[520px] justify-items-center items-center drop-shadow-lg ">
                <div className="flex justify-center 3xl:flex-col lg:flex-row 3xl:mr-[-100px] 2xl:mr-[-50px] xl:mr-0">
                    <div style={divStyle}
                         className="3xl:w-[200px] 3xl:h-[200px] bg-contain lg:w-[160px] lg:h-[160px] mb-[15px] lg:flex lg:mr-2"></div>
                    <div className="lg:mt-[50px]">
                        <input id="image"
                               type="file"
                               name="image"
                               accept="image/png, image/jpg"
                               onChange={event => setFile(event.target.files[0])}
                        />
                        <button
                            className="3xl:w-[200px] 3xl:h-[47px] lg:w-[160px] lg:h-[35px] sm:w-[130px] 3xl:text-[18px] lg:text-[13px] bg-orange-500 rounded-lg text-white flex justify-center items-center">Загрузить
                            фото
                        </button>
                        <div className="3xl:w-[400px] lg:w-[160px] sm:w-[130px] flex justify-center mt-2">
                            <p className="text-[13px] inline-block text-orange-500">{props.user.id}</p>
                        </div>
                    </div>
                </div>
                <div className="3xl:ml-[-100px] 2xl:ml-[-50px] xl:ml-0">
                    <div
                        className="3xl:w-[323px] h-[43px] sm:w-[250px] shadow-custom bg-gray-100 rounded-[15px] flex items-center pl-2 mb-[15px]">{props.user.firstname}</div>
                    <div
                        className="3xl:w-[323px] h-[43px] sm:w-[250px] shadow-custom bg-gray-100 rounded-[15px] flex items-center pl-2 mb-[15px]">{props.user.lastname}</div>
                    <div
                        className="3xl:w-[323px] h-[43px] sm:w-[250px] shadow-custom bg-gray-100 rounded-[15px] flex items-center pl-2 mb-[15px]">{props.user.email}</div>
                    <div className="3xl:w-[323px] h-[43px] sm:w-[250px] flex justify-center lg:my-4">
                        <button
                            className="3xl:w-[221px] sm:w-[200px] 3xl:h-[47px] sm:h-[40px] 3xl:text-[18px] sm:text-[13px] bg-orange-500 rounded-lg text-white flex justify-center items-center">Отредактировать
                        </button>
                    </div>
                </div>
            </div>
        </div>);
};
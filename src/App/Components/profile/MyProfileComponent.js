import {useState} from 'react';


export const MyProfileComponent = (props) => {
    const [file, setFile] = useState();
    const [editMode, setEditMode] = useState(false)
    const avatarUrl = `http://193.70.125.178:4000/user/${props.user.id}/${props.user.avatar}`
    const imageUrl = process.env.PUBLIC_URL + '../Assets/img.png'
    const SubmitHandler = () => {

    }

    console.log(props.user)

    return (
        <div className="rounded-xl bg-white drop-shadow-lg m-[5%]  3xl:w-[80%] xl:w-[100%] mx-auto">
            <div className="flex flex-col items-center p-[5%]">
                <div className="mb-[5%]">
                    <img src={props.user.avatar!=null ?  avatarUrl : imageUrl} alt="asd" className="w-[300px] bg_contain"/>
                    {/*<input*/}
                    {/*    id="image"*/}
                    {/*    type="file"*/}
                    {/*    name="image"*/}
                    {/*    accept="image/png, image/jpg"*/}
                    {/*    onChange={event => setFile(event.target.files[0])}*/}
                    {/*/>*/}

                    <div className="flex justify-center w-100 mt-[-30px]">
                        <label htmlFor="image"
                               className="3xl:w-[200px] 3xl:h-[47px] lg:w-[160px] lg:h-[35px] sm:w-[130px] 3xl:text-[18px] lg:text-[13px] rounded-lg bg-orange-500 flex justify-center items-center text-white font-medium text-center py-2 px-4 cursor-pointer">
                            Загрузить фото
                        </label>
                    </div>
                </div>
                <div className="flex center flex-col text-[18px] ">
                    <input
                        disabled={!editMode}
                        className="3xl:w-[323px] h-[43px] sm:w-[240px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    items-center pl-2 mb-[15px] placeholder:text-black
                    placeholder:font-thin"
                        placeholder={props.user.firstname}
                    />
                    <input
                        disabled={!editMode}
                        className="3xl:w-[323px] h-[43px] sm:w-[240px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    items-center pl-2 mb-[15px] placeholder:text-black
                    placeholder:font-thin"
                        placeholder={props.user.lastname}
                    />
                    <input
                        disabled={!editMode}
                        className="3xl:w-[323px] h-[43px] sm:w-[240px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    items-center pl-2 mb-[15px] placeholder:text-black
                    placeholder:font-thin"
                        placeholder={props.user.email}
                    />

                    <input
                        disabled={!editMode}
                        className="3xl:w-[323px] h-[43px] sm:w-[240px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    items-center pl-2 mb-[15px] placeholder:text-black
                    placeholder:font-thin"
                        placeholder={props.user.id}
                    />

                    <div className="3xl:w-[323px] h-[43px] sm:w-[250px] flex justify-center lg:my-4">
                        {
                            editMode ?
                                <button className="3xl:w-[221px] sm:w-[200px] 3xl:h-[47px] sm:h-[40px] 3xl:text-[18px]
                                    sm:text-[13px] bg-orange-500 rounded-lg text-white flex justify-center
                                    items-center font-medium"
                                        onClick={() => window.location.reload()}
                                >
                                    Сохранить изменения
                                </button>
                                :
                                <button className="3xl:w-[221px] sm:w-[200px] 3xl:h-[47px] sm:h-[40px] 3xl:text-[18px]
                                    sm:text-[13px] bg-orange-500 rounded-lg text-white flex justify-center
                                    items-center font-medium"
                                        onClick={() => setEditMode(true)}
                                >
                                    Отредактировать
                                </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
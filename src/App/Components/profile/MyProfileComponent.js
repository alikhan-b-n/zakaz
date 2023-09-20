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
        <div className="rounded-xl bg-white drop-shadow-lg m-[5%] w-[60%] mx-auto">
            <div className="flex flex-col items-center p-[5%]">
                <div className="mb-[5%]">
                    <img src={props.user.avatar && typeof props.user.avatar === 'object' && Object.keys(props.user.avatar).length > 0 ?  avatarUrl : imageUrl} alt="asd" className="pb-[15px] w-[200px]"/>
                    {/*<input*/}
                    {/*    id="image"*/}
                    {/*    type="file"*/}
                    {/*    name="image"*/}
                    {/*    accept="image/png, image/jpg"*/}
                    {/*    onChange={event => setFile(event.target.files[0])}*/}
                    {/*/>*/}

                    <label htmlFor="image"
                           className="3xl:w-[200px] 3xl:h-[47px] lg:w-[160px] lg:h-[35px] sm:w-[130px] 3xl:text-[18px] lg:text-[13px] rounded-lg bg-orange-500 flex justify-center items-center text-white text-center py-2 px-4 cursor-pointer">
                        Загрузить фото
                    </label>
                </div>
                <div className="">
                    <input
                        disabled={!editMode}
                        className="3xl:w-[323px] h-[43px] sm:w-[250px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    items-center pl-2 mb-[15px] placeholder:text-black"
                        placeholder={props.user.firstname}
                    />
                    <input
                        disabled={!editMode}
                        className="3xl:w-[323px] h-[43px] sm:w-[250px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    items-center pl-2 mb-[15px] placeholder:text-black"
                        placeholder={props.user.lastname}
                    />
                    <input
                        disabled={!editMode}
                        className="3xl:w-[323px] h-[43px] sm:w-[250px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    items-center pl-2 mb-[15px] placeholder:text-black"
                        placeholder={props.user.email}
                    />

                    <input
                        disabled={!editMode}
                        className="3xl:w-[323px] h-[43px] sm:w-[250px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    items-center pl-2 mb-[15px] placeholder:text-black"
                        placeholder={props.user.id}
                    />

                    <div className="3xl:w-[323px] h-[43px] sm:w-[250px] flex justify-center lg:my-4">
                        {
                            editMode ?
                                <button className="3xl:w-[221px] sm:w-[200px] 3xl:h-[47px] sm:h-[40px] 3xl:text-[18px]
                                    sm:text-[13px] bg-orange-500 rounded-lg text-white flex justify-center
                                    items-center"
                                        onClick={() => window.location.reload()}
                                >
                                    Сохранить изменения
                                </button>
                                :
                                <button className="3xl:w-[221px] sm:w-[200px] 3xl:h-[47px] sm:h-[40px] 3xl:text-[18px]
                                    sm:text-[13px] bg-orange-500 rounded-lg text-white flex justify-center
                                    items-center"
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
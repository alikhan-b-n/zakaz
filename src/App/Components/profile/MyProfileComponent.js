import React, {useState} from 'react';
import {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import {useMutation} from "react-query";
import {useAuthHeader} from "react-auth-kit";
import {useSignIn} from 'react-auth-kit'
import axios from "axios";

const imageUrl = process.env.PUBLIC_URL + '../Assets/img.png'
export const MyProfileComponent = (props) => {
    const [file, setFile] = useState();
    const [editMode, setEditMode] = useState(false)
    const [preview, setPreview] = useState(null)
    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)
    const [password, setPassword] = useState('')
    const signIn = useSignIn()
    const formData = new FormData();
    const authHeader = useAuthHeader();
    const avatarUrl = `http://193.70.125.178:4000/user/${props.user.id}/${props.user.avatar}`


    const onDrop = useCallback((acceptedFiles) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(acceptedFiles[0])

        fileReader.onload = function () {
            setPreview(fileReader.result);
        }
        setFile(acceptedFiles[0])


    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop
    })

    const {mutate, isLoading, isError, error} = useMutation(async () =>
        await axios.patch('http://193.70.125.178:4000/auth/formupdate/user', {
                "name":name,
                "surname":surname,
                "password": password,
                "avatar": file
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `${authHeader()}`
                }
            }
        ), {
        onSuccess: (successData) => {
            signIn({
                token: successData.data.token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: {
                    email: successData.data.email,
                    firstname: successData.data.name,
                    lastname: successData.data.surname,
                    avatar: successData.data.avatar,
                    id: successData.data.id
                }
            })
        }
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>{error.response.data.message}</p>
    }

    return (
        <form action="form-data">
            <div className="rounded-xl bg-white drop-shadow-lg m-[5%] 3xl:w-[60%] xl:w-[80%] sm:w-[100%] mx-auto">
                <div className="flex flex-col items-center p-[5%]">
                    <div className="mb-[5%] flex flex-col justify-center items-center" {...getRootProps()}>
                        {editMode
                            ?
                            preview && (
                                <p><img className="w-[300px]" src={preview} alt="Предпросмотр"/></p>
                            )
                            :
                            <img src={props.user.avatar != null ? avatarUrl : imageUrl} alt="Your avatar"
                                 className="pb-[15px] w-[200px]"/>
                        }

                        <input
                            {...getInputProps()}
                        />
                        {
                            editMode ?
                                isDragActive ?
                                    <p className="font-medium">Выберите файл</p> :
                                    <p className="font-medium">Выберите файл</p>
                                : <div></div>
                        }
                    </div>
                    <div className="">
                        <input
                            disabled={!editMode}
                            className="3xl:w-[323px] h-[43px] sm:w-[250px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    items-center pl-2 mb-[15px] placeholder:text-black
                    placeholder:font-thin font-thin"
                        placeholder={props.user.firstname}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        value={!editMode ? props.user.firstname : name ?? ""}
                    />
                    <input
                        disabled={!editMode}
                        className="3xl:w-[323px] h-[43px] sm:w-[250px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    items-center pl-2 mb-[15px] placeholder:text-black
                    placeholder:font-thin font-thin"
                        placeholder={props.user.lastname}
                        onChange={(e) => {
                            setSurname(e.target.value)
                        }}
                        value={!editMode ? props.user.lastname : surname ?? ""}
                    />

                    <input
                        disabled={!editMode}
                        className="3xl:w-[323px] h-[43px] sm:w-[250px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    font-thin items-center pl-2 mb-[15px] placeholder:text-black
                    placeholder:font-thin"
                        autoComplete="off"
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        value={!editMode ? "Введите новый пароль" : password ?? ""}
                        placeholder={"Введите новый пароль"}
                    />

                    <div className="3xl:w-[323px] h-[43px] sm:w-[250px] flex justify-center lg:my-4 lg:flex-col">
                        {editMode ? <div className="flex gap-x-[10px]">
                            <button className="3xl:w-[221px] sm:w-[200px] 3xl:h-[47px] sm:h-[40px] 3xl:text-[18px]
                                    sm:text-[13px] bg-orange-500 rounded-lg text-white flex justify-center
                                    items-center font-medium"
                                    onClick={() => setEditMode(false)}
                            >
                                Отмена
                            </button>
                            <button className="3xl:w-[221px] sm:w-[200px] 3xl:h-[47px] sm:h-[40px] 3xl:text-[18px]
                                    sm:text-[13px] bg-orange-500 rounded-lg text-white flex justify-center
                                    items-center font-medium"
                                    disabled={name === null && surname === null && file === null}
                                    onClick={() => mutate({
                                        name: name,
                                        surname: surname,
                                        avatar: formData,
                                        password: password
                                    })}
                            >
                                Сохранить изменения
                            </button>
                        </div> : <button className="3xl:w-[221px] sm:w-[200px] 3xl:h-[47px] sm:h-[40px] 3xl:text-[18px]
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
        </form>
    );
};
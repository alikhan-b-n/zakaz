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
    const [email, setEmail] = useState(null);
    const [surname, setSurname] = useState(null)
    const signIn = useSignIn()
    const formData = new FormData();
    const authHeader = useAuthHeader();
    const avatarUrl = `http://193.70.125.178:4000/user/${props.user.id}/${props.user.avatar}`

    const onDrop = useCallback((acceptedFiles) => {
        const fileReader = new FileReader();
        const file = acceptedFiles[0]; // Get the first file from the array

        fileReader.onload = function () {
            setPreview(fileReader.result);
            setFile(fileReader.result);
        }

        fileReader.readAsDataURL(file);

        const formData = new FormData();
        formData.append("avatar", file); // Append the file, not the FileReader
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop
    })

    console.log(formData)

    const {mutate, isLoading, isError, error} = useMutation(async () =>
        await axios.patch('http://193.70.125.178:4000/auth/update/user', {
                avatar: formData,
                name: name,
                email: email,
                surname: surname
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
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
            console.log(successData.data.avatar)
        }
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>{error.message}</p>
    }

    return (
        <div className="rounded-xl bg-white drop-shadow-lg m-[5%] 3xl:w-[60%] xl:w-[80%] sm:w-[100%] mx-auto">
            <div className="flex flex-col items-center p-[5%]">
                <div className="mb-[5%] flex flex-col justify-center items-center" {...getRootProps()}>
                    {editMode
                        ?
                        preview && (
                            <p><img className="w-[300px]" src={preview} alt="Upload preview"/></p>
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
                                <p className="font-medium">Drop the files here ...</p> :
                                <p className="font-medium">Drag 'n' drop some files here, or click to select files</p>
                            : <div></div>
                    }
                </div>
                <div className="">
                    <input
                        disabled={!editMode}
                        className="3xl:w-[323px] h-[43px] sm:w-[250px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    items-center pl-2 mb-[15px] placeholder:text-black
                    placeholder:font-thin"
                        placeholder={props.user.firstname}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <input
                        disabled={!editMode}
                        className="3xl:w-[323px] h-[43px] sm:w-[250px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    items-center pl-2 mb-[15px] placeholder:text-black
                    placeholder:font-thin"
                        placeholder={props.user.lastname}
                        onChange={(e) => {
                            setSurname(e.target.value)
                        }}
                    />
                    <input
                        disabled={!editMode}
                        className="3xl:w-[323px] h-[43px] sm:w-[250px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    items-center pl-2 mb-[15px] placeholder:text-black
                    placeholder:font-thin"
                        autoComplete="off"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        placeholder={props.user.email}
                    />

                    <input
                        disabled
                        className="3xl:w-[323px] h-[43px] sm:w-[250px]
                    shadow-custom bg-gray-100 rounded-[15px] flex
                    items-center pl-2 mb-[15px] placeholder:text-black
                    placeholder:font-thin"
                        placeholder={props.user.id}
                    />

                    <div className="3xl:w-[323px] h-[43px] sm:w-[250px] flex justify-center lg:my-4">
                        {
                            editMode ?
                                <div className="flex gap-x-[10px]">
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
                                            disabled={email === null && name === null && surname === null
                                                && formData.get("avatar") === null}
                                            onClick={() => mutate({
                                                email: email,
                                                name: name,
                                                surname: surname,
                                                avatar: formData
                                            })}
                                    >
                                        Сохранить изменения
                                    </button>
                                </div>
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
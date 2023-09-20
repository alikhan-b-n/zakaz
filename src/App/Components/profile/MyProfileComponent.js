import {useState} from 'react';
import {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import {useMutation, useQueryClient} from "react-query";
import axios from "axios";

const imageUrl = process.env.PUBLIC_URL + '../Assets/img.png'
export const MyProfileComponent = (props) => {
    const [file, setFile] = useState();
    const [editMode, setEditMode] = useState(false)
    const [preview, setPreview] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [surname, setSurname] = useState('')
    const formData = new FormData();
    const avatarUrl = `http://193.70.125.178:4000/user/${props.user.id}/${props.user.avatar}`

    const onDrop = useCallback((acceptedFile: File) => {
        const file = new FileReader;

        file.onload = function () {
            setPreview(file.result);
        }

        file.readAsDataURL(acceptedFile[0])
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop
    })

    formData.append("image", file);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if the file exists
        if (!file) {
            console.log("No file selected");
            setFile(null);
        }

        // Append the file to the FormData instance
        formData.append("image", file);

        // Now you can send formData to your server
        // For example, using the fetch API:
        fetch("/your-api-endpoint", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const {mutate, isLoading, isError, error} = useMutation(async () =>
        await axios.patch('http://193.70.125.178:4000/auth/update/user', {
                avatar: formData,
                email: email,
                name: name,
                lastname: surname
            }, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            }
        ), {
        onSuccess: () => {

        }
    })

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
                        className="3xl:w-[323px] h-[43px] sm:w-[250px]
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
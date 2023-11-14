import axios from "axios";
import {baseUrl} from "../../api/axios";
import {useState} from "react";
import {useQuery} from "react-query";
import {UserComponent} from "./UserComponent";
import {NoUsers} from "./NoUsers";

export function UsersComponent() {
    const [pageNumber, setPageNumber] = useState(1);
    const url = `${baseUrl}/userlist/${pageNumber}`;

    const {isLoading, data, isError, error} = useQuery(
        ['userlist', pageNumber],
        () => axios.get(url)
    );

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <p>{error.response.data.message}</p>
    }

    return (
        <div className="carousel-container font-[600]">
            <div className="flex 3xl:flex-row">
                <button
                    className={`focus:outline-none ${pageNumber - 1 <= 0 ? 'text-gray-400' : 'text-black'}
                    3xl:text-[50px] lg:text-[40px] mr-[20px]`}
                    disabled={pageNumber - 1 === 0}
                    onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                >
                    {"<"}
                </button>
                <div className="flex flex-col mr-[20px]">
                    {data!=null ? data.data.users.map((x) => (
                            <UserComponent key={x.Id} user={x}/>
                    )) : <NoUsers/>}
                </div>
                <button
                    className={`focus:outline-none ${data.data.numberOfPages - pageNumber <= 0 ? 'text-gray-400 cursor-not-allowed' : 'text-black'}
                    3xl:text-[50px] lg:text-[40px] `}
                    disabled={data.data.numberOfPages - pageNumber === 0}
                    onClick={() => setPageNumber((prev) => prev + 1)}
                >
                    {">"}
                </button>
            </div>
        </div>
    );
}
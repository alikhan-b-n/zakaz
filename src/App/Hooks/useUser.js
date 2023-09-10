import {useQuery} from "react-query";
import * as userLocalStorage from "../LocalStorages/UserLocalStorage";
import {useEffect} from "react";
import axios from "axios";

async function getUser(user: User | null | undefined): Promise<User | null> {
    if (!user) return null;
    const response = await axios(`/api/users/${user.user.id}`, {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    })
    if (!response.ok)
        throw new Error('Failed on get user request', response);

    return await response.json();
}

export interface User {
    accessToken: string;
    user: {
        email: string;
        id: number;
        name: string;
        surname: string
    }
}

export function useUser() {
    const { data: user } = useQuery<User | null>(
        async (): Promise<User | null> => getUser(user),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            initialData: userLocalStorage.getUser,
            onError: () => {
                userLocalStorage.removeUser();
            }
        });

    useEffect(() => {
        if (!user) userLocalStorage.removeUser();
        else userLocalStorage.saveUser(user);
    }, [user]);

    return {
        user: user ?? null,
    }
}
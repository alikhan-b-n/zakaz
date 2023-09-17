import {useLocation, Navigate, Outlet} from "react-router-dom";
import {useIsAuthenticated} from 'react-auth-kit';
import React from "react";

export const RequireAuth = () => {
    const location = useLocation();
    const isAuthenticated = useIsAuthenticated()
    return (
       !isAuthenticated.call() ? <Navigate to="/signin" state={{from: location}} replace/> : <Outlet/>
    )
}
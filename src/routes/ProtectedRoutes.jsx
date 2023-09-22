import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoutes({ canActivate, role, redirectPath='/' }) {

    if(!canActivate){
        console.log(canActivate);
        return <Navigate to={redirectPath} replace />
    }

    if(role === 'user'){
        console.log('prueba: ', role);
        return <Navigate to={redirectPath} replace />
    }
    console.log('prueba deberia ser amind: ', role);
    return <Outlet />
}

import { useLocation, Navigate, Outlet } from "react-router-dom";
import { DataContext } from "../Context/data";

export const RequiredAuth = ({ allowedRoles }) =>{
    const { saveUser } = DataContext()
    const location = useLocation()

    return(
        saveUser?.roles?.find(role => allowedRoles?.includes((role)))
            ? <Outlet />
            : saveUser?.user
                ? <Navigate to="/manutencao" state={{ from: location}} replace />
                : <Navigate to="/login" state={{ from: location}} replace />
    )
}
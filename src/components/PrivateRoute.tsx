import {Navigate, Route} from "react-router-dom";

export const PrivateRoute = ({component}) => {
    const isAuthenticated = false;

    return isAuthenticated ? component : <Navigate to="/" />;

}
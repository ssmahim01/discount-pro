import { useContext } from "react";
import { AuthContext } from "../providers/Provider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <h2 className="text-3xl text-gray-600 font-semibold animate__animated animate__bounce text-center pt-36">Loading...</h2>
    };

    if(user && user?.email){
        return children;
    };

    return (
       <Navigate state={location.pathname} to="/authentication/login"></Navigate>
    );
};

export default PrivateRoute;
import Cookies from "js-cookie"
import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoute = () => {
    const token = Cookies.get('token');

    console.log("token ::: ",token)

    return token ? <Outlet /> : <Navigate to={"/login"} replace />
}

export default ProtectedRoute;
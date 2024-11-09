import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { RotatingSquare } from "react-loader-spinner";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth(null)
    const location = useLocation();
    if (loading) {
        return <div className="flex min-h-screen justify-center items-center">
            <RotatingSquare
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="rotating-square-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }
    if (!user) {
        return <Navigate to={"/login"} state={{ from: location }} replace />
    }
    return children
};

export default PrivateRoutes;
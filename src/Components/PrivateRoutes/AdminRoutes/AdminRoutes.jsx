import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAdmin from '../../Hooks/useAdmin';
import { RotatingSquare } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth(null);
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();
    if (loading || isAdminLoading) {
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
    if (!user && isAdmin) {
        <Navigate to={"/login"} state={{ from: location }} replace />
    }
    return children
};

export default AdminRoutes;
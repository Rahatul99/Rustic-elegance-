import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return (
            <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-solid">
                <style>
                {`
                    @keyframes spin {
                    0% { border-color: #fuchsia; }
                    25% { border-color: #blue; }
                    50% { border-color: #green; }
                    75% { border-color: #yellow; }
                    100% { border-color: #red; }
                    }
                `}
                </style>
            </div>
            </div>
            )}
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;
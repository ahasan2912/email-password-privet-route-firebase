import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivetRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivetRouter;
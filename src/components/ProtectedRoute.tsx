import React from "react";
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/sign-in" replace />;
    }
    return <>{children}</>;
}
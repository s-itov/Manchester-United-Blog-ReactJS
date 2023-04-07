import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useBlogContext } from "../../../contexts/blogContext";

export const Logout = () => {
    const { onLogout } = useBlogContext();

    useEffect(() => {
        onLogout();
    }, [onLogout]);

    return <Navigate to="/" />
};
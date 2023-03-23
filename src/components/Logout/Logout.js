import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { BlogContext } from "../../contexts/blogContext";

export const Logout = () => {
    const { onLogout } = useContext(BlogContext);

    useEffect(() => {
        onLogout();
    }, [onLogout]);

    return <Navigate to="/" />
};
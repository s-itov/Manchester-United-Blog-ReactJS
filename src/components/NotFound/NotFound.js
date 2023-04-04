import { Link } from "react-router-dom";

import "./notFound.css";

export const NotFound = () => {
    return(
        <div className="not-found">
            <h1>ERROR - 404</h1>
            <h1>PAGE NOT FOUND...</h1>

            <Link to="/">Go back to home page</Link>
        </div>
    );
}
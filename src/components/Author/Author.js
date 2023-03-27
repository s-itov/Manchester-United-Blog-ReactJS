import { useEffect, useState } from "react";
import { useContext } from "react";
import { BlogContext } from "../../contexts/blogContext";
import * as authService from "../../services/authService";

export const Author = () => {

    const { token } = useContext(BlogContext);

    const [user, setUser] = useState({});
   
    useEffect(() => {
        authService.getAuthorDetails(token)
        .then(result => {
            setUser(result);
        }); 
    }, [token]);

    return (
        <section className="author-info">
            <div className="author-card">
                <img src={user.avatarUrl} alt="Author Avatar" className="avatar" />
                    <h2 className="username">{user.userName}</h2>
                    <p className="country"><b>Country:</b> {user.country} </p>
                    <p className="email"><b>Email:</b> <a href={`mailto:${user.email}`}>{user.email}</a></p>
                    <p className="about"><b>About:</b> {user.about}</p>
            </div>
            <div className="blog-posts">
                <h3 className="section-title">Recent Blog Posts by {user.userName}</h3>
                <ul className="blog-list">
                    <li className="blog-post">
                        <a href="#">Post Title One</a>
                        <p className="post-date">March 1, 2023</p>
                    </li>
                    <li className="blog-post">
                        <a href="#">Post Title Two</a>
                        <p className="post-date">February 15, 2023</p>
                    </li>
                    <li className="blog-post">
                        <a href="#">Post Title Three</a>
                        <p className="post-date">January 30, 2023</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
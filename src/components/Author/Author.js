import { useEffect, useState } from "react";
import { useBlogContext } from "../../contexts/blogContext";
import { BlogItem } from "../Blogs/BlogItem";
import * as authService from "../../services/authService";
import * as loading from "../../utils/defaultConstants";

import './author-card.css';

export const Author = () => {

    const { token, blogs } = useBlogContext();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        authService.getAuthorDetails(token)
            .then(result => {
                setUser(result);
                setIsLoading(false);
            });
    }, [token]);

    const filteredBlogs = blogs.filter(x => x._ownerId === user._id)
        .map(x => <BlogItem key={x._id} {...x} />)
        .reverse();

    return (
        <section className="author-info">
            <div className="author-card">
                {isLoading ? <img src={loading.defaultAvatar} alt="Author Avatar" className="avatar" /> : <img src={user.avatarUrl} alt="Author Avatar" className="avatar" />}
                <h2 className="username">{user.userName}</h2>
                <p className="country"><b>Country:</b> {user.country} </p>
                <p className="email"><b>Email:</b> <a href={`mailto:${user.email}`}>{user.email}</a></p>
                <p className="about"><b>About:</b> {user.about}</p>
            </div>

            <div className="blog-posts">
                <h3 className="section-title">Recent Blog Posts by {user.userName}:</h3>
                <section className="projcard-container">

                    {filteredBlogs.length === 0 ? <h3>No blog posts yet...</h3> : filteredBlogs}
                    
                </section>
            </div>
        </section>
    );
}
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BlogContext } from '../../contexts/blogContext';
import { formatDate } from "../../utils/dateUtils";
import * as loading from "../../utils/defaultConstants"
import * as blogService from '../../services/blogService';

export const Details = () => {
    const { userId, isAuthenticated } = useContext(BlogContext);
    const { blogId } = useParams();


    const [blog, setBlog] = useState({});
    const [author, setAuthor] = useState({ userName: "Loading...", avatarUrl: null })
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            blogService.getOne(blogId),
            blogService.getAuthor(blogId)
        ])
            .then(([blogResult, authorResult]) => {
                setBlog(blogResult);
                setAuthor(authorResult[0].author);
                setIsLoading(false);
            })
    }, [blogId]);

    const isOwner = blog._ownerId === userId;
    const canComment = !isOwner && isAuthenticated;

    return (
        <section className="blog-post">
            {isLoading ? <img src={loading.defaultImage} alt="sport" /> : <img src={blog.imageUrl} alt="sport" />}
            <h2 className="post-title">{blog.title}</h2>
            <p className="post-description">{blog.description}</p>
            <p className="post-text">{blog.text}</p>
            <div className="blog-post-author">
                <p>Created By:</p>
                {isLoading ? (
                    <>
                    <img src={loading.defaultAvatar} alt="owner" />
                    <p>{author.userName}</p>
                    </>
                ) : (
                    <>
                        <img src={author.avatarUrl} alt="owner" />
                        <p>{author.userName}</p>
                    </>
                )}
                <p>on {formatDate(blog._createdOn)}</p>
            </div>
            <div className="comments-section">

                <h3>Comments:</h3>
                <ul className="comments-list">
                    <li className="comment">
                        <span className="username">Jane Willy: </span>
                        <span className="comment-text"> Great post! I really enjoyed reading it.</span>
                    </li>
                    <li className="comment">
                        <span className="username">Jane Smith: </span>
                        <span className="comment-text"> Thanks for sharing your insights. I learned a lot.</span>
                    </li>
                </ul>

                {canComment && (
                    <div className="add-comment-section">
                        <h3>Add Comment</h3>
                        <form className="comment-form">
                            <label htmlFor="comment-text">Comment:</label>
                            <textarea id="comment-text" name="comment-text"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}

            </div>
        </section>
    );
}

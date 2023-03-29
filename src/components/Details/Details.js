import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BlogContext } from '../../contexts/blogContext';
import { formatDate } from "../../utils/dateUtils";
import * as blogService from '../../services/blogService';

export const Details = () => {
    const { blogId } = useParams();
    const [ blog, setBlog] = useState({});
    const { userId, isAuthenticated } = useContext(BlogContext);
    const [ author, setAuthor] = useState({ userName: "Loading..." })

    useEffect(() => {
        blogService.getOne(blogId)
            .then(result => {
                setBlog(result);
            });
    }, [blogId])


    useEffect(() => {
        blogService.getAuthor(blogId)
            .then(result => {
                console.log(result);
                setAuthor(result[0].author);
            })
    }, [blogId]);

    const isOwner = blog._ownerId === userId;
    const canLikeAndComment = !isOwner && isAuthenticated;

    return (
        <section className="blog-post">
            <img src={blog.imageUrl} alt="sport" />
            <h2 className="post-title">{blog.title}</h2>
            <p className="post-description">{blog.description}</p>
            <p className="post-text">{blog.text}</p>
            <div className="blog-post-author">
                        <p>Created By:</p>
                        <img src={author.avatarUrl} alt="owner" />
                        <p>{author.userName}</p>
                        <p>on {formatDate(blog._createdOn)}</p>
                </div>
            <div className="comments-section">
                <div className="likes-section">
                    <span className="likes-counter">Likes: 10</span>
                   
                   {canLikeAndComment && <button className="like-button">Like</button>}
                   

                </div>

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

                {canLikeAndComment && (
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
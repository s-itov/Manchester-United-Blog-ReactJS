import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { BlogContext } from '../../contexts/blogContext';
import { formatDate } from "../../utils/dateUtils";
import * as loading from "../../utils/defaultConstants"
import * as blogService from '../../services/blogService';
import * as commentService from '../../services/commentService';


import { AddComment } from './AddComment/AddComment';

export const Details = () => {


    const { blogId } = useParams();
    const { userId, isAuthenticated, token } = useContext(BlogContext);

    const [blog, setBlog] = useState({});
    const [author, setAuthor] = useState({ userName: "Loading...", avatarUrl: null })
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
        Promise.all([
            blogService.getOne(blogId),
            commentService.getAll(blogId),
            blogService.getAuthor(blogId),
        ])
        .then(([blogResult, comments, authorResult]) => {
            setBlog({
                ...blogResult,
                comments,
            });
            setAuthor(authorResult[0].author);
            setIsLoading(false);
        })
    }, [blogId]);
    
    
    const onCommentSubmit = async (values) => {
        const response = await commentService.create(blogId, values.comment, values.userName , token);

        setBlog(state => ({
            ...state,
            comments: [...state.comments, response],
        }));
    };


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
                    {blog.comments && blog.comments.map(x => (
                        <li key={x._id} className="comment">
                            {console.log(x)}
                        <span className="username">{x.userName}: </span>
                        <span className="comment-text">{x.comment}</span>
                        </li>
                    ))}
                </ul>

                {canComment && <AddComment onCommentSubmit={onCommentSubmit} />}

            </div>
        </section>
    );
}

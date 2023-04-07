import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment/moment';

import { useBlogContext } from '../../contexts/blogContext';
import { formatDate } from "../../utils/dateUtils";
import * as loading from "../../utils/defaultConstants"
import * as blogService from '../../services/blogService';
import * as commentService from '../../services/commentService';

import { AddComment } from './AddComment/AddComment';
import "./details.css";

export const Details = () => {
    const { blogId } = useParams();
    const { userId, isAuthenticated, token } = useBlogContext();

    const [blog, setBlog] = useState({});
    const [author, setAuthor] = useState({ userName: "Loading..." })
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
        const response = await commentService.create(blogId, values.comment, values.userName, token);

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
            <div className="category">
            <span className="post-category-span">Category:</span> 
            <p className="post-category">{blog.category}</p>
            </div>

            <div className="blog-post-author">
                <p>Created By:</p>
                {isLoading ?
                    (
                        <>
                            <img src={loading.defaultAvatar} alt="owner" />
                            <p>{author.userName}</p>
                        </>
                    ) :
                    (
                        <>
                            <img src={author.avatarUrl} alt="owner" />
                            <p>{author.userName}</p>
                            <p>on {formatDate(blog._createdOn)}</p>
                        </>
                    )}
            </div>

            <div className="comments-section">
                {blog.comments && blog.comments.length === 0 ?
                    <h3 className="no-comment">No comments yet on this blog post...</h3>
                    :
                    <>
                        <h3>Comments:</h3>
                        <ul className="comment">
                            {blog.comments && blog.comments.map(x => (
                                <li key={x._id} className="comment">
                                    <div class="comment-header">
                                        <span className="username">{x.userName}: </span>
                                        <span className="time">{moment(x._createdOn).fromNow()}</span>
                                    </div>
                                    <div className="comment-body">{x.comment}</div>
                                </li>
                            ))}
                        </ul>
                    </>
                }

                {canComment && <AddComment onCommentSubmit={onCommentSubmit} />}

            </div>
        </section>
    );
}

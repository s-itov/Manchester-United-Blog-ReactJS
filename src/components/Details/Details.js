import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as blogService from '../../services/blogService';

export const Details = () => {
    const { blogId } = useParams();

    const [blog, setBlog] = useState({});

    useEffect(() => {
        blogService.getOne(blogId)
            .then(result => {
                setBlog(result);
            });
    }, [blogId])

    return (
        <section className="blog-post">
            <img src={blog.imageUrl} alt="sports" />
            <h2 className="blog-post-title">{blog.title}</h2>
            <p className="blog-post-description">{blog.description}</p>
            <div className="blog-post-text">
                <p>{blog.text}</p>
            </div>
            <div className="blog-post-likes">100 likes</div>
            <div className="blog-post-comment-section">
                <h3>Comments</h3>
                <ul className="blog-post-comment-list">
                    <li className="blog-post-comment">Username: Comment text</li>
                    <li className="blog-post-comment">Username: Comment text</li>
                    <li className="blog-post-comment">Username: Comment text</li>
                </ul>
            </div>
            <div className="blog-post-actions">
                <button className="like-btn">Like</button>
                <button className="add-comment-btn">Add Comment</button>
            </div>
            <div className="blog-postadd-comment">
                <form>
                    <label for="comment">Add a Comment:</label>
                    <textarea id="comment" name="comment"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}
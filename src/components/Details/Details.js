import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as blogService from '../../services/blogService';

export const Details = () => {
    const { blogId } = useParams();

    const [blog, setBlog] = useState({});

    useEffect(()=>{
        blogService.getOne(blogId)
            .then(result => {
                setBlog(result);
            });
    },[blogId])

    return (
        <section className="blog-post">
            <img src={blog.imageUrl} alt="Sports Image" />
            <h2 className="blog-post-title">{blog.title}</h2>
            <p className="blog-post-description">{blog.description}</p>
            <div className="blog-post-text">
                <p>{blog.text}</p>
            </div>
            <div className="blog-post-category">
                <a href="#">{blog.category}</a>
            </div>
        </section>
    );
}
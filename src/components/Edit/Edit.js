import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as blogService from '../../services/blogService';
 

export const Edit = ({
    onEditBlogSubmit,
}) => {

    const { blogId } = useParams();

    const [values, setValues] = useState({
        _id: '',
        imageUrl: '',
        title: '',
        category: '',
        description: '',
        text: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        onEditBlogSubmit(values);
    }

    useEffect(()=>{
        blogService.getOne(blogId)
            .then(result => {
                setValues(result);
            });
    },[blogId])


    return (
        <section className="create-form">
        <h2>Create Blog Post</h2>
        <form onSubmit={onSubmit}> 
            <div className="form-group">
                <label htmlFor="imageUrl">Image URL:</label>
                <input value={values.imageUrl} onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" />
            </div>

            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input value={values.title} onChange={onChangeHandler} type="text" id="title" name="title" />
            </div>

            <div className="form-group">
                <label htmlFor="category">Category:</label>
                <input value={values.category} onChange={onChangeHandler} type="text" id="category" name="category" />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input value={values.description} onChange={onChangeHandler} type="text" id="description" name="description" />
            </div>

            <div className="form-group">
                <label htmlFor="text">Text:</label>
                <textarea id="text" name="text" rows="30" value={values.text} onChange={onChangeHandler}></textarea>
            </div>
            <button type="submit">Edit Post</button>
        </form>
    </section>
    );
}
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { BlogContext } from '../../contexts/blogContext';

export const Create = () => {

    const { onCreateBlogSubmit } = useContext(BlogContext);

    const { values, changeHandler, onSubmit } = useForm({
        imageUrl: '',
        title: '',
        description: '',
        text: '',
    }, onCreateBlogSubmit)

    return (
        <section className="create-form">
            <h2>Create Blog Post</h2>
            <form method="post" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        value={values.imageUrl}
                        onChange={changeHandler}
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        value={values.title}
                        onChange={changeHandler}
                        type="text"
                        id="title"
                        name="title"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        value={values.description}
                        onChange={changeHandler}
                        type="text"
                        id="description"
                        name="description"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="text">Text:</label>
                    <textarea
                        id="text"
                        name="text"
                        rows="30"
                        value={values.text}
                        onChange={changeHandler}>
                    </textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}
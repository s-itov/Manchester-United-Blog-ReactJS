import { useForm } from '../../../hooks/useForm';

export const AddComment = ({
    onCommentSubmit
}) => {

    const { values, changeHandler, onSubmit } = useForm({
        comment: ''   
    }, onCommentSubmit)

    return (
        <div className="add-comment-section">
            <h3>Add Comment</h3>
            <form className="comment-form" onSubmit={onSubmit}>
                <label htmlFor="comment-text">Comment:</label>
                <textarea id="comment-text" name="comment" value={values.comment} onChange={changeHandler}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
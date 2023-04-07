import { useForm } from '../../../hooks/useForm';
import { useBlogContext } from '../../../contexts/blogContext';

export const AddComment = ({
    onCommentSubmit
}) => {

    const { userName } = useBlogContext();


    const { values, changeHandler, onSubmit } = useForm({
        comment: '',   
        userName: userName,
    }, onCommentSubmit)

    return (
        <div className="add-comment-section">
            <h3 className="add-comment">Add Comment</h3>
            <form className="comment-form" onSubmit={onSubmit}>
                <label htmlFor="comment-text">Comment:</label>
                <textarea id="comment-text" name="comment" value={values.comment} onChange={changeHandler}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
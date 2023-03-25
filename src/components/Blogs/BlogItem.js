import { Link } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../../contexts/blogContext";

export const BlogItem = ({
    _ownerId,
    _id,
    imageUrl,
    title,
    description,
}) => {

    const { onBlogDelete, userName, userId } = useContext(BlogContext);

    const isOwner = _ownerId === userId;

    return (
        <div className="projcard projcard-red">
            <div className="projcard-innerbox">
                <Link to={`/blogs/${_id}`} className="projcard-link">
                    <img className="projcard-img" src={imageUrl} alt="article" />
                </Link>
                <div className="projcard-textbox">
                    <Link to={`/blogs/${_id}`} className="projcard-link">
                        <div className="projcard-title">{title}</div>
                    </Link>
                    <div className="projcard-author">Created By: {userName}</div>
                    <div className="projcard-bar"></div>
                    <div className="projcard-description">{description}</div>
                    <div className="projcard-tagbox">
                        <Link to={`/blogs/${_id}`} className="projcard-button">READ MORE</Link>
                        {isOwner && (<>
                            <Link to={`/blogs/${_id}/edit`} className="projcard-button">EDIT</Link>
                            <button onClick={() => onBlogDelete(_id)} className="projcard-button">DELETE</button>
                        </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
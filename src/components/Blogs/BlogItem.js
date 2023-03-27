import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { BlogContext } from "../../contexts/blogContext";
import * as blogService from "../../services/blogService";

export const BlogItem = ({
    _ownerId,
    _id,
    imageUrl,
    title,
    description,
}) => {

    const { onBlogDelete, userId } = useContext(BlogContext);
    const [owner, setOwner] = useState({ userName: "Loading..." })
    useEffect(() => {
        blogService.getOwner(_id)
        .then(result => {
            setOwner(result[0].author);
        })
    }, [_id]);
    
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
                    <div className="projcard-author">
                        Created By: <img src={owner.avatarUrl} alt="owner" /> {owner.userName} </div>
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
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatDate } from "../../utils/dateUtils";
import { useBlogContext } from "../../contexts/blogContext";

import * as blogService from "../../services/blogService";
import * as loading from "../../utils/defaultConstants"

import "./BlogItem.css";

export const BlogItem = ({
    _ownerId,
    _id,
    _createdOn,
    imageUrl,
    title,
    description,
}) => {

    const { onBlogDelete, userId } = useBlogContext();
    const [author, setAuthor] = useState({ userName: "Loading..." })
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        blogService.getAuthor(_id)
            .then(result => {
                setAuthor(result[0].author);
                setIsLoading(false);
            })
    }, [_id]);

    const isOwner = _ownerId === userId;

    return (
        <div className="projcard projcard-red">
            <div className="projcard-innerbox">
                <Link to={`/blogs/${_id}`} className="projcard-link">
                    {isLoading ?
                        <img className="projcard-img" src={loading.defaultImage} alt="article" />
                        :
                        <img className="projcard-img" src={imageUrl} alt="article" />}
                </Link>

                <div className="projcard-textbox">
                    <Link to={`/blogs/${_id}`} className="projcard-link"><div className="projcard-title">{title}</div>
                    </Link>
                    <div className="projcard-author">
                        <p>Created By:</p>
                        {isLoading ? <img src={loading.defaultAvatar} alt="owner" /> : <img src={author.avatarUrl} alt="owner" />}
                        <p>{author.userName}</p>
                        <p>on {formatDate(_createdOn)}</p>
                    </div>
                    <div className="projcard-bar"></div>
                    <div className="projcard-description">{description}</div>
                    <div className="projcard-tagbox">
                        <Link to={`/blogs/${_id}`} className="projcard-button">READ MORE</Link>

                        {isOwner &&
                            (<>
                                <Link to={`/blogs/${_id}/edit`} className="projcard-button">EDIT</Link>
                                <button onClick={() => onBlogDelete(_id)} className="projcard-button">DELETE</button>
                            </>)}
                    </div>
                </div>
            </div>
        </div>
    );
}
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../../contexts/blogContext";

export const BlogItem = ({
    _id,
    imageUrl,
    title,
    category,
    description,
}) =>{

    const { onBlogDelete } = useContext(BlogContext);

    return(
        <div className="projcard projcard-red">
        <div className="projcard-innerbox">
            <img className="projcard-img" src={imageUrl} alt="article"/>
            <div className="projcard-textbox">
                <div className="projcard-title">{title}</div>
                <div className="projcard-author">Category: {category}</div>
                <div className="projcard-bar"></div>
                <div className="projcard-description">{description}</div>
                <div className="projcard-tagbox">
                    <Link to={`/blogs/${_id}`} className="projcard-button">READ MORE</Link>
                    <button className="projcard-button">EDIT</button>
                    <button onClick={() => onBlogDelete(_id)} className="projcard-button">DELETE</button>
                </div>
            </div>
        </div>
    </div>
    );
}
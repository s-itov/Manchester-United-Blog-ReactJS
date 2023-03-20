import { Link } from "react-router-dom";

export const BlogItem = ({
    _id,
    imageUrl,
    title,
    category,
    description,
    onBlogDelete,
}) =>{

    return(
        <div className="projcard projcard-red">
        <div className="projcard-innerbox">
            <img className="projcard-img"
                src={imageUrl}/>
            <div className="projcard-textbox">
                <div className="projcard-title">{title}</div>
                <div className="projcard-author">Category <a href="">{category}</a></div>
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
export const BlogItem = ({
    imageUrl,
    title,
    category,
    description,
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
                    <button className="projcard-button">READ MORE</button>
                    <button className="projcard-button">LIKE</button>
                    <button className="projcard-button">COMMENT</button>
                </div>
            </div>
        </div>
    </div>
    );
}
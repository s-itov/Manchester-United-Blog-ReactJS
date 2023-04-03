export const Creator = ({
    avatarUrl,
    userName, 
    email, 
    country,
    about,
}) => {
    return (
        <div className="creator-card">
            <img src={avatarUrl} alt="creator" />
            <h2 className="creator-username">{userName}</h2>
            <p className="creator-email"><b>Email:</b> {email}</p>
            <p className="creator-country"><b>Country:</b> {country}</p>
            <p className="creator-about"><b>About:</b> {about}</p>
        </div>
    );
}
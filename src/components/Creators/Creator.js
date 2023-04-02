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
            <p className="creator-age">Email: {email}</p>
            <p className="creator-country">Country: {country}</p>
            <p className="creator-about">About: {about}</p>
        </div>
    );
}
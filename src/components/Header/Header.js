import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { BlogContext } from '../../contexts/blogContext';

export const Header = () => {

    const { isAuthenticated, userName} = useContext(BlogContext);

    return (
        <header>
            <div className="header-logo">
                <Link to="/"><img src="images/logo.png" alt="man-united-logo" /></Link>
                <Link to="/"><h1>Manchester United Blog</h1></Link>
            </div>
            <nav>
                <ul>
                    <li className="guest"><Link to="/blogs">BLOGS</Link></li>
                    <li className="guest"><Link to="/authors">AUTHORS</Link></li>
                    {isAuthenticated && (
                        <>
                            <li className="user"><Link to="/create">CREATE BLOG</Link></li>
                            <li className="user"><Link to="/logout">LOGOUT</Link></li>
                            <li className='user'><Link to="/"><i className="fa-solid fa-user"></i> {userName}</Link></li>
                        </>
                    )}
                    {!isAuthenticated && (
                        <>
                            <li className="guest"><Link to="/login">LOGIN</Link></li>
                            <li className="guest"><Link to="/register">REGISTER</Link></li>
                        </>
                    )}

                </ul>
            </nav>
        </header>
    );
};
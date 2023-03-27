import { useContext } from 'react';
import { Link, NavLink  } from 'react-router-dom';

import { BlogContext } from '../../contexts/blogContext';

export const Header = () => {

    const { isAuthenticated, userId, userName } = useContext(BlogContext);

    return (
        <header>
            <div className="header-logo">
                <Link to="/"><img src="images/logo.png" alt="man-united-logo" /></Link>
                <Link to="/"><h1>Manchester United Blog</h1></Link>
            </div>
            <nav>
                <ul>
                    {isAuthenticated ? (
                        <>
                            <li className="guest"><NavLink  to="/blogs" activeclassname="active">BLOGS</NavLink></li>
                            <li className="guest"><NavLink  to="/create" activeclassname="active"> CREATE BLOG</NavLink></li>
                            <li className="user"><NavLink  to="/logout" activeclassname="active">LOGOUT</NavLink></li>
                            <li className='user'><NavLink  to={`/author`} ><i className="fa-solid fa-user"></i> {userName}</NavLink></li> 
                        </>
                    ) :
                        (
                            <>
                                <li className="guest"><NavLink  to="/blogs" activeclassname="active">BLOGS</NavLink></li>
                                <li className="guest"><NavLink  to="/login" activeclassname="active">LOGIN</NavLink></li>
                                <li className="guest"><NavLink  to="/register" activeclassname="active">REGISTER</NavLink></li>
                            </>
                        )}

                </ul>
            </nav>
        </header>
    );
};
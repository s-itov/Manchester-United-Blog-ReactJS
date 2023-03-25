import { useContext } from 'react';
import { Link, NavLink  } from 'react-router-dom';

import { BlogContext } from '../../contexts/blogContext';

export const Header = () => {

    const { isAuthenticated, userName } = useContext(BlogContext);

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
                            <li className="guest"><NavLink  to="/blogs" activeClassName="active">BLOGS</NavLink></li>
                            <li className="guest"><NavLink  to="/create" activeClassName="active"> CREATE BLOG</NavLink></li>
                            <li className="guest"><NavLink  to="/authors" activeClassName="active">AUTHORS</NavLink></li>
                            <li className="user"><NavLink  to="/logout" activeClassName="active">LOGOUT</NavLink></li>
                            <li className='user'><NavLink  to="/" ><i className="fa-solid fa-user"></i> {userName}</NavLink></li> 
                        </>
                    ) :
                        (
                            <>
                                <li className="guest"><NavLink  to="/blogs" activeClassName="active">BLOGS</NavLink></li>
                                <li className="guest"><NavLink  to="/authors" activeClassName="active">AUTHORS</NavLink></li>
                                <li className="guest"><NavLink  to="/login" activeClassName="active">LOGIN</NavLink></li>
                                <li className="guest"><NavLink  to="/register" activeClassName="active">REGISTER</NavLink></li>
                            </>
                        )}

                </ul>
            </nav>
        </header>
    );
};
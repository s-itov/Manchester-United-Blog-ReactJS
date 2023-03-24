import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BlogContext } from './contexts/blogContext';

import * as blogService from './services/blogService';
import * as authService from './services/authService';

import { Authors } from "./components/Authors/Authors";
import { Blogs } from "./components/Blogs/Blogs";
import { Create } from "./components/Create/Create";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { Logout } from './components/Logout/Logout';

function App() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [auth, setAuth] = useState({});

    useEffect(() => {
        blogService.getAll()
            .then(result => {
                console.log(result);
                setBlogs(result);
            })
    }, []);

    const onCreateBlogSubmit = async (data) => {
        const newBlog = await blogService.create(data);

        setBlogs(state => [...state, newBlog]);

        navigate('/blogs');
    }

    const onBlogDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this blog post?");

        if (confirmed) {
            await blogService.remove(id);

            setBlogs(state => state.filter(x => x._id !== id));
        }
    }


    const onEditBlogSubmit = async (values) => {
        const result = await blogService.update(values._id, values);

        setBlogs(state => state.map(x => x._id === values._id ? result : x));

        navigate(`/blogs/${values._id}`);
    }

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
            setAuth(result);
            navigate('/blogs');

        } catch (error) {
            alert(error.message);
        }
    }

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData} = values;
        if (confirmPassword !== values.password) {
            alert('The passwords dont match!');
            return;
        }

        try {
            const result = await authService.register(registerData);
            setAuth(result);
            navigate('/blogs');

        } catch (error) {
            alert(error.message);
        }
    }

    const onLogout = () => {
        setAuth({});
    }

    const contextValue = {
        onBlogDelete,
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        onCreateBlogSubmit,
        userId: auth._id,
        userName: auth.username,
        userEmail: auth.email,
        token: auth.accessToken,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <BlogContext.Provider value={contextValue}>
            <div id="box">
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/blogs' element={<Blogs blogs={blogs} />} />
                        <Route path='/create' element={<Create onCreateBlogSubmit={onCreateBlogSubmit} />} />
                        <Route path='/authors' element={<Authors />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/blogs/:blogId' element={<Details />} />
                        <Route path='/blogs/:blogId/edit' element={<Edit onEditBlogSubmit={onEditBlogSubmit} />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BlogContext.Provider>

    );
}

export default App;

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BlogContext } from './contexts/blogContext';

import * as blogService from './services/blogService';
import * as authService from './services/authService';
import * as creatorService from './services/creatorService';

import { Blogs } from "./components/Blogs/Blogs";
import { Create } from "./components/Create/Create";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/User/Login/Login";
import { Register } from "./components/User/Register/Register";
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { Logout } from './components/User/Logout/Logout';
import { NotFound } from './components/NotFound/NotFound';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Author } from './components/Author/Author';
import { Creators } from './components/Creators/Creators';

function App() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [creators, setCreators] = useState([]);

    const [auth, setAuth] = useLocalStorage('auth', {});

    useEffect(() => {
        Promise.all([
            blogService.getAll(),
            creatorService.getAll(),
        ])
            .then(([blogsData, creatorsData]) => {
                setBlogs(blogsData);
                setCreators(creatorsData);
            })
    }, []);

    const onCreateBlogSubmit = async (data) => {
        const newBlog = await blogService.create(data, auth.accessToken);

        setBlogs(state => [...state, newBlog]);

        navigate('/blogs');
    }

    const onBlogDelete = async (id) => {
        const confirmed = window.confirm("Are you sure you want to delete this blog post?");

        if (confirmed) {
            await blogService.remove(id, auth.accessToken); 

            setBlogs(state => state.filter(x => x._id !== id));
        }
    }


    const onEditBlogSubmit = async (values) => {
        const result = await blogService.update(values._id, values, auth.accessToken);

        setBlogs(state => state.map(x => x._id === values._id ? result : x));

        navigate(`/blogs/${values._id}`);
    }

    const onLoginSubmit = async (values) => {
        if (values.email === '' || values.passwords === '') {
            alert('All fields are required!');
            return;
        }

        try {
            const result = await authService.login(values);
            setAuth(result);
            navigate('/');

        } catch (error) {
            alert(error.message);
        }
    }

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== values.password) {
            alert('The passwords dont match!');
            return;
        }

        if (values.userName === '' || values.email === '' || values.country === '' || values.about === '' || values.avatarUrl === '') {
            alert('All fields are required!');
            return;
        }

        try {
            const result = await authService.register(registerData);
            await creatorService.create(registerData);
            setAuth(result);
            setCreators(state => [...state, registerData]);
            navigate('/');

        } catch (error) {
            alert(error.message);
        }
    }

    const onLogout = async () => {

        await authService.logout(auth.accessToken);

        setAuth({});
    }

    const contextValue = {
        onCreateBlogSubmit,
        onBlogDelete,
        onEditBlogSubmit,
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        blogs,
        creators,
        userId: auth._id,
        userName: auth.userName,
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
                        <Route path='*' element={<NotFound />}/>
                        <Route path='/' element={<Home />}/>
                        <Route path='/logout' element={<Logout />}/>
                        <Route path='/blogs' element={<Blogs />}/>
                        <Route path='/create' element={<Create />}/>
                        <Route path='/login' element={<Login />}/>
                        <Route path='/register' element={<Register />}/>
                        <Route path='/blogs/:blogId' element={<Details />}/>
                        <Route path='/blogs/:blogId/edit' element={<Edit />}/>
                        <Route path='/author' element={<Author />}/>
                        <Route path='/creators' element={<Creators />}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </BlogContext.Provider>
    );
}

export default App;

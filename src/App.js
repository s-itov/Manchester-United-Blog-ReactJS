import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BlogContext } from './contexts/blogContext';

import * as blogService from './services/blogService';

import { Authors } from "./components/Authors/Authors";
import { Blogs } from "./components/Blogs/Blogs";
import { Create } from "./components/Create/Create";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Details } from './components/Details/Details';

function App() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        blogService.getAll()
        .then(result => {
            console.log(result);
            setBlogs(result);
        })
    }, []);

    const onCreateBlogSubmit  = async (data) => {
        const newBlog = await blogService.create(data);
        
        setBlogs(state => [...state, newBlog]);

        navigate('/blogs');
    }

    const onBlogDelete = async (id) => {
        await blogService.remove(id);

        setBlogs(state => state.filter(x=> x._id !== id));
    }

    const contextValue = {
        onBlogDelete,
    }

    return (
        <BlogContext.Provider value={contextValue}>
        <div id="box">
            <Header />
            <main>
                <Routes>
                  <Route path='/' element={<Home />} /> 
                  <Route path='/blogs' element={<Blogs  blogs={blogs} />} /> 
                  <Route path='/create' element={<Create onCreateBlogSubmit={onCreateBlogSubmit} />} /> 
                  <Route path='/authors' element={<Authors />} /> 
                  <Route path='/login' element={<Login />} /> 
                  <Route path='/register' element={<Register />} /> 
                  <Route path='/blogs/:blogId' element={<Details />} /> 
                </Routes>
            </main>
            <Footer />
        </div>
        </BlogContext.Provider>

    );
}

export default App;

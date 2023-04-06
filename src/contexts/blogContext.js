import { createContext } from "react";
import { useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useNavigate } from "react-router-dom";

import * as blogService from '../services/blogService';
import * as authService from '../services/authService';
import * as creatorService from '../services/creatorService';

export const BlogContext = createContext();

export const BlogProvider = ({
    children,
}) => {

    const navigate = useNavigate();

    const [blogs, setBlogs] = useState([]);
    const [auth, setAuth] = useLocalStorage('auth', {});

    useEffect(() => {
        blogService.getAll()
            .then(result => setBlogs(result))
    }, [])

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

        if (values.userName === '' || values.email === '' || values.country === '' || values.about === '' || values.avatarUrl === '') {
            alert('All fields are required!');
            return;
        }

        if (confirmPassword !== values.password) {
            alert('The passwords dont match!');
            return;
        }

        try {
            const result = await authService.register(registerData);
            await creatorService.create(registerData);
            setAuth(result);
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
        userId: auth._id,
        userName: auth.userName,
        userEmail: auth.email,
        token: auth.accessToken,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <BlogContext.Provider value={contextValue}>
            {children}
        </BlogContext.Provider>
    );
}

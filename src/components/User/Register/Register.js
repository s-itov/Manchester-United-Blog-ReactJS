import { useContext } from "react";
import { useForm } from "../../../hooks/useForm";
import { Link } from "react-router-dom";

import { BlogContext } from "../../../contexts/blogContext";

import "./register.css";

export const Register = () => {
    const { onRegisterSubmit } = useContext(BlogContext);

    const { values, changeHandler, onSubmit } = useForm({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        avatarUrl: '',
        country: '',
        about: '',
    }, onRegisterSubmit);

    return (
        <section className="register-form">
            <h2>Register</h2>
            <form method="post" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="userName"
                        onChange={changeHandler}
                        value={values.userName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={changeHandler}
                        value={values.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={changeHandler}
                        value={values.password}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        onChange={changeHandler}
                        value={values.confirmPassword}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="avatarUrl">Avatar URL</label>
                    <input
                        type="text"
                        id="avatarUrl"
                        name="avatarUrl"
                        onChange={changeHandler}
                        value={values.avatarUrl}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        onChange={changeHandler}
                        value={values.country}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="about">About me</label>
                    <input
                        type="text"
                        id="about"
                        name="about"
                        onChange={changeHandler}
                        value={values.about}
                    />
                </div>
                <button type="submit">Register</button>
                <p className="field">
                    <span>If you already have a profile click <Link to="/login">here</Link></span>
                </p>
            </form>
        </section>
    );
}
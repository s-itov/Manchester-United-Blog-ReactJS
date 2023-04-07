import { Link } from 'react-router-dom';
import { useBlogContext } from '../../../contexts/blogContext';

import { useForm } from '../../../hooks/useForm';

import "./Login.css";

export const Login = () => {
    const { onLoginSubmit } = useBlogContext();
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    return (
        <section className="login-form">
            <h2>Login</h2>
            <form method="POST" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="e-mail">Email</label>
                    <input type="email" name="email" onChange={changeHandler} value={values.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input type="password"  name="password" onChange={changeHandler} value={values.password}/>
                </div>
                <button type="submit">Login</button>
                <p className="field">
                    <span>If you don't have profile click <Link to="/register">here</Link></span>
                </p>
            </form>
        </section>
    );
}
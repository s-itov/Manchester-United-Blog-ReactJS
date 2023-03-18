import  { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <section className="login-form">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="e-mail">Email</label>
                    <input type="text" id="e-mail" name="e-mail" />
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input type="password" id="pass" name="pass" />
                </div>
                <button type="submit">Login</button>
                <p className="field">
                    <span>If you don't have profile click <Link to="/register">here</Link></span>
                </p>
            </form>
        </section>
    );
}
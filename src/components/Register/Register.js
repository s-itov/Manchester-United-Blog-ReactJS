export const Register = () => {
    return (
        <section className="register-form">
            <h2>Register</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" />
                </div>
                <div className="form-group">
                    <label htmlFor="avatar-url">Avatar URL</label>
                    <input type="text" id="avatar-url" name="avatar-url" />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" name="age" />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" name="country" />
                </div>
                <div className="form-group">
                    <label htmlFor="about">About me</label>
                    <input type="text" id="about" name="about" />
                </div>
                <button type="submit">Register</button>
            </form>
        </section>
    );
}
export const Authors = () => {
    return (
        <section className="author-cards">
            <div className="author-card">
                <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                    alt="Author Name" />
                <h2 className="author-username">Jude</h2>
                <p className="author-age">Age: 24</p>
                <button type="submit">Learn More</button>
                {/* <p className="author-country">Country: United States</p> */}
                {/* <p className="author-about">About: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit quam sed velit sagittis, nec ullamcorper orci lacinia. Sed et efficitur eros. Vestibulum quis mauris et nibh commodo auctor. Fusce porttitor nisi massa, ut fringilla odio fermentum id.</p> */}
            </div>
            {/* <!-- Repeat the author-card div for each author --> */}
        </section>
    );
}
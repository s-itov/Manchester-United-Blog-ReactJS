import { BlogItem } from "./BlogItem"

export const Blogs = ({
    blogs,
    onBlogDelete,
}) => {

    return (
        <section className="projcard-container">
            <h1>Latest Blogs:</h1>
            {blogs.map(x=> <BlogItem key={x._id} {...x} onBlogDelete={onBlogDelete}/>).reverse()}

            {blogs.length === 0 && 
                <h3>No blog posts yet...</h3>}
        </section>
    );
}
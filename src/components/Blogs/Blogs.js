import { BlogItem } from "./BlogItem"
import { useContext } from "react";
import { BlogContext } from "../../contexts/blogContext";

import "./BlogItem.css";


export const Blogs = () => {

    const { blogs } = useContext(BlogContext);

    return (
        <section className="projcard-container">
            <h1>All Blogs:</h1>
            {blogs.map(x=> <BlogItem key={x._id} {...x} />).reverse()}

            {blogs.length === 0 && 
                <h3>No blog posts yet...</h3>}
        </section>
    );
}
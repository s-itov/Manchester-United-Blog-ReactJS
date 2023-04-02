import { useContext } from "react";
import { BlogContext } from "../../contexts/blogContext";
import { Creator } from "./Creator";

export const Creators = () => {

    const { creators } = useContext(BlogContext);

    return (
        <section className="creator-cards">
            {creators.map(x=> <Creator key={x._id} {...x} />)}

            {creators.length === 0 && 
                <h3>No authors yet...</h3>}
        </section>
    );
}
import { useEffect, useState } from "react";
import { Creator } from "./Creator";
import * as creatorService from '../../services/creatorService';

import "./Creator.css"

export const Creators = () => {

    const [creators, setCreators] = useState([]);

    useEffect(() => {
        creatorService.getAll()
        .then(result => setCreators(result))
    },[])

    return (
        <section className="creator-cards">
            {creators.map(x=> <Creator key={x._id} {...x} />)}

            {creators.length === 0 && 
                <h3 className="no-creators">No creators yet...</h3>}
        </section>
    );
}
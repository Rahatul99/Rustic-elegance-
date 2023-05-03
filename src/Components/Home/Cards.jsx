import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Cards = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-side-rahatul99.vercel.app/chef')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    if (!data) {
        return 'loading...'
    }

    return (
        <>
            {data.map((item, index) => (
                <div className="card w-96 glass" key={index}>
                    <figure><img src={item.chef_img} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Chef Name:{item.name}</h2>
                        <p>Experince: {item.experience}</p>
                        <p>He delidbver jds {item.number_of_recipes}</p>
                        <p>own likes: {item.like}</p>
                        <Link to={`/recipe/${item.id_}`} className="btn btn-primary">
                            Learn more!
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Cards;
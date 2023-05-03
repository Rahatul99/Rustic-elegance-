import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';
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
        return(
            <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-solid">
                <style>
                {`
                    @keyframes spin {
                    0% { border-color: #fuchsia; }
                    25% { border-color: #blue; }
                    50% { border-color: #green; }
                    75% { border-color: #yellow; }
                    100% { border-color: #red; }
                    }
                `}
                </style>
            </div>
            </div>
    )}

    return (
        <>
            {data.map((item, index) => (
                <div className="card w-96 glass" key={index}>
                    <figure><LazyLoad><img src={item.chef_img} alt="car!" /></LazyLoad></figure>
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







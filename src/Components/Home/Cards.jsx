import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

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
                <div className="card md:h-90 md:w-98 glass" key={index}>
                    <figure><LazyLoad><img src={item.chef_img} alt="car!" /></LazyLoad></figure>
                    <div className="card-body">
                        <h2 className="card-title">Chef Name:{item.name}</h2>
                        <p>Experince: {item.experience}</p>
                        <p>Numbers of recipes: {item?.number_of_recipes}</p>
                        <p>likes: {item?.total_like}</p>
                        <Link to={`/recipe/${item.id_}`} className="btn btn-dark">
                        View Recipes 
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Cards;







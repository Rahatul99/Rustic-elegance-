import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import RestRecipe from './RestRecipe';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = () => {
    const chefs = useLoaderData();
    if (!chefs) {
        return <progress className="progress w-56"></progress>
    }

    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const handleAddFavorite = (recipe) => {
      setFavoriteRecipes([...favoriteRecipes, recipe]);
      toast.success(`${recipe.recipe_name} is your favorite recipe!`);
      event.target.disabled = true;
      event.target.innerText = 'Recipe is your favorite';
    }

    return (
        <>
            {chefs.map((chef) => (
                <>
                    <div className="hero  bg-base-200 mt-0">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img className='rounded-md sm:w-[100%] md:w-[60%]' src={chef.chef_img} />
                            <div>
                                <h1 className="text-5xl font-bold">Name:{chef.name}</h1>
                                <br />
                                <h2 className="text-xl font-bold">Designation:<small className='font-thin'>{chef.bio}</small></h2>
                                <h2 className="text-xl font-bold">Number of recipes: <small className='font-thin'>{chef.number_of_recipes}</small></h2>
                                <h2 className="text-xl font-bold">Years of experience: <small className='font-thin'>{chef.experience}</small></h2>
                                <h2 className="text-xl font-bold">Likes: <small className='font-thin'>43</small></h2>

                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <Link to="/" className="btn btn-primary">back to home</Link>
                            </div>
                        </div>
                    </div>

                    <div className="hero min-h-screen" style={{ backgroundImage: `https://images.unsplash.com/photo-1633287510125-d34b81602f14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80` }}>
                        <div className="hero-content text-neutral-content">

                            <ToastContainer />

                            <div className='grid md:grid-cols-3 gap-4 justify-items-center'>
                                <RestRecipe recipes={chef.recipes} handleAddFavorite={handleAddFavorite} key={chef.id} />
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    );
};

export default Recipe;
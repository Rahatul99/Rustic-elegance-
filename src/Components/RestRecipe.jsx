import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const RestRecipe = ({ recipes, handleAddFavorite }) => {
  if (!recipes) {
    return <progress className="progress w-56"></progress>
  }

  return (
    <>
      {recipes?.map((recipe) => (
        <div className="card backdrop-blur-sm md:h-[80%] bg-white/20 p-5">
          <figure><img src={recipe?.recipe_img} alt="" /></figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Recipe Name:{recipe?.recipe_name}</h2>
            <h2 className='text-xl font-bold'>Ingredients:</h2>
            <li>{recipe.recipe_ingredients.Ingredient_1}</li>
            <li>{recipe.recipe_ingredients.Ingredient_2}</li>
            <li>{recipe.recipe_ingredients.Ingredient_3}</li>
            <li>{recipe.recipe_ingredients.Ingredient_4}</li>
            <li>{recipe.recipe_ingredients.Ingredient_5}</li>
            <h2 className='text-xl font-bold'>Cooking method:</h2>
            <li>{recipe?.cooking_style}</li>
            <h2 className='text-xl font-bold'><Rating
              placeholderRating={recipe.ratting}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
            /> <span>{recipe.ratting}</span></h2>
          </div>
          <button className="btn dark" onClick={() => handleAddFavorite(recipe)}>Add to favorite</button>
        </div>
      ))}
    </>
  );
};

export default RestRecipe;

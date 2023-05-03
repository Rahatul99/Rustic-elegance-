// import React from 'react';
// import { FaUtensils } from "react-icons/fa";

// const RestRecipe = ({ recipes }) => {
//     if (!recipes) {
//         return <progress className="progress w-56"></progress>
//     }
//     return (
//         <>
//             {recipes?.map((recipe) => (
//                 <div className="card w-96 backdrop-blur-sm bg-white/20 p-5">
//                     <figure><FaUtensils className='w-10 h-10' /></figure>
//                     <div className="card-body">
//                         <h2 className="card-title text-xl font-bold">Recipe Name:{recipe?.recipe_name}</h2>
//                         <h2 className='text-xl font-bold'>Ingredients:</h2>
//                         <li>{recipe.recipe_ingredients.Ingredient_1}</li>
//                         <li>parmesan cheese</li>
//                         <li>red bell pepper</li>
//                         <li>canned tomatoes</li>
//                         <li>mozzarella cheese</li>
//                         <h2 className='text-xl font-bold'>Cooking method:</h2>
//                         <li>Cut the chicken into bite-sized pieces and marinate in a mixture of soy sauce, rice vinegar, honey, cornstarch, and sesame oil.Heat vegetable oil in a wok or large skillet over high heat.</li>
//                         <h2 className='text-xl font-bold'>Ratting:</h2>
//                     </div>
//                     <button className="btn glass">Add to favorite</button>
//                 </div>
//             ))}
//         </>
//     );
// };

// export default RestRecipe;











import React from 'react';
import { FaUtensils } from "react-icons/fa";

const RestRecipe = ({ recipes, handleAddFavorite }) => {
  if (!recipes) {
    return <progress className="progress w-56"></progress>
  }

  return (
    <>
      {recipes?.map((recipe) => (
        <div className="card w-96 backdrop-blur-sm bg-white/20 p-5">
          <figure><FaUtensils className='w-10 h-10' /></figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Recipe Name:{recipe?.recipe_name}</h2>
            <h2 className='text-xl font-bold'>Ingredients:</h2>
            <li>{recipe.recipe_ingredients.Ingredient_1}</li>
            <li>parmesan cheese</li>
            <li>red bell pepper</li>
            <li>canned tomatoes</li>
            <li>mozzarella cheese</li>
            <h2 className='text-xl font-bold'>Cooking method:</h2>
            <li>Cut the chicken into bite-sized pieces and marinate in a mixture of soy sauce, rice vinegar, honey, cornstarch, and sesame oil.Heat vegetable oil in a wok or large skillet over high heat.</li>
            <h2 className='text-xl font-bold'>Ratting:</h2>
          </div>
          <button className="btn glass" onClick={() => handleAddFavorite(recipe)}>Add to favorite</button>
        </div>
      ))}
    </>
  );
};

export default RestRecipe;

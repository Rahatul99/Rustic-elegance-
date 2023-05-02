import React from 'react';
import { FaDocker, FaGlassCheers, FaUtensils } from "react-icons/fa";

const Recipe = () => {
    return (
        <>
            <div className="hero  bg-base-200 mt-0">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='rounded-md sm:w-[100%] md:w-[60%]' src="https://images.unsplash.com/photo-1604543248368-da42b20dce5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80" />
                    <div>
                        <h1 className="text-5xl font-bold">Name:</h1>
                        <br />
                        <h2 className="text-xl font-bold">Designation: <small className='font-thin'>a short bio/description</small></h2>
                        <h2 className="text-xl font-bold">Number of recipes: <small className='font-thin'>a short bio/description</small></h2>
                        <h2 className="text-xl font-bold">Years of experience: <small className='font-thin'>a short bio/description</small></h2>
                        <h2 className="text-xl font-bold">Likes: <small className='font-thin'>a short bio/description</small></h2>

                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">back to home</button>
                    </div>
                </div>
            </div>




            {/* ---------------------another section---------------------------- */}

            <div className="hero min-h-screen" style={{ backgroundImage: `https://images.unsplash.com/photo-1633287510125-d34b81602f14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div>
                    <div className='grid md:grid-cols-3 gap-4 justify-items-center'>
                        <div className="card w-96 backdrop-blur-sm bg-white/20 p-5">
                            <figure><FaUtensils className='w-10 h-10' /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl font-bold">Recipe Name:</h2>
                                <h2 className='text-xl font-bold'>Ingredients:</h2>
                                <li>Chicken Stir-Fry</li>
                                <li>parmesan cheese</li>
                                <li>red bell pepper</li>
                                <li>canned tomatoes</li>
                                <li>mozzarella cheese</li>
                                <h2 className='text-xl font-bold'>Cooking method:</h2>
                                <li>Cut the chicken into bite-sized pieces and marinate in a mixture of soy sauce, rice vinegar, honey, cornstarch, and sesame oil.Heat vegetable oil in a wok or large skillet over high heat.</li>
                                <h2 className='text-xl font-bold'>Ratting:</h2>
                            </div>
                            <button className="btn glass">Add to favorite</button>
                        </div>
                    </div>
                        {/* <div className="card w-96 backdrop-blur-sm bg-white/30 p-5">
                            <figure><FaDocker className='w-12 h-12'/></figure>
                            <div className="card-body items-center">
                                <h2 className="card-title">Cooking Period</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque nobis, accusamus commodi ex similique architecto ducimus minus distinctio praesentium.</p>
                                {/* <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Learn now!</button>
                            //     </div> */}
              
                   
                        {/* <div className="card w-96 backdrop-blur-sm bg-white/30 p-5">
                            <figure><FaGlassCheers className='w-12 h-12'/></figure>
                            <div className="card-body items-center">
                                <h2 className="card-title">Life hack</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatem ex vitae voluptatum magni! Modi ex voluptatibus sit repellendus iure!</p>
                            </div>
                        </div> */}
                    {/* </div> */}
                    {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>


        </>
    );
};

export default Recipe;
import React from 'react';
import { FaDocker, FaGlassCheers, FaUtensils } from "react-icons/fa";

const Popular = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1617196905100-216ffe128142?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="relative">
                    <div className='grid md:grid-cols-3 gap-4 justify-center'>
                        <div className="card w-96 backdrop-blur-sm bg-white/20 p-5">
                            <figure className='md:absolute left-[45%] top-[-40%]'><FaUtensils className='w-10 h-10' /></figure>
                            <div className="card-body items-center">
                                <h2 className="card-title">Food Nutrition</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quod, commodi nostrum eveniet hic ad sapiente quisquam odit tempora id.</p>
                            </div>
                        </div>
                        <div className="card w-96 backdrop-blur-sm bg-white/30 p-5">
                            <figure className='md:absolute left-[45%] top-[-40%]'><FaDocker className='w-12 h-12'/></figure>
                            <div className="card-body items-center">
                                <h2 className="card-title">Cooking Period</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque nobis, accusamus commodi ex similique architecto ducimus minus distinctio praesentium.</p>
                            </div>
                        </div>
                        <div className="card w-96 backdrop-blur-sm bg-white/30 p-5">
                            <figure className='md:absolute left-[45%] top-[-40%]'><FaGlassCheers className='w-12 h-12'/></figure>
                            <div className="card-body items-center">
                                <h2 className="card-title">Life hack</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatem ex vitae voluptatum magni! Modi ex voluptatibus sit repellendus iure!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;
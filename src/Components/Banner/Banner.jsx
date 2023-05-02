import React from 'react';
import Cards from '../Cards';
import Popular from '../Popular';

// import { Carousel } from 'bootstrap';
// import { Carousel } from 'react-bootstrap/bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
  return (
    <>
      <div className="hero  bg-base-200 mt-0">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className='rounded-md sm:w-[100%] md:w-[60%]' src="https://images.unsplash.com/photo-1604543248368-da42b20dce5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 justify-items-center mt-5 mb-5">
        <Cards />
      </div>
      <Popular />


      <div className='mt-5 mb-5'>
        <div>
          <div className='text-center'>
            <h1 className='font-semibold text-3xl'>MOST POPULAR RECIPES</h1>
            <hr className='m-3'/>
            <small className='text-ellipsis'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veniam porro, ea iure rem tempore <br /> dolore? Id fuga dicta laborum laudantium voluptatum nam mollitia!</small>
          </div>
          <div className="navbar bg-base-100 justify-center">
            <div className="navbar-center flex">
              <ul className="menu menu-horizontal px-1 gap-3">
                <li><a className='bg-orange-500 text-white'>All</a></li>
                <li><a className='bg-orange-500 text-white'>Foods</a></li>
                <li><a className='bg-orange-500 text-white'>Beverage</a></li>
                <li><a className='bg-purple-400 text-white'>Dessert</a></li>
                <li><a className='bg-orange-500 text-white'>Pudding</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 justify-items-center mt-5 mb-5">
          <div className="card w-[100%] h-96 bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Escargots de Bourgogne</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure><img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" /></figure>
          </div>
          <div className="card w-[100%] h-96 bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Crème Brûlée</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure><img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80" /></figure>
          </div>
          <div className="card w-[100%] h-96 bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Oysters Rockefeller</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <figure><img src="https://images.unsplash.com/photo-1538220856186-0be0e085984d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=763&q=80" /></figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;






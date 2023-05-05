import React from 'react';
import Popular from '../Popular';
import Cards from '../Cards';

const Banner = () => {
  return (
    <>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1510195429239-8a5c0222144a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="sm:max-w-md md:w-max-w-lg">
            <h1 className="mb-5 text-4xl font-bold">Discover Authentic Flavors of Turkish Food</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-glass">Book a table</button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 justify-items-center mt-5 mb-5 p-5">
        <Cards />
      </div>
      <Popular />
      <div className='mt-5 mb-5'>
        <div>
          <div className='text-center'>
            <h1 className='font-semibold text-3xl'>MOST POPULAR RECIPES</h1>
            <hr className="m-3 border-t-2 border-gray-400" />
            <small className='md:text-ellipsis text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Veniam porro, ea iure rem tempore <br /> dolore? Id fuga dicta laborum laudantium voluptatum nam mollitia!</small>
          </div>
          <div className="navbar bg-base-100 justify-center">
            <div className="navbar-center">
              <ul className="menu md:menu-horizontal px-1 gap-3">
                <li><a className='bg-gray-900 text-white'>All</a></li>
                <li><a className='bg-gray-900 text-white'>Foods</a></li>
                <li><a className='bg-gray-900 text-white'>Beverage</a></li>
                <li><a className='bg-gray-500 text-white'>Dessert</a></li>
                <li><a className='bg-gray-900 text-white'>Pudding</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 justify-items-center items-center mt-5 mb-5">
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






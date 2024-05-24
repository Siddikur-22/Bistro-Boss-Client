import React from 'react';

const FoodCard = ({ item }) => {

    const { name, image, price, recipe } = item;
    return (
       
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={image} alt="food" /></figure>
                <p className='absolute right-0 px-4 mr-4 mt-4 bg-slate-900 text-white '>{price}</p>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">Name:{name}</h2>
                    <p>{recipe}</p>
                   
                    <div className="card-actions justify-center">
                        <button  className='uppercase btn btn-outline border-0 border-orange-400 border-b-4 mt-4'>Add to Cart</button>
                    </div>
                </div>
            </div>
       
    );
};

export default FoodCard;
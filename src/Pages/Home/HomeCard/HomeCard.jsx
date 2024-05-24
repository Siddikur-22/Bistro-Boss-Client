import React from 'react';
import SectinTitile from '../../../Componentes/SectinTitile/SectinTitile';

const HomeCard = () => {
    return (
        <div>
            <SectinTitile
                heading='CHEF RECOMMENDS'
                subHeading=' Should Try'
            ></SectinTitile>

            <div className='grid md:grid-cols-3 grid-cols-1'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.postimg.cc/SRdz9KRB/04.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">Caser Salad</h2>
                        <p>Enthusiastically actualize robust niche markets for front-end leadership. Phosfluorescently mesh premier. </p>
                        <div className="card-actions justify-center">
                            <button className="uppercase btn btn-outline border-0 border-b-4 mt-4 ">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.postimg.cc/PxmDtyjr/01.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">Masala Salad</h2>
                        <p>Enthusiastically actualize robust niche markets for front-end leadership. Phosfluorescently mesh premier. </p>
                        <div className="card-actions justify-center">
                            <button className="uppercase btn btn-outline border-0 border-b-4 mt-4">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.postimg.cc/4N4cgpFs/02.jpg" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title justify-center">Fursti Salad</h2>
                        <p>Enthusiastically actualize robust niche markets for front-end leadership. Phosfluorescently mesh premier. </p>
                        <div className="card-actions justify-center">
                            <button className="uppercase btn btn-outline border-0 border-b-4 mt-4">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
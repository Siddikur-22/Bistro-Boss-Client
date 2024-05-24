import React from 'react';
import SectinTitile from '../../../Componentes/SectinTitile/SectinTitile';
import './Featured.css' 
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white opacity-80 pt-8 my-20'>
            <SectinTitile
                subHeading='Check it Out'
                heading="Featured Item"
            ></SectinTitile>

            <div className='md:flex  justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60'>
                <div>
                    <img src="https://i.postimg.cc/WzDF2w0k/featured.jpg" alt="" />
                </div>
                <div className='md:ml-10 '>
                    <p>Aug 20,2030</p>
                    <h2 className='uppercase font-semibold'>Where can i get sum</h2>
                    <p className='lg:w-2/3 md:w-3/3'>Uniquely re-engineer competitive technology for flexible paradigms. Conveniently morph interoperable collaboration and idea-sharing before one-to-one quality vectors. Professionally transition intuitive manufactured products through inexpensive expertise.</p>
                    <button className='uppercase btn btn-outline border-0 border-b-4 mt-4'> Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
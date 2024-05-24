import React from 'react';

const SectinTitile = ({heading,subHeading}) => {
    return (
        <div className='mt-20 mb-20 md:w-4/12 mx-auto  text-center'>
            <p className="text-lg text-yellow-500 mb-2">----{subHeading}----</p>
            <h2 className="text-4xl  mt-5 font-semibold border-y-4 py-4">{heading}</h2>
        </div>
    );
    
};

export default SectinTitile;
import React from 'react';
import FoodCard from '../../../Componentes/SectinTitile/FoodCard/FoodCard';

const OrderTab = ({ items }) => {
    return (

        <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-24'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>

    );
};

export default OrderTab;
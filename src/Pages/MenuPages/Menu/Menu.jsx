import React from 'react';
import { Helmet } from 'react-helmet-async';
import useMenu from '../../../Hooks/useMenu';
import SectinTitile from '../../../Componentes/SectinTitile/SectinTitile';
import MenuCategory from '../MenuCategory/MenuCategory';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzatImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
               
            </Helmet>

            <Cover img={menuImg}  title='OUR MENU'></Cover>

            <SectinTitile
                heading="Today's Offer"
                subHeading="Don't Miss "
            ></SectinTitile>
            {/* offerd menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} title="pizza" img={pizzatImg}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;
import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import DesignPart2 from '../DesignPart/DesignPart2';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonials from '../Testimonials/Testimonials';
import Featured from '../Featured/Featured';
import Contact from '../ContactDesign/Contact';
import HomeCard from '../HomeCard/HomeCard';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <DesignPart2></DesignPart2>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <HomeCard></HomeCard>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
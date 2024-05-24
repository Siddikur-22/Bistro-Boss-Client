import React, { useEffect, useState } from 'react';
import SectinTitile from '../../../Componentes/SectinTitile/SectinTitile';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    })
    return (
        <section className='my-20'>
            <SectinTitile
                subHeading='What Oue Client Say'
                heading="Testimonials"
            ></SectinTitile>
            <>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide key={review._id} review={review}>
                            <div className='flex flex-col items-center mx-24 my-16 '>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className='my-8 w-2/3 text-center'>{review.details}</p>
                                <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                               

                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </section>

    );
};

export default Testimonials;
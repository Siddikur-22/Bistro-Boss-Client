import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import SectinTitile from '../../../Componentes/SectinTitile/SectinTitile';

const Category = () => {
    return (
        <section>
            <SectinTitile subHeading={"From 11.00 to 10.00pm"}
                heading={" ORDER ONLINE"}>


            </SectinTitile>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-28 mb-28"
            >
                <SwiperSlide><img src="https://i.postimg.cc/rwfXH2Rq/slide1.jpg" alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide><img src="https://i.postimg.cc/Jhgw13Qg/slide2.jpg" alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide><img src="https://i.postimg.cc/bJ27dGCv/slide3.jpg" alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide><img src="https://i.postimg.cc/zf3ZZ2TK/slide4.jpg" alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Cake</h3>
                </SwiperSlide>
                <SwiperSlide><img src="https://i.postimg.cc/rwfXH2Rq/slide1.jpg" alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>desserts</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;






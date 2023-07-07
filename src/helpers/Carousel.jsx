import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules

export default function Carousel({ count }) {
    const countArray = Array.from({ length: count }, (_, index) => index + 1);

    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
                className="mySwiper"
            >
                {countArray.map((el, i) => (
                    <SwiperSlide key={i}>
                        <div className="restaurant__item">
                            <div className="restaurant__item__image">
                                <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/ca/7d/be/bar-35-food-drinks.jpg" alt="" className='w-full rounded-md' />
                            </div>
                            <div className="restaurant__item__content mt-3 ">
                                <div className="review flex items-center gap-2 ">
                                    <AiFillStar className='text-yellow-400 text-lg ' />
                                    <span className=' text-gray-500 font-karla text-[16px] font-bold block'>4,5</span>
                                </div>
                                <h1 className='text-lg font-outfits font-bold mt-2'>De Taste Food</h1>
                                <p className='text-xs text-gray-500 mt-1 font-karla '>Jl. Raya Cipinang Jaya No. 88, Jakarta Timur</p>
                                <div className="price">
                                    <span className=' text-blue-500 text-lg font-rowdies block mt-3'>Rp. 100.000</span>
                                </div>
                                <div className="checkOut flex items-center gap-6 mt-3  ">
                                    <div className="buy">
                                        <button className='bg-slate-100 text-slate-800 font-karla shadow-sm  px-4 py-2 rounded-md '>Buy</button>
                                    </div>
                                    <div className="heart ">
                                        <AiOutlineHeart className='text-2xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}

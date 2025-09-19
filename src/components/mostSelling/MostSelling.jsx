import React from 'react'
import HeadLines from '../headlines/HeadLines'
import Card from '../card/Card'
import { Swiper , SwiperSlide} from 'swiper/react';
import { Autoplay , Navigation , Scrollbar } from 'swiper/modules';
import { MdSwipeLeft, MdSwipeRight } from 'react-icons/md';


const MostSelling = () => {
    return (
        <section className='mostSelling'>
            <HeadLines title={"Most Selling Section"} subtitle={"Most Selling"}/>
            <Swiper
                // default slides width to each one:
                slidesPerView={1.3}
                spaceBetween={40}
                loop={"true"}
                autoplay={{ delay: 2500 }}
                modules={[Autoplay,Navigation,Scrollbar]}
                navigation={{
                    nextEl:".right-arrow",
                    prevEl:".left-arrow"
                }}

                scrollbar= {{
                    el:".swiper--progress"
                }}
                // Responsive section
                breakpoints={{
                        // 600 to up
                        600: {
                            slidesPerView:2.3
                        },
                        // 800 to up
                        800: {
                            slidesPerView:3.3
                        },
                        // 1024 to up
                        1440: {
                            slidesPerView:5
                        },
                    }
                }
            >
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card/>
                </SwiperSlide>
            </Swiper>

            <div className="swiper--option">
                <div className="swiper--progress"></div>
                
                <div className="swiper--arrows">
                    <div className="left-arrow arrow">
                        <MdSwipeLeft />
                    </div>
                    <div className="right-arrow arrow">
                        <MdSwipeRight />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MostSelling
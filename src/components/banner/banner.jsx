import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import {Pagination, Autoplay} from "swiper";

function Banner() {

    const params = {
        autoplay: {
            delay: 2200,
            disableOnInteraction: false
        },
        pagination: true,
        loop: true
    }

    return (
        <>
            <div className={"banner"}>
                <Swiper {...params} modules={[Pagination, Autoplay]} className="mySwiper">
                    <SwiperSlide><img src="https://images.uzum.uz/cggpeafg49devoabrdbg/main_page_banner.jpg"
                                      alt=""/></SwiperSlide>
                    <SwiperSlide><img src="https://images.uzum.uz/cghdvrjfkbipbv1u94ig/main_page_banner.jpg"
                                      alt=""/></SwiperSlide>
                    <SwiperSlide><img src="https://images.uzum.uz/cfv22hfhj8j9g698o2c0/main_page_banner.jpg"
                                      alt=""/></SwiperSlide>
                    <SwiperSlide><img src="https://images.uzum.uz/cg091pnhj8j9g698sra0/main_page_banner.jpg"
                                      alt=""/></SwiperSlide>
                </Swiper>
            </div>
            <div className="banner-mobile banner">
                <Swiper {...params} modules={[Pagination, Autoplay]} className="mySwiper">
                    <SwiperSlide><img src="https://images.uzum.uz/cge4egvhj8j9g69aolcg/main_page_banner.jpg"
                                      alt=""/></SwiperSlide>
                    <SwiperSlide><img src="https://images.uzum.uz/cghdvvvg49devoabuk40/main_page_banner.jpg"
                                      alt=""/></SwiperSlide>
                    <SwiperSlide><img src="https://images.uzum.uz/cggpejvg49devoabrdd0/main_page_banner.jpg"
                                      alt=""/></SwiperSlide>
                    <SwiperSlide><img src="https://images.uzum.uz/cg0921nhgiov1qidepjg/main_page_banner.jpg"
                                      alt=""/></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default Banner;
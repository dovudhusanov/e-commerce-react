import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {FreeMode, Navigation, Thumbs} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css"

// Initialize Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

function SliderSwiper({images}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [loading, setLoading] = useState(false)
    const [slidesPerView, setSlidesPerView] = useState(images.length / 2);

    React.useEffect(() => {
        if(images.length === 3) {
            setSlidesPerView(3)
        } else if (images.length === 2) {
            setSlidesPerView(2)
        } else if (images.length === 1) {
            setSlidesPerView(0)
        } else if(images.length > 8) {
            setSlidesPerView(4)
        }
        setLoading(true)
    }, [])
    return (
        <>
            {loading && (
                <>
                    <Swiper
                        style={{
                            "--swiper-navigation-size": "20px",
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    >
                        {images.map(item => (
                            <div key={item}>
                                <SwiperSlide>
                                    <img src={item.image} alt={item.id}/>
                                </SwiperSlide>
                            </div>
                        ))}
                    </Swiper>
                   <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={slidesPerView}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                       {images.length > 1  &&
                        <>
                            {images.map(item => (
                                <div key={item.id}>
                                    <SwiperSlide>
                                        <img src={item.image} alt={item.id} className="slider-img"/>
                                    </SwiperSlide>
                                </div>
                            ))}
                        </>
                       }
                    </Swiper>
                </>
            )}
        </>
    )
}

export default SliderSwiper

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { slides } from "../data/slides";

import 'swiper/css';
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCreative, Pagination, Navigation } from "swiper";

function Slider() {
    const pagination = {
        clickable: true,
    };

    return (
        <div className='hero'>
            <div className="hero__container">
                <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    pagination={pagination}
                    navigation={true}
                    clickable={true}
                    speed={800}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    modules={[EffectCreative, Pagination, Navigation]}
                    slidesPerView={1}
                >

                    {
                        slides.map((item) => (
                            <SwiperSlide key={item.id}>
                                <img src={item.image} alt="" />
                                <div className="hero-slider__text">
                                    <h1>{item.title}</h1>
                                    <p>{item.text}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Slider
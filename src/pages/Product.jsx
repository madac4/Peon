import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, EffectCreative } from "swiper";

import ProductSmall from '../components/ProductSmall'
import Breadcrumbs from '../components/Breadcrumbs'

import { productsSmall } from '../data/productsSmall';
import { images } from '../data/singleProduct';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";


function Product() {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

    return (
        <div className='product-page'>
            <div className="product-page__product page-product">
                <div className="page-product__container">
                    <Breadcrumbs></Breadcrumbs>

                    <div className="page-product__product product-info">
                        <div className="product-info__presentation">
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                // loop={true}
                                breakpoints={{
                                    768: {
                                        direction: "vertical"
                                    },
                                }}
                                spaceBetween={10}
                                slidesPerView={6}
                                watchSlidesProgress={true}
                                modules={[Thumbs]}
                                className="product-thumbs"
                            >
                                {images && images.map((image, i) => (
                                    <SwiperSlide key={i}>
                                        <img src={image.thumb} alt='' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Swiper
                                // loop={true}
                                effect={"creative"}
                                breakpoints={{
                                    768: {
                                        autoHeight: false
                                    },
                                }}
                                autoHeight={true}
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ["100%", 0, 0],
                                    },
                                }}
                                spaceBetween={10}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[Thumbs, EffectCreative]}
                                className="product-presentation"
                            >
                                {images && images.map((image, i) => (
                                    <SwiperSlide key={i}>
                                        <img src={image.thumb} alt='' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="product-info__information">
                            <h4>Căști Apple AirPods Max Silver</h4>
                            <div className="single-features">
                                <div className="single-features__rating">
                                    <span className="icon-star__filled"></span>
                                    <span className="icon-star__filled"></span>
                                    <span className="icon-star__filled"></span>
                                    <span className="icon-star__filled"></span>
                                    <span className="icon-star"></span>
                                    <small>1824</small>
                                </div>
                                <span className="in-stock">In stock</span>
                            </div>

                            <div className="single-price">
                                <h1>13999 MDL</h1>
                                <p>15999 MDL</p>
                            </div>

                            <div className="single-options single-options--color">
                                <h6>Culoarea</h6>

                                <div className="option">
                                    <a className='current' href="#0" style={{ backgroundColor: '#000' }}> </a>
                                    <a href="#0" style={{ backgroundColor: 'red' }}> </a>
                                    <a href="#0" style={{ backgroundColor: 'purple' }}> </a>
                                </div>
                            </div>

                            <div className="single-controls">
                                <button className="button add-cart">Adaugă în coș</button>
                                <button className="add-fav icon-favorite"></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section className='watched'>
                <div className="watched__container">
                    <h2>Ai privit</h2>
                    <div className="watched__body watched-body d-grid-6">
                        {
                            productsSmall.map(product => (
                                <ProductSmall product={product} key={product.id} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product




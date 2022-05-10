import React from 'react';
import { Thumbs, EffectCreative, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { publicRequest } from '../helpers/requestMethod';
import { addProduct } from '../redux/cart'

import ProductSmall from '../components/ProductSmall'
import ProductFull from '../components/ProductFull'
import Breadcrumbs from '../components/Breadcrumbs'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";


function Product() {
    const [relatedProducts, setRelatedProducts] = React.useState([]);
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const [product, setProduct] = React.useState({});
    const [color, setColor] = React.useState(null);
    const [size, setSize] = React.useState(null);
    let [count, setCount] = React.useState(1);
    const dispatch = useDispatch();
    const recent = useSelector(state => state.recent);


    const location = useLocation();
    const id = location.pathname.split('/')[2];

    const counter = (type) => {
        if (type === 'plus') {
            setCount(count + 1);
        } else if (type === 'minus' && count > 1) {
            setCount(count - 1);
        }
    }

    const handleColor = (color) => {
        setColor(color);
    }
    const handleSize = (size) => {
        setSize(size);
    }

    React.useEffect(() => {
        const getProduct = async () => {
            try {
                const current = await publicRequest.get(`/products/find/${id}`);
                const related = await publicRequest.get(`/products`);
                setRelatedProducts(related.data);
                setProduct(current.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();
    }, [id])

    const addToCart = () => {
        dispatch(addProduct({ ...product, count, color, size }))
    }

    return (
        <div className='product-page'>
            <div className="product-page__product page-product">
                <div className="page-product__container">
                    <Breadcrumbs></Breadcrumbs>

                    <div className="page-product__product product-main">
                        {product.images && product.images.length > 1 ?
                            <div className="product-main__presentation">
                                <Swiper
                                    onSwiper={setThumbsSwiper}
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
                                    {product.images && product.images.map(slide => (
                                        <SwiperSlide key={slide}>
                                            <img src={slide} alt='' />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <Swiper
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
                                    {product.images && product.images.map(slide => (
                                        <SwiperSlide key={slide}>
                                            <img src={slide} alt='' />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            :
                            <div className="product-main__image">
                                <img src={product.images} alt={product.name} />
                            </div>
                        }

                        <div className="product-main__information">
                            <h4>{product.name}</h4>
                            <div className="single-features">
                                {/* <div className="single-features__rating">
                                    <span className="icon-star__filled"></span>
                                    <span className="icon-star__filled"></span>
                                    <span className="icon-star__filled"></span>
                                    <span className="icon-star__filled"></span>
                                    <span className="icon-star"></span>
                                    <small>1824</small>
                                </div> */}
                                <span className={product.inStock ? 'in-stock' : 'out-stock'}>{product.inStock ? 'În stock' : 'Nu e în stock'}</span>
                            </div>

                            <div className="single-price">
                                <h1>{product.price} MDL</h1>
                                {product.oldPrice && <p>{product.oldPrice} MDL</p>}
                            </div>

                            <div className="product-control__count single">
                                <button onClick={() => counter('minus')} className="icon-minus"></button>
                                {count}
                                <button onClick={() => counter('plus')} className="icon-add"></button>
                            </div>

                            {product.colors?.length > 0 &&
                                <div className="single-options single-options--color">
                                    <h6>Culoarea</h6>

                                    <div className="option">
                                        {product.colors.map((c) => (
                                            <button type='button' className={color === c ? 'current' : ''} onClick={() => handleColor(c)} key={c} style={{ backgroundColor: [c] }}> </button>
                                        ))}
                                    </div>
                                </div>
                            }

                            {product.sizes?.length > 0 &&
                                <div className="single-options single-options--size">
                                    <h6>Mărimi</h6>

                                    <div className="option">
                                        {product.sizes.map((s) => (
                                            <button type='button' className={size === s ? 'current' : ''} onClick={() => handleSize(s)} key={s}>{s}</button>
                                        ))}
                                    </div>
                                </div>
                            }

                            <div className="single-controls">
                                <button onClick={addToCart} className="button add-cart" disabled={!product.inStock}>{product.inStock ? 'Adaugă în coș' : 'Nu e în stock'}</button>
                                <button className="add-fav icon-favorite"></button>
                            </div>
                        </div>

                    </div>
                    <div className="product-main__description product-section">
                        <h5>Descriere</h5>
                        <p className="big">{product.description}</p>
                    </div>

                    <div className="product-main__related product-section">
                        <h5>Produse asemanatoare</h5>
                        <Swiper
                            spaceBetween={20}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1
                                },
                                530: {
                                    slidesPerView: 2
                                },
                                840: {
                                    slidesPerView: 3
                                },
                                1120: {
                                    slidesPerView: 4
                                },
                            }}
                            watchSlidesProgress={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="product-related"
                        >
                            {
                                console.log(product.categories)
                                // relatedProducts.map((product, i) => (
                                //     <SwiperSlide key={`${product.id}_${i}`}>
                                //         <ProductFull product={product} />
                                //     </SwiperSlide>
                                // ))
                            }
                        </Swiper>
                    </div>

                    {/* <div className="product-main__comments product-section">
                        <h5>Recenzii</h5>
                        
                    </div> */}
                </div>
            </div>

            {
                recent.products &&
                <section className='watched'>
                    <div className="watched__container">
                        <h2>Ai privit</h2>
                        <div className="watched__body watched-body d-grid-6">
                            {
                                recent.products.map(product => (
                                    <ProductSmall product={product} key={product._id} />
                                ))
                            }
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}

export default Product




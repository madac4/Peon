import React from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux'

import Slider from '../components/Slider'
import Category from '../components/Category'
import OfferBanner from '../components/OfferBanner';
import ProductFull from '../components/ProductFull'
import ProductSmall from '../components/ProductSmall'
import Brand from '../components/Brand'

import { categories } from '../data/categories'
import { brands } from '../data/brands';

function Home() {
    const [products, setProducts] = React.useState([]);
    const recent = useSelector(state => state.recent);

    React.useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/products');
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [])
    return (
        <div className='homepage'>
            <Slider></Slider>

            <OfferBanner offerText={"Самые большые скидки до конца недели!"} />

            <div className='product-list'>
                <div className="product-list__container">
                    <div className="product-list__body d-grid-5">
                        {products.slice(0, 5).map(product => (
                            <ProductFull key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

            <section className='category'>
                <div className="category__container">
                    <h2>Top Categorii</h2>
                    <div className="category__body category-body d-grid-4">
                        {categories.slice(0, 4).map(category => (
                            <Category category={category} key={category.id} />
                        ))}
                    </div>
                </div>
            </section>

            <section className='top-products'>
                <div className="top-products__container">
                    <h2>Top Produse</h2>

                    <div className="top-products__body">
                        <div className='product-list'>
                            <div className="product-list__container">
                                <div className="product-list__body d-grid-5">
                                    {products.slice(0, 5).map(product => (
                                        <ProductFull key={product._id} product={product} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='brands'>
                <div className="brands__container">
                    <h2>Top Brands</h2>
                    <div className="brands__body brands-body masonry">
                        {brands.slice(0, 5).map((brand) => (
                            <Brand brand={brand} key={brand.id} />
                        ))}
                    </div>
                </div>
            </section>

            {
                recent.products.length > 0 &&
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

export default Home
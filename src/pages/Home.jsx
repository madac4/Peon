import React from 'react';

import Slider from '../components/Slider'
import Category from '../components/Category'
import OfferBanner from '../components/OfferBanner';
import ProductFull from '../components/ProductFull'
import ProductSmall from '../components/ProductSmall'
import Brand from '../components/Brand'

import { categories } from '../data/categories'
import { productsSmall } from '../data/productsSmall'
import { products } from '../data/products'
import { brands } from '../data/brands';

function Home() {
    return (
        <div className='homepage'>
            <Slider></Slider>

            <OfferBanner offerText={"Самые большые скидки до конца недели!"} />

            <div className='product-list'>
                <div className="product-list__container">
                    <div className="product-list__body d-grid-5">
                        {products.map(product => (
                            <ProductFull key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

            <section className='category'>
                <div className="category__container">
                    <h2>Top Categorii</h2>
                    <div className="category__body category-body d-grid-4">
                        {categories.map(category => (
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
                                    {products.map(product => (
                                        <ProductFull key={product.id} product={product} />
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
                        {brands.map((brand) => (
                            <Brand brand={brand} key={brand.id} />
                        ))}
                    </div>
                </div>
            </section>

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

export default Home
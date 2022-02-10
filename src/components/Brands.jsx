import React from 'react';
import Brand from './Brand'
import { brands } from '../data/brands';

function Brands() {
    return (
        <section className='brands'>
            <div className="brands__container">
                <h2>Top Brands</h2>
                <div className="brands__body brands-body masonry">
                    {brands.map((brand) => (
                        <Brand brand={brand}></Brand>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Brands
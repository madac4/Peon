import React from 'react';
import ProductList from './ProductList'

function TopProducts() {
    return (
        <section className='top-products'>
            <div className="top-products__container">
                <h2>Top Produse</h2>

                <div className="top-products__body">
                    <ProductList></ProductList>
                </div>
            </div>
        </section>
    )
}

export default TopProducts
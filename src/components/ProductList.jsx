import React from 'react';
import ProductFull from './ProductFull';
import { products } from '../data/products'

function ProductList() {
    return (
        <div className='product-list'>
            <div className="product-list__container">
                <div className="product-list__body d-grid-5">
                    {products.map(product => (
                        <ProductFull key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList
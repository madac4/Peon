import React from 'react';
import ProductFull from './ProductFull';
import { products } from '../data/products';

function ProductGrid() {
    return (
        <div className='product-grid'>
            {products.map(product => (
                <ProductFull key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductGrid
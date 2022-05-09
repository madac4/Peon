import React from 'react';
import { Link } from 'react-router-dom'

function ProductSmall({ product }) {
    return (
        <div className='product product-small'>
            <div className="product-image">
                <img src={product.images} alt={product.name} />
            </div>
            <div className="product-small__meta product-meta">
                <div className="product-meta__price">
                    {product.price && <h6 className='price'>{product.price} MDL</h6> }
                    {product.oldPrice && <span className="old-price">{product.oldPrice} MDL</span> }
                </div>
                <div className="discount">-10%</div>
            </div>

            <div className="product-small__info product-info">
                <Link to='/category' className="product-info__brand">{product.brand.charAt(0).toUpperCase() + product.brand.slice(1)}</Link>
                <Link to={`/product/${product._id}`} className="product-info__name big">{product.name}</Link>
            </div>

        </div>
    )
}

export default ProductSmall
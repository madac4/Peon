import React from 'react';

function ProductSmall({ product }) {
    return (
        <div className='product product-small'>
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-small__meta product-meta">
                <div className="product-meta__price">
                    <h6 className='price'>2699 MDL</h6>
                    <span className="old-price">2999 MDL</span>
                </div>
                <div className="discount">-10%</div>
            </div>

            <div className="product-small__info product-info">
                <a href='/' className="product-info__brand">{product.brand}</a>
                <a href='/' className="product-info__name big">{product.name}</a>
            </div>

        </div>
    )
}

export default ProductSmall
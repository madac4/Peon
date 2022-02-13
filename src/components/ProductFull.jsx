import React from 'react'

function ProductFull({ product }) {
    let rating = []
    for (let i = 0; i < product.rating; i++) {
        rating.push(<span key={i} className="icon-star__filled"></span>)
    }

    return (
        <div className='product product-big'>
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-big__meta product-meta">
                <div className="product-meta__price">
                    <h6 className='price'>{product.price ? product.price + " MDL" : ''}</h6>
                    <span className="old-price">{product.sellerPrice ? product.sellerPrice + " MDL" : ''}</span>
                </div>
                <div className="discount">-10%</div>
            </div>

            <div className="product-big__info product-info">
                <a href='/' className="product-info__brand">{product.brand}</a>
                <a href='/' className="product-info__name big">{product.name}</a>
            </div>

            <div className="product-review">
                {rating}
                <small>1824</small>
            </div>

            <div className="product__controls product-controls">
                <button className="product-controls__add button">Adaugă în coș</button>

                <button className="product-controls__fav icon-favorite added"></button>
            </div>
        </div>
    )
}

export default ProductFull
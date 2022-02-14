import React from 'react';
import ProductGrid from '../components/ProductGrid'

function Favorite() {
    return (
        <div className='favorite-page'>
            <div className="favorite-page__container">
                <div className="favorite-page__header">
                    <h2>Favorite</h2>
                    <p>5 produse</p>
                </div>
                <div className="favorite-page__body">
                    <ProductGrid></ProductGrid>
                </div>
            </div>
        </div>
    )
}

export default Favorite
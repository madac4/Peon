import React from 'react';
import ProductGrid from '../components/ProductGrid';
// import empty from '../assets//img/fav-empty.svg'

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
                {/* <div className="favorite-page__header">
                    <h2>В избранном пока ничего нет</h2>
                </div>
                <div className="favorite-page__body fav-empty">
                    <img src={empty} alt="" />
                    <h6>Добавляйте товары в избранное из каталога и карточки товара, чтобы они всегда были под рукой</h6>
                </div> */}
            </div>
        </div>
    )
}

export default Favorite
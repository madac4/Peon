import React from 'react';
import { useSelector } from 'react-redux'
import ProductFull from '../components/ProductFull';
import empty from '../assets//img/fav-empty.svg'

function Favorite() {
    const favoriteProducts = useSelector(state => state.favorite.products);

    return (
        <div className='favorite-page'>
            {favoriteProducts.length > 0 ?
                <div className="favorite-page__container">
                    <div className="favorite-page__header">
                        <h2>Favorite</h2>
                        <p>
                            {favoriteProducts.length}{favoriteProducts.length === 1 ? ' produs' : ' produse'}
                        </p>
                    </div>
                    <div className="favorite-page__body">
                        {favoriteProducts && favoriteProducts.map(product => (
                            <ProductFull key={product._id} product={product} isAdded={true} />
                        ))}
                    </div>
                </div>
                :
                <div className="favorite-page__container">
                    <div className="favorite-page__header">
                        <h2>В избранном пока ничего нет</h2>
                    </div>
                    <div className="favorite-page__body fav-empty">
                        <img src={empty} alt="" />
                        <h6>Добавляйте товары в избранное из каталога и карточки товара, чтобы они всегда были под рукой</h6>
                    </div>
                </div>
            }
        </div>
    )
}

export default Favorite
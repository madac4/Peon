import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { addProduct } from '../redux/cart'
import { viewProduct } from '../redux/views'
import { addToFav, removeFromFav } from '../redux/favorite'

function ProductFull({ product, isAdded }) {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorite);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const addToCart = (product) => {
        const count = 1;
        dispatch(addProduct({ ...product,count }))
    }

    const addToRecent = (product) =>{
        dispatch(viewProduct(product))
    }

    React.useEffect(() => {
        if (favorites.products.some(item => product._id === item._id)) {
            setIsFavorite(true);
        }
    }, [favorites.products, product])
    

    const addFav = (product) => {
        if (!favorites.products.some(item => product._id === item._id)) {
            dispatch(addToFav({ ...product}))
            setIsFavorite(true);
        }else{
            dispatch(removeFromFav(product));
            setIsFavorite(false)
        }
    }


    return (
        <div className='product product-big'>
            <div className="product-image">
                <img src={product.images} alt={product.name} />
            </div>
            <div className="product-big__meta product-meta">
                <div className="product-meta__price">
                    <h6 className='price'>{product.price ? product.price + " MDL" : ''}</h6>
                    <span className="old-price">{product.oldPrice ? product.oldPrice + " MDL" : ''}</span>
                </div>
                <div className="discount">-10%</div>
            </div>

            {/* <div className="product-review">
                {rating}
                <small>1824</small>
            </div> */}

            <div className="product-big__info product-info">
                <Link to='/category' className="product-info__brand">{product.brand.charAt(0).toUpperCase() + product.brand.slice(1)}</Link>
                <Link to={`/product/${product._id}`} onClick={() => addToRecent(product)} className="product-info__name big">{product.name}</Link>
            </div>

            <div className="product__controls product-controls">
                <button onClick={() => addToCart(product)} disabled={!product.inStock ? true : false} className="product-controls__add button">Adaugă în coș</button>
                <button onClick={() => addFav(product)} className={isFavorite || isAdded ? 'product-controls__fav icon-favorite added' : 'product-controls__fav icon-favorite'}></button>
            </div>
        </div>
    )
}

export default ProductFull
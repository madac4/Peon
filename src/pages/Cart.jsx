import React from 'react'
// import empty from '../assets//img/cart-empty.svg'
import Delivery from '../components/Delivery'

function Cart() {
    return (
        <div className='cart-page'>
            <div className="cart-page__container">
                <div className="cart-page__header">
                    <h2>Cosul de produse</h2>
                    <p>3 produse</p>
                </div>
                <div className="cart-page__body">
                    <div className="cart-page__content cart-content">
                        <div className="cart-content__products">
                            <div className="cart-product">
                                <div className="cart-product__detail product-detail">
                                    <img src="https://images.unsplash.com/photo-1636612680772-59425356da80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" alt="" />
                                    <div className="product-detail__text">
                                        <h6>Căști Apple AirPods Max Silver</h6>
                                        <p>Silver/Fara fir</p>

                                        <div className="product-detail__price">
                                            <h6>13999 MDL</h6>
                                            <p>15999 MDL</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-product__controls product-control">
                                    <div className="product-control__count">
                                        <button className="icon-minus"></button>
                                        1
                                        <button className="icon-add"></button>
                                    </div>
                                    <button className="icon-delete product-control__delete"></button>
                                </div>
                            </div>
                            <div className="cart-product">
                                <div className="cart-product__detail product-detail">
                                    <img src="https://images.unsplash.com/photo-1636612680772-59425356da80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" alt="" />
                                    <div className="product-detail__text">
                                        <h6>Căști Apple AirPods Max Silver</h6>
                                        <p>Silver/Fara fir</p>

                                        <div className="product-detail__price">
                                            <h6>13999 MDL</h6>
                                            <p>15999 MDL</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-product__controls product-control">
                                    <div className="product-control__count">
                                        <button className="icon-minus"></button>
                                        1
                                        <button className="icon-add"></button>
                                    </div>
                                    <button className="icon-delete product-control__delete"></button>
                                </div>
                            </div>
                            <div className="cart-product">
                                <div className="cart-product__detail product-detail">
                                    <img src="https://images.unsplash.com/photo-1636612680772-59425356da80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" alt="" />
                                    <div className="product-detail__text">
                                        <h6>Căști Apple AirPods Max Silver</h6>
                                        <p>Silver/Fara fir</p>

                                        <div className="product-detail__price">
                                            <h6>13999 MDL</h6>
                                            <p>15999 MDL</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-product__controls product-control">
                                    <div className="product-control__count">
                                        <button className="icon-minus"></button>
                                        1
                                        <button className="icon-add"></button>
                                    </div>
                                    <button className="icon-delete product-control__delete"></button>
                                </div>
                            </div>
                        </div>

                        <div className="cart-content__delivery">
                            <h3>Livrarea</h3>
                            <Delivery></Delivery>
                        </div>

                        <div className="cart-content__payment">

                        </div>
                    </div>
                    <aside className="cart-page__checkout cart-checkout">
                        <div className="cart-checkout__header">
                            <h4>Prețul total:</h4>
                            <h4>13000 MDL</h4>
                        </div>
                        <ul className="cart-checkout__info">
                            <li>3 produse:<span>13999 MDL</span></li>
                            <li>Livrarea:<span>0 MDL</span></li>
                            <li>Reducere:<span>999 MDL</span></li>
                        </ul>
                        <div className="cart-checkout__payment">
                            <p><strong>Achitarea</strong></p>
                            <p>Introduceti datele cardului</p>
                        </div>
                        <button type='submit' form='order-info' className="button cart-checkout__checkout">Trimite comanda</button>
                        <p className='cart-checkout__disclaimer'>Оформляя заказ, вы подтверждаете, что вам больше 18 лет и соглашаетесь c <a href="#0">правилами пользования торговой площадкой и правилами продажи товаров</a></p>
                    </aside>
                </div>
                {/* <div className="cart-page__header">
                    <h2>В корзине пока ничего нет</h2>
                </div>
                <div className="cart-page__body cart-empty">
                    <img src={empty} alt="" />
                    <h6>Добавляйте товары в избранное из каталога и карточки товара, чтобы они всегда были под рукой</h6>
                </div> */}
            </div>
        </div>
    )
}

export default Cart
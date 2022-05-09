import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import empty from '../assets//img/cart-empty.svg'
import Delivery from '../components/Delivery';
import CheckoutForm from "../components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {removeFromCart, decreaseCount, increaseCount} from '../redux/cart'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);

function Cart() {
    const cart = useSelector(state => state.cart);
    const [clientSecret, setClientSecret] = React.useState("");
    const dispatch = useDispatch();

    const removeItem = (product) => {
        if (window.confirm(`Sunteți siguri că doriți să ștergeți ${product.name} din coș?`)) {
            dispatch(removeFromCart(product));
        }
    }

    const decrease = (product) =>{
        dispatch(decreaseCount(product));
    }
    const increase = (product) =>{
        dispatch(increaseCount(product));
    }

    React.useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        const makeRequest = async () => {
            await fetch("http://localhost:8000/api/checkout/payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ totalPrice: cart.totalPrice * 100 }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
        cart.totalPrice && makeRequest()
    }, [cart.totalPrice]);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className='cart-page'>
            {cart.products?.length > 0 ?
                <div className="cart-page__container">
                    <div className="cart-page__header">
                        <h2>Cosul de produse</h2>
                        <p>{cart.quantity}{cart.quantity === 1 ? ' produs' : ' produse'}</p>
                    </div>
                    <div className="cart-page__body">
                        <div className="cart-page__content cart-content">
                            <div className="cart-content__products">

                                {cart.products?.map(product => (
                                    <div key={product._id} className="cart-product">
                                        <div className="cart-product__detail product-detail">
                                            <img src={product.images[0]} alt="" />
                                            <div className="product-detail__text">
                                                <h6>{product.name}</h6>
                                                <p>
                                                    {product.color && 'Culoarea:'}{product.color && <span style={{ backgroundColor: product.color }}></span>}
                                                    {product.size && product.color && ' / '}
                                                    {product.size && 'Mărimea: '}{product.size}
                                                </p>

                                                <div className="product-detail__price">
                                                    <h6>{product.price * product.count} MDL</h6>
                                                    {product.oldPrice ? <p>{product.oldPrice} MDL</p> : ''}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-product__controls product-control">
                                            <div className="product-control__count">
                                                <button className="icon-minus" onClick={() => decrease(product)}></button>
                                                {product.count}
                                                <button className="icon-add" onClick={() => increase(product)}></button>
                                            </div>
                                            <button onClick={() => removeItem(product)} className="icon-delete product-control__delete"></button>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            <div className="cart-content__delivery">
                                <h3>Livrarea</h3>
                                <Delivery></Delivery>
                            </div>

                            <div className="cart-content__payment">
                                <h3>Achitarea</h3>
                                {clientSecret && (
                                    <Elements options={options} stripe={stripePromise}>
                                        <CheckoutForm />
                                    </Elements>
                                )}
                            </div>
                        </div>
                        <aside className="cart-page__checkout cart-checkout">
                            <div className="cart-checkout__header">
                                <h4>Prețul total:</h4>
                                <h4>{cart.totalPrice} MDL</h4>
                            </div>
                            <ul className="cart-checkout__info">
                                <li>{cart.quantity} produse:<span>{cart.totalPrice} MDL</span></li>
                                <li>Livrarea:<span>0 MDL</span></li>
                                {/* <li>Reducere:<span>999 MDL</span></li> */}
                            </ul>
                            <div className="cart-checkout__payment">
                                <p><strong>Achitarea</strong></p>
                                <p>Introduceti datele cardului</p>
                            </div>
                            <button className="button cart-checkout__checkout">Trimite comanda</button>
                            <p className='cart-checkout__disclaimer'>Оформляя заказ, вы подтверждаете, что вам больше 18 лет и соглашаетесь c <a href="#0">правилами пользования торговой площадкой и правилами продажи товаров</a></p>
                        </aside>
                    </div>
                </div> :
                <div className="cart-page__container">
                    <div className="cart-page__header">
                        <h2>В корзине пока ничего нет</h2>
                    </div>
                    <div className="cart-page__body cart-empty">
                        <img src={empty} alt="" />
                        <h6>Добавляйте товары в избранное из каталога и карточки товара, чтобы они всегда были под рукой</h6>
                    </div>
                </div>
            }

        </div>
    )
}

export default Cart
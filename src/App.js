import React from 'react'
import { Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'

import './assets/scss/style.scss';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import { loadUser } from './redux/api';
import { store } from './redux/store';

import Home from './pages/Home'
import Cart from './pages/Cart'
import Favorite from './pages/Favorite'
import Category from './pages/Category';
import Brand from './pages/Brand';
import Search from './pages/Search';
import Product from './pages/Product';
import Success from './pages/Success';
import Reset from './pages/Auth/Reset';
import Register from './pages/Auth/Register';
import Profile from './pages/Profile';


function App() {
    React.useEffect(() => {
        store.dispatch(loadUser())
    }, [])
    
    return (
        <div className='wrapper'>
            <ToastContainer>
            </ToastContainer>
            <Header></Header>
                <main>
                    <ScrollToTop>
                        <Routes>
                            <Route element={<Home />} path="/" exact />
                            <Route element={<Cart />} path="/cart" exact />
                            <Route element={<Favorite />} path="/favorite" exact />
                            <Route element={<Category />} path="/products/:category" exact />
                            <Route element={<Brand />} path="/brands/:brand" exact />
                            <Route element={<Search />} path="/search" exact />
                            <Route element={<Success />} path="/success" exact />
                            <Route element={<Profile />} path="/profile/user" exact />
                            <Route element={<Register />} path="/authentication" exact />
                            <Route element={<Reset />} path="/reset-password" exact />
                            <Route element={<Product />} path="/product/:id" exact />
                        </Routes>
                    </ScrollToTop>
                </main>
                <Footer></Footer>
        </div>
    );
}

export default App;

import './assets/scss/style.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Favorite from './pages/Favorite'
import Category from './pages/Category';
import Search from './pages/Search';
import Product from './pages/Product';

function App() {
    return (
        <div className='wrapper'>
            <Header></Header>
            <main>
                <ScrollToTop>
                    <Routes>
                        <Route element={<Home />} path="/" exact />
                        <Route element={<Cart />} path="/cart" exact />
                        <Route element={<Favorite />} path="/favorite" exact />
                        <Route element={<Category />} path="/category" exact />
                        <Route element={<Search />} path="/search" exact />
                        <Route element={<Product />} path="/product" exact />
                    </Routes>
                </ScrollToTop>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;

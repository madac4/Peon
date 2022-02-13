import './assets/scss/style.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Favorite from './pages/Favorite'
import Category from './pages/Category';
function App() {
    return (
        <div className='wrapper'>
            <Header></Header>
            <main>
                <Routes>
                    <Route element={<Home />} path="/" exact />
                    <Route element={<Cart />} path="/cart" exact />
                    <Route element={<Favorite />} path="/favorite" exact />
                    <Route element={<Category />} path="/category" exact />
                </Routes>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;

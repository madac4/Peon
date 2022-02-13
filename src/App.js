import './assets/scss/style.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
function App() {
    return (
        <div className='wrapper'>
            <Header></Header>
            <main>
                <Home></Home>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;

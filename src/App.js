import './assets/scss/style.scss';
import Header from './components/Header'
import Home from './pages/Home'
function App() {
    return (
        <div className='wrapper'>
            <Header></Header>
            <main>
                <Home></Home>
            </main>
        </div>
    );
}

export default App;

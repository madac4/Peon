import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Menu from './Menu'

import logo from '../assets/img/logo.svg';
import logoMobile from '../assets/img/logo-mobile.svg';

function Header() {
    const [open, setOpen] = React.useState(false);
    const [search, setsearch] = React.useState('');
    const overlayRef = React.useRef();
    const cartQuantity = useSelector(state => state.cart.quantity);
    const favQuantity = useSelector(state => state.favorite.products);

    const handleChange = e => {
        setsearch(e.target.value);
      };

    const toggleMenu = () => {
        setOpen(!open);
    };

    const toggleModal = () => {
    };

    const outsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (path.includes(overlayRef.current)) {
            setOpen(false);
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', outsideClick);
    });

    return (
        <header className="header">
            <div className="header__upper upper-header">
                <div className="upper-header__container">
                    <nav className="upper-header__nav">
                        <a className="big medium" href="/">Livrare</a>
                        <a className="big medium" href="/">Contacte</a>
                        <a className="big medium" href="/">Garantie</a>
                        <a className="big medium" href="/">Despre Noi</a>
                        <a className="big medium" href="/">Achitare</a>
                    </nav>
                    <div className="upper-header__profile header-profile">
                        {/* {user.currentUser ?
                            <Link to="/" className="header-profile__auth" onClick={toggleModal}>
                                <span className="icon-profile"></span>
                                <p className="big">{user.currentUser.username}</p>
                            </Link>
                            :
                        } */}
                        <Link to={'/login'} className="header-profile__auth" onClick={toggleModal}>
                            <span className="icon-profile"></span>
                            <p className="big">Intra in cont</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="header__lower lower-header">
                <div className="lower-header__container">
                    <button type="button" className={open ? 'burger active' : 'burger'} onClick={toggleMenu}>
                        <span></span>
                    </button>

                    <Menu isOpen={open}></Menu>

                    <div className="lower-header__logo">
                        <Link to='/' className="desk-logo">
                            <img src={logo} alt="" />
                        </Link>
                        <Link to='/' className="mobile-logo">
                            <img src={logoMobile} alt="" />
                        </Link>
                    </div>

                    <div className="lower-header__search header-search">
                        <form action="#" className="header-search__form">
                            <input onChange={handleChange} value={search} placeholder="Search..." type="text"></input>
                            <button className="icon-search"></button>
                        </form>

                        {/* <div className="header-search__results">
                            <ul>
                                <li>

                                </li>
                            </ul>
                        </div> */}
                    </div>

                    <div className="lower-header__buttons header-buttons">
                        <Link to="/cart" className="header-buttons__cart header-button">
                            <span className="icon-cart"></span>
                            <sub className={cartQuantity > 0 ? 'active' : ''}>{cartQuantity}</sub>
                        </Link>
                        <Link to="/favorite" className="header-buttons__favorites header-button">
                            <span className="icon-favorite"></span>
                            <sub className={favQuantity.length > 0 ? 'active' : ''}>{favQuantity.length}</sub>
                        </Link>
                        <a href="/" className="header-buttons__profile header-button">
                            <span className="icon-profile"></span>
                        </a>
                    </div>
                </div>
            </div>

            <div ref={overlayRef} className={open ? 'overlay open' : 'overlay'}></div>
        </header>
    );
}

export default Header;
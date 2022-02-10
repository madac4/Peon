import React from 'react'
import logo from '../assets/img/logo.svg';
import logoMobile from '../assets/img/logo-mobile.svg';

function Header() {
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
                        <button type="button" className="header-profile__auth">
                            <span className="icon-profile"></span>
                            <p className="big">Intra in cont</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="header__lower lower-header">
                <div className="lower-header__container">
                    <button type="button" className="burger">
                        <span></span>
                    </button>

                    <div className="lower-header__logo">
                        <a className="desk-logo" href="/">
                            <img src={logo} alt=""></img>
                        </a>
                        <a className="mobile-logo" href="/">
                            <img src={logoMobile} alt=""></img>
                            {/* <img src="@img/logo-mobile.svg" alt=""> */}
                        </a>
                    </div>

                    <div className="lower-header__search header-search">
                        <form action="#" className="header-search__form">
                            <input placeholder="Search..." type="text"></input>
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
                        <a href="/" className="header-buttons__cart header-button">
                            <span className="icon-cart"></span>
                            <sub>3</sub>
                        </a>
                        <a href="/" className="header-buttons__favorites header-button">
                            <span className="icon-favorite"></span>
                            <sub>3</sub>
                        </a>
                        <a href="/" className="header-buttons__profile header-button">
                            <span className="icon-profile"></span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
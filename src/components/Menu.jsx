import React from 'react';
import car from '../assets/img/car.svg';
import { CSSTransition } from 'react-transition-group'

function Menu({ isOpen }) {
    const [activeMenu, setActiveMenu] = React.useState('main');

    function MenuItem({ name, icon, chevron, back, goToMenu, }) {
        return (
            <li
                onClick={() => { goToMenu && setActiveMenu(goToMenu) }}
                className='big'
            >
                <a href="#">
                    {back ? <span className='icon-chevron__left'></span> : ''} {icon ? <img src={icon} alt="#" /> : ''} {name} {chevron ? <span className='icon-chevron__right'></span> : ''}
                </a>
            </li>
        )
    }

    return (
        // className={isOpen ? 'lower-header__nav active' : 'lower-header__nav'}
        <nav className={isOpen ? 'lower-header__nav active' : 'lower-header__nav'}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={200}
                classNames='menu-primary'
            >
                <ul className='menu'>
                    <MenuItem goToMenu={'produse-auto'} name={'Produse Auto'} icon={car} chevron></MenuItem>
                    <MenuItem goToMenu={'for-kids'} name={'Pentru Copii'} icon={car} chevron></MenuItem>
                </ul>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'produse-auto'}
                unmountOnExit
                timeout={200}
                classNames='menu-secondary'
            >
                <ul className='menu'>
                    <MenuItem back goToMenu={'main'} name={'Produse Auto'}></MenuItem>
                    <MenuItem name={'Faruri'}></MenuItem>
                    <MenuItem name={'Anvelope'}></MenuItem>
                    <MenuItem name={'Baterii Auto'}></MenuItem>
                </ul>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'for-kids'}
                unmountOnExit
                timeout={200}
                classNames='menu-secondary'
            >
                <ul className='menu'>
                    <MenuItem back goToMenu={'main'} name={'Pentru Copii'}></MenuItem>
                    <MenuItem name={'Jucarii'}></MenuItem>
                    <MenuItem name={'Haine'}></MenuItem>
                </ul>
            </CSSTransition>
        </nav>
    )
}



export default Menu
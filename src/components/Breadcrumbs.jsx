import React from 'react';
import { Link } from 'react-router-dom'

function Breadcrumbs() {
    return (
        <nav className='breadcrumbs'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Электроника</Link></li>
                <li className='current'><Link to='/'>Гарнитуры и наушники</Link></li>
            </ul>
        </nav>
    )
}

export default Breadcrumbs
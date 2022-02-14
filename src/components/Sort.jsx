import React from 'react'

function Sort() {
    return (
        <div className='sort'>
            <span className="sort__title">Sortează după:</span>
            <ul className="sort__list">
                <li>
                    <button className='sort-button sort-button--active'>Populare</button>
                </li>
                <li>
                    <button className='sort-button'>Produse noi</button>
                </li>
                <li>
                    <button className='sort-button'>Reducere</button>
                </li>
                <li>
                    <button className='sort-button'>Rating</button>
                </li>
                <li>
                    <button className='sort-button'>Pret desc.</button>
                </li>
                <li>
                    <button className='sort-button'>Pret cersc.</button>
                </li>
            </ul>
            <p className="sort__result"><span>320</span>produse</p>
        </div>
    )
}

export default Sort
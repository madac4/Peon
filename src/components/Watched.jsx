import React from 'react'
import ProductSmall from './ProductSmall'
import { productsSmall } from '../data/productsSmall'

function Watched() {
    return (
        <section className='watched'>
            <div className="watched__container">
                <h2>Ai privit</h2>
                <div className="watched__body watched-body d-grid-6">
                    {
                        productsSmall.map(product => (
                            <ProductSmall product={product} key={product.id} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Watched
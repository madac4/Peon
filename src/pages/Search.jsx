import React from 'react';
import Pagination from '../components/Pagination';
import ProductGrid from '../components/ProductGrid'

function Search() {
    return (
        <div className='search-results'>
            <div className="search-results__container">
                <div className="search-results__header">
                    <h1>Rezultatele căutării</h1>
                    <p className='search-results__info'>Pentru cuvintul “samsung” au fost gasite 1356 rezultate.</p>
                </div>

                <ProductGrid></ProductGrid>
                <Pagination></Pagination>
            </div>

        </div>
    )
}

export default Search
import React from 'react';
import PageTitle from '../components/PageTitle'
import Filters from '../components/Filters'
import Sort from '../components/Sort'
import Pagination from '../components/Pagination'
import ProductGrid from '../components/ProductGrid'

function Category() {
    return (
        <div className='category-page'>
            <PageTitle title={'Гарнитуры и наушники'} />

            <div className="category-page__container">
                <div className="category-page__body">
                    <Filters></Filters>

                    <div className="category-page__products">
                        <Sort></Sort>
                        <ProductGrid></ProductGrid>
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
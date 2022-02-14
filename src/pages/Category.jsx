import React from 'react';
import PageTitle from '../components/PageTitle'
import Filters from '../components/Filters'
import Sort from '../components/Sort'
import Pagination from '../components/Pagination'
import ProductGrid from '../components/ProductGrid'

const sortOptions = [
    { name: 'Populare', type: 'popular', order: 'desc' },
    { name: 'Produse Noi', type: 'new', order: 'desc' },
    { name: 'Reducere', type: 'discount', order: 'desc' },
    { name: 'Rating', type: 'rating', order: 'desc' },
    { name: 'Pret desc.', type: 'price', order: 'desc' },
    { name: 'Pret cresc.', type: 'price-low', order: 'asc' },
]

function Category() {
    return (
        <div className='category-page'>
            <PageTitle title={'Гарнитуры и наушники'} />

            <div className="category-page__container">
                <div className="category-page__body">
                    <Filters></Filters>

                    <div className="category-page__products">
                        <Sort
                            options={sortOptions}
                        />
                        <ProductGrid></ProductGrid>
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
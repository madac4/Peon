import React from 'react';
import SingleCategory from './SingleCategory';
import { categories } from '../data/categories';

function Category() {
    return (
        <section className='category'>
            <div className="category__container">
                <h2>Top Categorii</h2>
                <div className="category__body category-body">
                    {
                        categories.map((category => (
                            <SingleCategory category={category} />
                        )))
                    }
                </div>
            </div>
        </section>
    )
}

export default Category
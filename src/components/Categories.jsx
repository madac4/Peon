import React from 'react';
import Category from './Category';
import { categories } from '../data/categories';

function Categories() {
    return (
        <section className='category'>
            <div className="category__container">
                <h2>Top Categorii</h2>
                <div className="category__body category-body">
                    {
                        categories.map((category => (
                            <Category category={category} />
                        )))
                    }
                </div>
            </div>
        </section>
    )
}

export default Categories
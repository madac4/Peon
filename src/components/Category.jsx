import React from 'react'
import { Link } from 'react-router-dom'

function Category({ category }) {
    return (
        <Link to={`/products/${category.slug}`} className='category-body__category' style={{ background: `url("${category.image}") 50% 50% / cover no-repeat` }}>
            <h3>{category.name}</h3>
        </Link>
    )
}

export default Category
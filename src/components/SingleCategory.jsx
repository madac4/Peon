import React from 'react'

function SingleCategory({ category }) {
    return (
        <a href='/' key={category.id} className='category-body__category' style={{ background: `url("${category.image}") 50% 50% / cover no-repeat` }}>
            <h3>{category.name}</h3>
        </a>
    )
}

export default SingleCategory
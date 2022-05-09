import React from 'react';
import { Link } from 'react-router-dom'

function Brand({ brand }) {
    return (
        <Link to={`/brands/${brand.slug}`} className="brands-body__item masonry__item" style={{ background: `url("${brand.image}") 50% 50% / cover no-repeat` }}>
            <h3>{brand.name}</h3>
        </Link>
    )
}

export default Brand
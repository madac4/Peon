import React from 'react';

function Brand({ brand }) {
    return (
        <a href='/' className="brands-body__item masonry__item" style={{ background: `url("${brand.image}") 50% 50% / cover no-repeat` }}>
            <h3>{brand.name}</h3>
        </a>
    )
}

export default Brand
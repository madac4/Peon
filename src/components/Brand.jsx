import React from 'react';

function Brand({ brand }) {
    return (
        <a href='/' className="brands-body__item masonry__item" style={{ background: `url("${brand.image}") 50% 50% / cover no-repeat` }}></a>
    )
}

export default Brand
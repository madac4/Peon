import React from 'react';
import Breadcrumbs from './Breadcrumbs'

function PageTitle({ title }) {
    return (
        <div className='page-title'>
            <div className="page-title__container">
                <h1>{title}</h1>
                <Breadcrumbs></Breadcrumbs>
            </div>
        </div>
    )
}

export default PageTitle
import React from 'react'
import styles from './Pagination.module.scss'
function Pagination() {
    return (
        <ul className={styles.pagination}>
            <li><a href="/">Inceput</a></li>
            {/* <li><a href="/" className='icon-chevron__left'></a></li> */}
            <li><a href="/" className={styles.active}>1</a></li>
            <li><a href="/">2</a></li>
            <li><a href="/">3</a></li>
            <li><a href="/">4</a></li>
            {/* <li><a href="/" className='icon-chevron__right'></a></li> */}
            <li><a href="/">Sfarsit</a></li>
        </ul>
    )
}

export default Pagination
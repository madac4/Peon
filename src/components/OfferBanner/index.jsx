import React from 'react';
import styles from './OfferBanner.module.scss'
function OfferBanner({ offerText }) {
    return (
        <div className={styles.offerBanner}>
            <h6>{offerText}</h6>
        </div>
    )
}

export default OfferBanner
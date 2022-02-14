import React from 'react'
import styles from './Sort.module.scss'

function Sort({ options }) {
    const [visibleSort, setVisibleSort] = React.useState(false);
    const [activeSort, setActiveSort] = React.useState(0)
    const sortRef = React.useRef();
    const currentOption = options.find((obj, i) => i === activeSort).name;
    const outsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            setVisibleSort(false);
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', outsideClick);
    });

    const toggleVisibleSort = () => {
        setVisibleSort(!visibleSort);
    };

    const onSelectOption = (index) => {
        setActiveSort(index)
        setVisibleSort(false);
    };
    console.log(styles);
    return (
        <div className={styles.sort}>
            <span className={styles.sort__title}>Sortează după:</span>
            <ul className={styles.sort__list}>
                {options && options.map((option, i) => (
                    <li
                        key={`${option.type}_${i}`}
                        className={activeSort === i ? styles.current : ''}
                        onClick={() => onSelectOption(i)}
                    >{option.name}</li>
                ))}
                {/* <li>
                    <button className='sort-button sort-button--active'>Populare</button>
                </li> */}
            </ul>
            <div ref={sortRef} className={styles.sort__listMobile}>
                <span onClick={toggleVisibleSort}>{currentOption}</span>
                <ul className={visibleSort ? styles.open : ''}>
                    {options && options.map((option, i) => (
                        <li
                            key={`${option.type}_${i}`}
                            className={activeSort === i ? styles.current : ''}
                            onClick={() => onSelectOption(i)}
                        >{option.name}</li>
                    ))}
                </ul>
            </div>

            <p className={styles.sort__result}><span>320</span>produse</p>
        </div>
    )
}

export default Sort
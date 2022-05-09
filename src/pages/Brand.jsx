import React from 'react';
import { useLocation } from 'react-router-dom';
import PageTitle from '../components/PageTitle'
import Pagination from '../components/Pagination'
import ProductGrid from '../components/ProductGrid'
import NoUiSlider from '../components/NoUiSlider'
import { colors } from '../data/colors'

const sortOptions = [
    { name: 'Populare', type: 'popular', order: 'desc' },
    { name: 'Produse Noi', type: 'newest', order: 'desc' },
    // { name: 'Reducere', type: 'discount', order: 'desc' },
    { name: 'Pret desc.', type: 'price', order: 'desc' },
    { name: 'Pret cresc.', type: 'price-low', order: 'asc' },
]

function Brand() {
    const location = useLocation();
    const brand = location.pathname.split('/')[2];

    const [visibleSort, setVisibleSort] = React.useState(false);
    const [activeSort, setActiveSort] = React.useState('popular')

    const sortRef = React.useRef();
    const currentOption = sortOptions.find(obj => obj.type === activeSort).name;
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

    const onSelectOption = (type) => {
        setActiveSort(type)
        setVisibleSort(false);
    };

    const [isChecked, setIsChecked] = React.useState({});
    const clearAll = () => {
        if (Object.keys(isChecked).length !== 0) {
            setIsChecked(false);
        }
    }
    const handleChecked = (e) => {
        const value = e.target.value.toLowerCase();
        setIsChecked({
            ...isChecked,
            [e.target.name]: value,
        })
    }
    const showAll = (arr) => {
        if (arr.length >= 9) {
            const buttonNum = arr.length - 8;

            return <button className="filter-group__more big">Show All ({buttonNum})</button>
        }
    }
    return (
        <div className='category-page'>
            <PageTitle title={brand.charAt(0).toUpperCase() + brand.slice(1)} />

            <div className="category-page__container">
                <div className="category-page__body">
                    <aside className='filter'>
                        <div className="filter__group filter-group">
                            {/* <div className="filter-group__options">
                                <h5>Product Type</h5>
                                {brands && brands.map((brand, i) => (
                                    <div key={`${brand.name}_${i}`} className="filter-group__option" >
                                        <label>
                                            <input
                                                type="radio"
                                                onChange={handleChecked}
                                                value={brand.name}
                                                name={'brand'}
                                            />
                                            {brand.name}
                                            <span className="items">52</span>
                                        </label>
                                    </div>
                                ))}
                                {showAll(brands)}
                            </div> */}

                            <div className="filter-group__options">
                                <h5>Cost</h5>
                                <NoUiSlider></NoUiSlider>
                            </div>

                            <div className="filter-group__options">
                                <h5>Colors</h5>
                                {colors?.slice(0, 8).map((color, i) => (
                                    <div key={`${color.name}_${i}`} className="filter-group__option" >
                                        <label>
                                            <input
                                                type="radio"
                                                onChange={handleChecked}
                                                value={color.color}
                                                name='colors'
                                            />
                                            <span className="color" style={{ backgroundColor: color.color }}></span>
                                            {color.name}
                                            <span className="items">52</span>
                                        </label>
                                    </div>
                                ))}
                                {showAll(colors)}
                            </div>

                            <button onClick={clearAll} className="filter-clear button button--outline">Curăță toate filtrele</button>
                        </div>
                    </aside >

                    <div className="category-page__products">
                        <div className="sort">
                            <span className="sort__title">Sortează după:</span>
                            <ul className="sort__list">
                                {sortOptions?.map((option, i) => (
                                    <li
                                        key={`${option.type}_${i}`}
                                        className={activeSort === option.type ? 'current' : ''}
                                        onClick={() => onSelectOption(option.type)}
                                    >{option.name}</li>
                                ))}
                            </ul>
                            <div ref={sortRef} className="sort__list--mobile">
                                <span onClick={toggleVisibleSort}>{currentOption}</span>
                                <ul className={visibleSort ? 'open' : ''}>
                                    {sortOptions?.map((option, i) => (
                                        <li
                                            key={`${option.type}_${i}`}
                                            className={activeSort === option.type ? 'current' : ''}
                                            onClick={() => onSelectOption(option.type)}
                                        >{option.name}</li>
                                    ))}
                                </ul>
                            </div>

                            <p className="sort__result"><span>320</span>produse</p>
                        </div>

                        <ProductGrid brand={brand} cat={false} sort={activeSort} filter={isChecked}></ProductGrid>
                        <Pagination></Pagination>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand
import React, { useState } from 'react';
import axios from 'axios'
import ProductFull from './ProductFull';

function ProductGrid({ cat, sort, filter, brand }) {
    const [products, setProducts] = React.useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const isCat = cat ? cat : brand;
    React.useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:8000/api/products?category=${cat}` : `http://localhost:8000/api/products?brand`);
                setProducts(cat ? res.data : res.data.filter(el => el.brand === brand.toLowerCase()));
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [cat, brand])

    React.useEffect(() => {
        setFilteredProducts(
            products.filter((item) =>
                Object.entries(filter).every(([key, value]) =>
                    item[key].includes(value)
                )
            )
        );
    }, [products, cat, brand, filter])

    React.useEffect(() => {
        if (sort === 'newest') {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            )
        } else if (sort === "price") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => b.price - a.price)
            )
        } else if (sort === "price-low") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => a.price - b.price)
            )
        } else if (sort === "popular") {
            setFilteredProducts(prev =>
                [...prev].sort((a, b) => b.rating - a.rating)
            )
        }
    }, [sort])

    console.log(filteredProducts.length);

    return (
        <div className='product-grid'>
            {isCat ? filteredProducts && filteredProducts.slice(0, 12).map((product) => (
                <ProductFull key={product._id} product={product} />
            )) : products.slice(0, 12).map(product => <ProductFull key={product._id} product={product} />)}
        </div>
    )
}

export default ProductGrid
import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Watched from '../components/Watched'
import Brands from '../components/Brands'
import OfferBanner from '../components/OfferBanner'
import ProductList from '../components/ProductList'
import TopProducts from '../components/TopProducts'

function Home() {
    return (
        <div className='homepage'>
            <Slider></Slider>
            <OfferBanner offerText={"Самые большые скидки до конца недели!"} />
            <ProductList />
            <Categories></Categories>
            <TopProducts></TopProducts>
            <Brands></Brands>
            <Watched></Watched>
        </div>
    )
}

export default Home
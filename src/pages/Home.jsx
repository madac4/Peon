import React from 'react'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
// import Watched from '../components/Watched'
import Brands from '../components/Brands'

function Home() {
    return (
        <div className='homepage'>
            <Slider></Slider>
            <Categories></Categories>
            <Brands></Brands>
            {/* <Watched></Watched> */}
        </div>
    )
}

export default Home
import React from 'react'
import Slider from '../components/Slider'
import Category from '../components/Category'

function Home() {
    return (
        <div className='homepage'>
            <Slider></Slider>
            <Category></Category>
        </div>
    )
}

export default Home
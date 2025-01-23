import React from 'react'
import { Hero } from '../components/Hero'
import Featured from '../components/Featured'
import ShopByCategory from '../components/ShopByCategory'

const Home = () => {
  return (
    <div className='h-screen'>
    <Hero/>
<Featured/>
<ShopByCategory/>
    </div>
  )
}

export default Home
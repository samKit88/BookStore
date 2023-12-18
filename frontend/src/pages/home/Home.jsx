import React from 'react'

//component
import Banner from '../../components/Banner'

//pages
import BestSellerBooks from './BestSellerBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import Footers from '../../components/Footers'
// import Review from './Review'

const Home = () => {
  return (
    <div className=" bg-gray-100">
      <Banner />
      <BestSellerBooks />
      <FavBook />
      <PromoBanner />
      {/* <Review /> */}
      <Footers />
      {/* <div className=" h-screen"></div> */}
    </div>
  )
}

export default Home

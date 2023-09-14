import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { Link } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Imageeeeeeeeeeeeeeeeeeeeeee
import img from '../assets/BookImages/Book3.png'

// icon
import { FaCartShopping } from 'react-icons/fa6'

// import './BookCards.css'

// import required modules
import { Pagination } from 'swiper/modules'

const BookCards = ({ books, headLine }) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headLine}
      </h2>
      <div className="mt-12 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map((b) => (
            <SwiperSlide key={b._id}>
              <Link to={`/book/${b._id}`}>
                <div className="relative">
                  <img src={img} alt="" className="h-40" />
                  <div className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded">
                    <FaCartShopping className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3>{b.title}</h3>
                  <p>Sammy</p>
                </div>
                <div>
                  <p>$10.00</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default BookCards

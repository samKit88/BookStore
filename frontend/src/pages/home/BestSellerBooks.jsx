import React, { useEffect, useState } from 'react'

//component
// import BookCards from '../components/BookCards'

const BestSellerBooks = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/api/v1/books')
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 6)))
  }, [])

  return <div>{/* <BookCards books={books} headLine="best books" /> */}</div>
}

export default BestSellerBooks

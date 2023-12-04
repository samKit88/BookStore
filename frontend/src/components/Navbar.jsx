import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa6'

const Navbar = () => {
  const [isScrolly, setIsScrolly] = useState(false)

  const nav = [
    {
      link: 'Home',
      path: '/',
    },
    {
      link: 'About',
      path: '/about',
    },
    {
      link: 'Blogs',
      path: '/blogs',
    },
    {
      link: 'Shop',
      path: '/shop',
    },
  ]

  useEffect(() => {
    const handleScrolly = () => {
      if (window.scrollY > 100) {
        setIsScrolly(true)
      } else {
        setIsScrolly(false)
      }
    }

    window.addEventListener('scroll', handleScrolly)
    return () => window.removeEventListener('scroll', handleScrolly)
  }, [])

  return (
    <header className="">
      <nav>
        <div
          className={`${
            isScrolly
              ? '  bg-red-500 h-12 fixed top-0 left-0 right-0  flex justify-between items-center  '
              : ''
          }`}
        >
          <div className="text-center md:mt-16 md:mb-16 mt-8 mb-8">
            {/* btn for lg device */}
            <button className=" md:hidden mr-18">
              <FaBars />
            </button>
            <Link to="/" className=" md:text-6xl text-3xl">
              Book Store
            </Link>
          </div>
          <hr />
          {/* nav items for large device */}
          <ul className="md:flex md:justify-center uppercase space-x-52 hidden ">
            {nav.map(({ link, path }) => (
              <Link to={path} key={path}>
                {link}
              </Link>
            ))}
          </ul>

          <hr />
        </div>
      </nav>
    </header>
  )
}

export default Navbar

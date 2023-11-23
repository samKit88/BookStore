import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from 'react-icons/fa6'

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
  }, [isScrolly])

  return (
    <header className="bg-zinc-300">
      <nav className="">
        <div
          className={`${
            isScrolly
              ? ' h-24 pl-7 pr-7 bg-zinc-300 text-lg text-center fixed top-0 left-0 right-0   rounded-b-lg  '
              : ''
          }`}
        >
          <div
            className={` ${
              isScrolly
                ? 'flex justify-center'
                : ' md:pt-16 md:pb-16 pt-8 pb-8 flex justify-center items-center'
            }`}
          >
            <Link to="/" className=" md:text-6xl text-3xl text-center">
              Book Store
            </Link>

            {/* btn lg device */}
            <div className=" flex justify-end">
              <button>
                <FaBarsStaggered className="w-5 hover:text-blue-700 " />
              </button>
            </div>
          </div>

          <hr />
          {/* nav items for large device */}
          <ul
            className={`${
              isScrolly
                ? 'space-x-32'
                : 'md:flex md:justify-center uppercase font-normal  space-x-32  hidden '
            }`}
          >
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

//  flex-1 justify-between align-top gap-5  items-center

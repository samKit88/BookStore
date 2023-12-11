import { createBrowserRouter } from 'react-router-dom'

//Component
import App from '../App'
import Home from '../pages/home/Home'
import About from '../pages/home/About'
import Blogs from '../pages/home/Blogs'
import Shop from '../pages/home/Shop'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
    ],
  },
])

export default Router

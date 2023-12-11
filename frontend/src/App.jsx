import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </>
  )
}

export default App

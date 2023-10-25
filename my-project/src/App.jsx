import React from 'react'
import {
  HashRouter as Router,
  Routes,
  Route,

} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Navbar from './Components/Navbar'
import Navigation from './Pages/Navigation'
export default function App() {
  return (
    <div>



      <Router>


        <Navbar />

        <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product' element={<Product />} />


            </Routes>


        {/* <Navigation /> */}

      </Router>




    </div>
  )
}

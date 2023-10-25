import React from 'react'
import {
    HashRouter as Router,
    Routes,
    Route,

} from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Product from './Product'


export default function Navigation() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product' element={<Product />} />


            </Routes>

        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div style={{ width: '10rem' }}>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between', width: '10rem' }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/product">Product</Link></li>
            </ul>
        </div>
    )
}

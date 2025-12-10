import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-dark py-2'>
      
      <ul
        className='d-flex flex-wrap  p-2'
        style={{
          gap: "30px",
          listStyle: "none",
          width: "fit-content",
          margin: "0 auto"
        }}
      >
        <li>
          <Link to="/home" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        </li>

        <li>
          <Link to="/products" style={{ color: "white", textDecoration: "none" }}>Products</Link>
        </li>

        <li>
          <Link to="/imdb" style={{ color: "white", textDecoration: "none" }}>Imdb</Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar;

import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
function Navbar() {
  return (
    <div>
       <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
         <li>
            <Link to="/products">products</Link>
        </li>
         <li>
            <Link to="/imdb">Imdb</Link>
        </li>
       </ul>
    </div>
  )
}

export default Navbar

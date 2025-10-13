import React from 'react'
import "./Navbar.css";
import logo from '../../assets/image.png';

function Navbar() {
  return (
    <div>
        <nav>
            <div className="logo"><img src={logo} alt="" /></div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Pricing</a></li>
                <li><button className='register'>Register Now</button></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
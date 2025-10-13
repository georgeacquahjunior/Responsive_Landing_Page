import React from 'react'
import './Footer.css'
import logo from '../../assets/image-1.png'

function Footer() {
  return (
    <div>
        <footer>
        <div class="footer-1">
            <h2>
                Pellentesque suscipit <br/> fringilla libero eu.
            </h2>
            <div class="demo">
                <button class="demo-btn">Get a Demo</button>
            </div>
            
        </div>
        <div class="footer-2">
            <div class="footer-logo-socials">
                <div class="footer-logo">
                    <img src={logo} alt="" />
                </div>
                <div class="footer-logo-text">
                    <p>Copyright © 2020 Landify UI Kit. <br /> <br />All rights reserved</p>
                </div>
                <div class="footer-socials">
                    <ul>
                        <li><img src="./Assets/Social Icons.png" alt="" /></li>
                        <li><img src="./Assets/Social Icons-1.png" alt="" /></li>
                        <li><img src="./Assets/Social Icons-2.png" alt="" /></li>
                        <li><img src="./Assets/Social Icons-3.png" alt="" /></li>
                    </ul>
                </div>
            </div>
            <div class="footer-group-links">
                <div class="footer-company">
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <div class="footer-support">
                    <h4>Support</h4>
                    <ul>
                        <li>Help Center</li>
                        <li>Terms of Service</li>
                        <li>Legal</li>
                        <li>Privacy policy</li>
                        <li>Status</li>
                    </ul>
                </div>
                <div class="footer-uptodate">
                    <h4>Stay up to date</h4>
                    <input type="text" name="" id="" placeholder="Your email address" />
                    <img src="./Assets/send.png" alt="" />
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
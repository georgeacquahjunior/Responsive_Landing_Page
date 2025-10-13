import React from 'react'
import "./Hero.css"
import hero_image from '../../assets/Illustration.png'

function Hero() {
  return (
    <div>
        <div className="hero-section">
            <div className="hero-text">
                <h1>Lessons and insights <br/> <span>from 8 years</span></h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button className="register">Register</button>
            </div>
            <div className="hero-image"><img src={hero_image} alt=""/></div>
        </div>
        <div class="rings">
                <button class="ring1"></button>
                <button class="ring2"></button>
                <button class="ring3"></button>
        </div>
    </div>
  )
}

export default Hero
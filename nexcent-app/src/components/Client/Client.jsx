import React from 'react'
import './Client.css'
import logo from '../../assets/Logo.png'
import logo_1 from '../../assets/Logo-1.png'
import logo_2 from '../../assets/Logo-2.png'
import logo_3 from '../../assets/Logo-3.png'
import logo_4 from '../../assets/Logo-4.png'
import logo_5 from '../../assets/Logo-5.png'
import logo_6 from '../../assets/Logo-6.png'

function Client() {
  return (
    <div>
        <div class="client-section">
            <h3 class="client-section-header"> Our Client</h3>
            <p class="client-section-body">
                We have been working with some Fortune 500+ clients
            </p>
            <ul class="client-section-image">
                <li><img src={logo} alt=""/></li>
                <li><img src={logo_1} alt=""/></li>
                <li><img src={logo_2} alt=""/></li>
                <li><img src={logo_3} alt=""/></li>
                <li><img src={logo_4} alt=""/></li>
                <li><img src={logo_5} alt=""/></li>
                <li><img src={logo_6} alt=""/></li>
            </ul>
        </div>
        <div class="sub-client">
            <h3 class="sub-client-header">Manage your entire community<br/> in a single system</h3>
            <p class="sub-client-body">Manage your entire community in a single system</p>
        </div>
    </div>
  )
}

export default Client
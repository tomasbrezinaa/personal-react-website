import React from 'react'
import "./header.css"
import CTA from './CTA'
import photo from "../../assets/header_image.jpg"
import Socials from './Socials'

function Header() {
    return (
        <header id='#'>
            <div className="container header__container">
                <h5 className='text-light'>Hello I'm</h5>
                <h1>Tomáš Brežina</h1>
                <h5 className="text-light">Front-end developer | Web developer | Comenius University student</h5>
                <CTA />
                <Socials />
                <div className="photo">
                    <img src={photo} alt="" className='grayscale' />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header

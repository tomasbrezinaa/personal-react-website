import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"

function socials() {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/tomasbrezinaa/' target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href='https://github.com/tomasbrezinaa' target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        </div>
    )
}

export default socials

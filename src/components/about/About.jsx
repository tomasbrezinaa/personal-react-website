import React from 'react'
import "./about.css"
import { TbSchool } from "react-icons/tb"
import { BiCodeAlt } from "react-icons/bi"
import { BsFillPersonFill } from "react-icons/bs"

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About me</h2>

            <div className='container about__container'>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <TbSchool className='about__icon' />
                            <h5>Uni Student</h5>
                            <small> 1 year</small>
                        </article>

                        <article className="about__card">
                            <BiCodeAlt className='about__icon ' />
                            <h5>Front End Developer</h5>
                            <small>2 years</small>
                        </article>

                        <article className="about__card">
                            <BsFillPersonFill className='about__icon' />
                            <h5>Human</h5>
                            <small>20 years</small>
                        </article>
                    </div>

                    <p>Hello there! My name is Tomáš Brežina, and I am a Computer Science student at the Slovak Technical University. In my free time I love to create websites and learning new programming languages and frameworks!<br></br>
                        If you want to ask me something, the contact form is at the bottom of the page <span>😄</span>
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>

            </div>
        </section>
    )
}

export default About

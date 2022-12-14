import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { useRef } from 'react';
import emailjs, { sendForm } from "emailjs-com"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o4zlliv', 'template_s0wyxn1', form.current, 'gG8kxLeeUjQG706a1')

        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>If you want to ask</h5>
            <h2>Contact me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        < MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>tomas.brezinaaa@gmail.com</h5>
                        <a href="mailto:tomas.brezinaaa@gmail.com" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        < RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Tomáš Brežina</h5>
                        <a href="http://m.me/100077557206348" target="_blank">Send a message</a>
                    </article>
                </div>

                {/* END OF CONTACT OPTION */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name='message' rows="7" placeholder="Your Message" required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section >
    )
}

export default Contact

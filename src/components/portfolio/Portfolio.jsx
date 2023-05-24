import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio_1.png"
import IMG2 from "../../assets/portfolio_2.jpg"
import IMG3 from "../../assets/portfolio_3.png"




const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Body Mass Index(BMI) React App',
        github: 'https://github.com/tomasbrezinaa/bmi-app',
        demo: '//'
    },

    {
        id: 2,
        image: IMG2,
        title: '3D Printer on Web Responsive Website',
        github: 'https://github.com/tomasbrezinaa/3d-tlac-web',
        demo: 'https://www.3dtlacnawebe.me'
    },

    {
        id: 3,
        image: IMG3,
        title: 'Nothing Phone (1)',
        github: 'https://github.com/tomasbrezinaa/nothing-phone-website',
        demo: ''
    }
]


function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__items'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer" >Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio

import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.png"
import IMG1_2 from "../../assets/portfolio1_2.png"
import IMG1_3 from "../../assets/portfolio1_3.png"
import IMG2_2 from "../../assets/portfolio2_2.png"



const data = [
    {
        id: 1,
        image: IMG1,
        title: '3D Printer on Web Responsive Website',
        github: 'https://github.com/tomasbrezinaa/3d-tlac-web',
        demo: 'https://www.3dtlacnawebe.me'
    },

    {
        id: 1,
        image: IMG1_2,
        title: '3D Printer on Web Responsive Website',
        github: 'https://github.com/tomasbrezinaa/3d-tlac-web',
        demo: 'https://www.3dtlacnawebe.me'
    },

    {
        id: 1,
        image: IMG1_3,
        title: '3D Printer on Web Responsive Website',
        github: 'https://github.com/tomasbrezinaa/3d-tlac-web',
        demo: 'https://www.3dtlacnawebe.me'
    },

    {
        id: 1,
        image: IMG2,
        title: 'NOTHING Phone (1) Specification Website',
        github: 'https://github.com/tomasbrezinaa/nothing-phone-website',
        demo: 'livedemo'
    },
    {
        id: 1,
        image: IMG2_2,
        title: 'NOTHING Phone (1) Specification Website',
        github: 'https://github.com/tomasbrezinaa/nothing-phone-website',
        demo: 'livedemo'
    },
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
                                    <a href={github} className='btn' target="_blank">Github</a>
                                    <a href={demo} className='btn btn-primary' target="_blank" >Live Demo</a>
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

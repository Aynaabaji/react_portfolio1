import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/rec1.jpeg'
import IMG2 from '../../assets/rec2.jpeg'
import IMG3 from '../../assets/rec3.jpeg'
import IMG4 from '../../assets/rec4.jpeg'
import IMG5 from '../../assets/rec5.jpeg'
import IMG6 from '../../assets/rec6.jpeg'


const data = [
  {
    id: 1,
    image:IMG1,
    title: "crypto",
    github: "https://github.com",
    demo:"https://gribbble.com"
  },
  {
    id: 2,
    image:IMG2,
    title: "crypto",
    github: "https://github.com",
    demo:"https://gribbble.com"
  },
  {
    id: 3,
    image:IMG3,
    title: "crypto",
    github: "https://github.com",
    demo:"https://gribbble.com"
  },
  {
    id: 4,
    image:IMG4,
    title: "crypto",
    github: "https://github.com",
    demo:"https://gribbble.com"
  },
  {
    id: 5,
    image:IMG5,
    title: "crypto",
    github: "https://github.com",
    demo:"https://gribbble.com"
  },
  {
    id: 6,
    image:IMG6,
    title: "crypto",
    github: "https://github.com",
    demo:"https://gribbble.com"
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                    <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo!</a>
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
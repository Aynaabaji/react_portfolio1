import React from 'react'
import './testimonial.css'
import AVR1 from '../../assets/char5.jpeg'
import AVR2 from '../../assets/char1.jpeg'
import AVR3 from '../../assets/char3.jpeg'
import AVR4 from '../../assets/char4.jpeg'

const avr = [
  {
    avatar : AVR1,
    name : 'Tina Snow',
    review : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti inventore molestias repellendus, ipsum vitae rerum cum totam. Corrupti cumque, quasi porro ducimus assumenda ex sequi, rerum, eveniet consequuntur atque a?'
  },
  {
    avatar : AVR2,
    name : 'Barbara Duxon',
    review : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti inventore molestias repellendus, ipsum vitae rerum cum totam. Corrupti cumque, quasi porro ducimus assumenda ex sequi, rerum, eveniet consequuntur atque a?'
  },
  {
    avatar : AVR3,
    name : 'Rosen Troxmesi',
    review : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti inventore molestias repellendus, ipsum vitae rerum cum totam. Corrupti cumque, quasi porro ducimus assumenda ex sequi, rerum, eveniet consequuntur atque a?'
  },
  {
    avatar : AVR4,
    name : 'Petron Polonov',
    review : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti inventore molestias repellendus, ipsum vitae rerum cum totam. Corrupti cumque, quasi porro ducimus assumenda ex sequi, rerum, eveniet consequuntur atque a?'
  },
]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Reviews from Clients</h5>
      <h2>Testimonial</h2>
      <div className="container testimonial__container">


        {
          avr.map(({avatar, name, review , index})=>{
            return(
              <div key={index} className="testimonial">
                <div className="clients__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='clients__name'>{name}</h5>
                <small className='clients__review'>
                  {review}
                </small>
              </div>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Testimonial
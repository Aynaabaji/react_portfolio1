import React from 'react'
import './contact.css'
import {MdAlternateEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import {RiMessengerLine} from 'react-icons/ri'

const cntct = [
  {
    icon: <MdAlternateEmail/>,
    name: "Email",
    snd: "aynaabaji@gmail.com",
    info: "mailto:aynaabaji@gmail.com",
    buton: "Send a Email"
  },
  {
    icon: <FaWhatsapp/>,
    name: "Whatsapp",
    snd: "aynaabaji@gmail.com",
    info: "https://api.whatsapp.com/send?phone:+8801783637777",
    buton: "Whatsapp me"
  },
  {
    icon: <RiMessengerLine/>,
    name: "messenger",
    snd: "aynaabaji@gmail.com",
    info: "https://m.me/mdsharafat.islam.75",
    buton: "Send a Email"
  }
]

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          
          {
            cntct.map(({icon, name, snd, info, buton, index})=>{
              return(
                <article key={index} className="contact__option">
                  {icon}
                  <h4>{name}</h4>
                  <h5>{snd}</h5>
                  <a href={info} target="_blank" rel='noreferrer'>{buton}</a>
                </article>
              )
            })
          }

        </div>
        <form action="">
          <input type="text" name="name" placeholder='Your Full Name...' required/>
          <input type="email" name="email" placeholder='your email here...' required/>
          <textarea name="message" rows="7" placeholder='Your message...' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
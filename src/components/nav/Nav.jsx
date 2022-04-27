import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineQuestionCircle, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareEdit } from 'react-icons/bi'
import { MdGrading } from 'react-icons/md'
import { RiServiceLine } from 'react-icons/ri'
import './nav.css'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#'?'active':''}><AiOutlineHome/></a>

      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about'?'active':''}><AiOutlineQuestionCircle/></a>

      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience'?'active':''}><BiBook/></a>

      <a href="#services" onClick={()=>setActiveNav("#services")} className={activeNav === '#services'?"active":''}><RiServiceLine/></a>

      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio'?'active':''}><AiOutlineUser/></a>

      <a href="#testimonial" onClick={()=>setActiveNav('#testimonial')} className={activeNav === '#testimonial'?'active':''}><MdGrading/></a>

      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact'?'active':''}><BiMessageSquareEdit/></a>

    </nav>
  )
}

export default Nav
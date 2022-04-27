import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/md-sharafat-islam-8a7773231/" target="_blank" rel='noreferrer'><AiOutlineLinkedin/></a>

        <a href="https://github.com/Aynaabaji" target="_blank" rel='noreferrer'><AiOutlineGithub/></a>
        
        <a href="https://www.instagram.com/adityashribastav/" target="_blank" rel='noreferrer'><AiOutlineInstagram/></a>
    </div>
  )
}

export default HeaderSocials
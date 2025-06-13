import React from 'react'

import Logo from '../assets/icons/Logo.svg'
import HeartIcon from '../assets/icons/heart.svg'
import ProfileIcon from '../assets/icons/profile.svg'
import SearchIcon from '../assets/icons/search-normal.svg'
import BagIcon from '../assets/icons/shopping-bag.svg'
import LanguageIcon from '../assets/icons/Language.svg'
import '../styles/header.css'

const  Header = () => {
  return (
    <header>
      <div className='header-container'>
        <img src= {Logo} alt="" />
        <h2 className="header-title">
            LOGO
        </h2>
        <div className="header-icons">
          <ul>
            <li><img src= {HeartIcon} alt="Favourites" /></li>
            <li><img src= {ProfileIcon} alt="User profile" /></li>
            <li><img src= {SearchIcon} alt="Search" /></li>
            <li><img src= {BagIcon} alt="Shopping Bag" /></li>
            <li><img src= {LanguageIcon} alt="Transaltion" /></li>
          </ul>
        </div>
      </div>

      <nav>
        <ul className='navBar-items'>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
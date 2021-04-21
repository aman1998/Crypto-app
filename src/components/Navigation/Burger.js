import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/images/logomob.png';
import Logo1 from '../../assets/images/twitter.png'
import Logo2 from '../../assets/images/facebook.png'
import Logo3 from '../../assets/images/youtube-logo.png'
import Logo4 from '../../assets/images/skype.png'
import Logo5 from '../../assets/images/pinterest-logo.png'

const Burger = () => {
  const [burger, setBurger] = useState(false)

  const handleBurger = () => {
    setBurger(!burger)
    document.body.classList.toggle('lock')
  }

  return (
    <div className='burger'>
      <div className={`burger-icon ${burger ? 'burger-icon--active' : null}`} onClick={handleBurger}>
        <span className='span span--1'></span>
        <span className='span span--2'></span>
        <span className='span span--3'></span>
      </div>
      <div className={`burger-content ${burger ? 'burger-content--active' : null}`} onClick={handleBurger}>
        <nav className='burger-nav' onClick={e => e.stopPropagation()}>
          <img src={Logo}  alt='logo' />
          <ul>
            <li className='item' onClick={handleBurger}><NavLink to='/' className='item' exact>home</NavLink></li>
            <li className='item'>resources</li>
            <li className='item'>team</li>
            <li className='item'>features</li>
            <li className='item'>community</li>
            <li className='item'>downloads</li>
            <li className='item item--btn'><NavLink to='/sign' className='item item--btn' onClick={handleBurger} exact>Sign</NavLink></li>
          </ul>
          <div className='burger__contacts'>
            <div className='image-wrapper'><img src={Logo1} className='logo' alt='logo' /></div>
            <div className='image-wrapper'><img src={Logo2} className='logo' alt='logo' /></div>
            <div className='image-wrapper'><img src={Logo3} className='logo' alt='logo' /></div>
            <div className='image-wrapper'><img src={Logo4} className='logo' alt='logo' /></div>
            <div className='image-wrapper'><img src={Logo5} className='logo' alt='logo' /></div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Burger

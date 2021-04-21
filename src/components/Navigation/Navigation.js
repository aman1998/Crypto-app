import React from 'react';

import Logo from '../../assets/images/logo.png';

const Navigation = () => {
  return (
    <nav className='header__nav'>
      <img src={Logo} className='logo' alt='crypto-logo' />
      <ul>
        <li className='link'>home</li>
        <li className='link'>resources</li>
        <li className='link'>team</li>
        <li className='link'>features</li>
        <li className='link'>community</li>
        <li className='link'>downloads</li>
        <li className='link link--contact'>contact us</li>
      </ul>
    </nav>
  )
}

export default Navigation

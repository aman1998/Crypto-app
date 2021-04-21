import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';
import { Burger } from '../index';

const Navigation = () => {
  return (
    <nav className='nav'>
      <NavLink to='/' exact><img src={Logo} className='logo' alt='crypto-logo' /></NavLink>
      <ul>
        <li className='link'><NavLink to='/' exact>home</NavLink></li>
        <li className='link'>resources</li>
        <li className='link'>team</li>
        <li className='link'>features</li>
        <li className='link'>community</li>
        <li className='link'>downloads</li>
        <li className='link link--contact'><NavLink className='link link--contact' to='/sign' exact>Sign</NavLink></li>
      </ul>
      <Burger />
    </nav>
  )
}

export default Navigation

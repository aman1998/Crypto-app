import React from 'react';
import { Navigation } from '../index';
import message from 'antd-message';


const Header = () => {
  const handleMessage = () => {
    message.success('kello')
  }
  return (
    <header className='header'>
      <Navigation />
      <div className='header__content'>
        <h1 className='title'>Secure and Anonymous Cryptocurrency </h1>
        <div className='line'></div>
        <p className='text'>Lymcoin is a decentralized, hybrid blockhain that is fully open-source. </p>
        <div className='btn-wrapper'>
          <button className='btn btn--1'>contact us</button>
          <button className='btn btn--2'>contact us</button>
        </div>
      </div>
    </header>
  )
}

export default Header

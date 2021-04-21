import React from 'react';

import { Title } from '../index';

import Photo from '../../assets/images/laravel.png';
import Logo1 from '../../assets/images/android.png';
import Logo2 from '../../assets/images/windows-8.png';
import Logo3 from '../../assets/images/apple.png';
import Logo4 from '../../assets/images/linux.png';

const Wallets = () => {
  const cards = [
    {logo: Logo1, title: 'Android Lymcoin Wallet', text: 'Download'},
    {logo: Logo2, title: 'Windows Lymcoin Wallet', text: 'Download'},
    {logo: Logo3, title: 'OSX Lymcoin Wallet', text: 'Download'},
    {logo: Logo4, title: 'Linux Lymcoin Wallet', text: 'Download'},
  ]
  return (
    <section className='wallets'>
      <img src={Photo} className='photo' alt='wallet-photo' />
      <div className='wallets__content'>
        <Title title='06. WALLETS'/>
        <div className='name'>Lymcoin Wallets</div>
        <div className='btns'>
          <button className='btn btn--yellow'>contact us</button>
          <button className='btn'>contact us</button>
          <button className='btn'>contact us</button>
          <button className='btn'>contact us</button>
        </div>
        <div className='cards'>
          {
            cards.map(item => (
              <div className='card' key={item.title}>
                <img src={item.logo} className='logo' alt='logo' />
                <div className='card__right'>
                  <h3 className='card__title'>{item.title}</h3>
                  <p className='card__text'>{item.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Wallets

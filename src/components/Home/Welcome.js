import React from 'react';

import { Title } from '../index';

const Welcome = ({image, btn}) => {
  return (
    <section className={`welcome ${btn && 'welcome-2'}`}>
      <img src={image} className='welcome__image' alt='mobile-app'/>
      <div className='welcome__content'>
        <Title title='01. WELCOME'/>
        <div className='name'>Lymcoin is Digital Cash You Can Spend Anywhere</div>
        <p className='text'>Use Lymcoin to make instant, private payments online or in-store using our secure open-source platform hosted by thousands of users around the world.</p>
        {
          btn && <button className='btn'>contact us</button>
        }
      </div>
    </section>
  )
}

export default Welcome

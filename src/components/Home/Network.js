import React from 'react';

import Title from '../Title/Title'

import Photo from '../../assets/images/MaskGroup2.png';
import Photo2 from '../../assets/images/world.png';
import Logo1 from '../../assets/images/logo-8.png';
import Logo2 from '../../assets/images/logo-9.png';
import Logo3 from '../../assets/images/logo-10.png';

const Network = () => {
  return (
    <section className='network'>
      <img src={Photo} alt='mask' className='photo-mask' />
      <img src={Photo2} alt='world' className='photo' />
      <div className='network__content'>
        <Title title='05. NETWORK'/>
        <h2 className='title'>Growing Global Network</h2>
        <p className='text'>Lymcoin is rapidly gaining popularity among crypto community. Lots of real companies and exchanges have adopted our coin already. There is much more to come. Stay tuned.</p>
        <div className='statistics'>
          <div className='left'>
            <div className='number'>50<span>+</span></div>
            <div>Exchanges</div>
          </div>
          <div className='right'>
            <div className='number'>180<span>+</span></div>
            <div>Companies</div>
          </div>
        </div>
        <div className='network__sponsors'>
          <img src={Logo1} alt='sponsors' className='logo' />
          <img src={Logo2} alt='sponsors' className='logo' />
          <img src={Logo3} alt='sponsors' className='logo' />
        </div>
      </div>
    </section>
  )
}

export default Network

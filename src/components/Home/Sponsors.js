import React from 'react';

import Image1 from '../../assets/images/logo-2.png';
import Image2 from '../../assets/images/logo-3.png';
import Image3 from '../../assets/images/logo-4.png';
import Image4 from '../../assets/images/logo-5.png';
import Image5 from '../../assets/images/logo-6.png';
import Image6 from '../../assets/images/logo-7.png';

const Sponsors = () => {
  return (
    <section className='sponsors'>
      <img src={Image1} alt='sponsors-logo' className='logo'/>
      <img src={Image2} alt='sponsors-logo' className='logo'/>
      <img src={Image3} alt='sponsors-logo' className='logo'/>
      <img src={Image4} alt='sponsors-logo' className='logo'/>
      <img src={Image5} alt='sponsors-logo' className='logo'/>
      <img src={Image6} alt='sponsors-logo' className='logo'/>
    </section>
  )
}

export default Sponsors

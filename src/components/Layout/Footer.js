import React from 'react';

import Logo1 from '../../assets/images/twitter.png'
import Logo2 from '../../assets/images/facebook.png'
import Logo3 from '../../assets/images/youtube-logo.png'
import Logo4 from '../../assets/images/skype.png'
import Logo5 from '../../assets/images/pinterest-logo.png'

const Footer = () => {
  return (
    <footer>
      <div className='footer container'>
        <h2 className='footer__title'>I’d Like to Learn More About Lymcoin</h2>
        <div className='line'></div>
        <form className='footer__form'>
          <input placeholder='Enter your Email'/>
          <button className='btn'>Sign in</button>
        </form>
        <div className='footer__check-wrapper'>
          <input type="checkbox" name="acceptTerms" className='check-input'/>
          <label htmlFor="acceptTerms" className="check">I have read and agree to the terms & conditions</label>
        </div>
        <div className='footer__contacts'>
          <div className='image-wrapper'><img src={Logo1} className='logo' alt='logo' /></div>
          <div className='image-wrapper'><img src={Logo2} className='logo' alt='logo' /></div>
          <div className='image-wrapper'><img src={Logo3} className='logo' alt='logo' /></div>
          <div className='image-wrapper'><img src={Logo4} className='logo' alt='logo' /></div>
          <div className='image-wrapper'><img src={Logo5} className='logo' alt='logo' /></div>
        </div>
        <div className='footer__bottom'>AncoraThemes © 2019. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

export default Footer

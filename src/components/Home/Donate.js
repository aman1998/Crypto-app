import React from 'react';

import { Title } from '../index';

import Photo from '../../assets/images/qr.png';
import Logo1 from '../../assets/images/ethereum.png';
import Logo2 from '../../assets/images/bitcoin.png';

const Donate = () => {
  return (
    <section className='donate container'>
      <Title title='11. DONATE'/>
      <div className='donate__name'>Donate to Support Development</div>
      <p className='donate__text'>Lymcoin is not a pre-mined coin, so all of its development is funded by kind people like you.</p>
      <div className='donate__cards'>
        <div className='card'>
          <img src={Logo1} className='logo' alt='ethereum' />
          <div className='card__text'>
            <div>177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1</div>
            <div>Lymcoin Wallet Address</div>
          </div>
          <img src={Photo} className='qpcode-image' alt='qpcode' />
        </div>
        <div className='card'>
          <img src={Logo2} className='logo' alt='ethereum' />
          <div className='card__text'>
            <div>177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1</div>
            <div>Lymcoin Wallet Address</div>
          </div>
          <img src={Photo} className='qpcode-image' alt='qpcode' />
        </div>
      </div>
    </section>
  )
}

export default Donate

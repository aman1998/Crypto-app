import React from 'react';

import Title from '../Title/Title'

import Photo from '../../assets/images/MaskGroup3.png';
import Photo2 from '../../assets/images/computer.png';
import Logo1 from '../../assets/images/windows-8.png';
import Logo2 from '../../assets/images/linux.png';

const Miner = () => {
  return (
    <section className='miner'>
      <img src={Photo} alt='mask' className='photo-mask' />
      <img src={Photo2} alt='world' className='photo' />
      <div className='miner__content'>
        <Title title='09. MINER'/>
        <h2 className='title'>Compatible GPU Miner Software</h2>
        <p className='text'>Download one of these miners for your GPU</p>
        <div className='platforms'>
          <div className='platform'>
            <img src={Logo1} className='logo' alt='windows' />
            <div className='right'>
              <div>Windows Lymcoin Miner</div>
              <div>Download</div>
            </div>
          </div>
          <div className='platform'>
            <img src={Logo1} className='logo' alt='windows' />
            <div className='right'>
              <div>Windows Lymcoin Miner</div>
              <div>Download</div>
            </div>
          </div>
        </div>
        <div className='statistics'>
          <div className='left'>
            <div className='number'>87 278</div>
            <div>Total miners</div>
          </div>
          <div className='right'>
            <div className='number'>2.82 Tsol/s</div>
            <div>Total hashrate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Miner

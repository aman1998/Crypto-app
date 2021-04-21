import React from 'react';

import { Title } from '../index';

const Roadmap = () => {
  return (
    <section className='roadmap container'>
      <div className='roadmap__top'>
        <Title title='04. ROADMAP'/>
        <div className='name'>Implementation Sheet</div>
        <p className='text'>At Lymcoin we have one focus - creating a viable data marketplace to start returning value
  to token holders in the shortest time possible.</p>
      </div>
      <div  className='roadmap__bottom'>
        <div className='steps'>
          <div className='step'>
            <div></div>
            <div></div>
          </div>
          <div className='step'>
            <div>
              <p className='step__text step__text--1'>Development of different types of smart contracts (CPA, CPL, CPC, CPS, CPI)</p>
              <p className='step__date step__date--1'>January 2018</p>
            </div>
            <div></div>
          </div>
          <div className='step'>
            <div>
              <p className='step__text step__text--2'>Tracking services for different smart contract types</p>
              <p className='step__date step__date--2'>March 2018</p>
            </div>
            <div></div>
          </div>
          <div className='step'>
            <div>
              <p className='step__text step__text--3'>Release of a decentralized app for merchants / affiliates</p>
              <p className='step__date step__date--3'>March 2019</p>
            </div>
            <div className='process__line'></div>
          </div>
          <div className='step'>
            <div className='process__circle'>
              <p className='step__text step__text--4'>Release of a decentralized app for affiliate networks</p>
              <p className='step__date step__date--4'>May 2020</p>
            </div>
            <div className='process__line'></div>
          </div>
          <div className='step'>
            <div className='process__circle'>
              <p className='step__text step__text--5'>Launch of the world's first decentralized affiliate network based on the HOQU platform</p>
              <p className='step__date step__date--5'>September 2020</p>
            </div>
            <div className='process__line'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap

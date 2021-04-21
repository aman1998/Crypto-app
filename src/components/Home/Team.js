import React from 'react';
import Slider from 'react-elastic-carousel'

import { Title } from '../index';

import Avatar1 from '../../assets/images/human-1.png'
import Avatar2 from '../../assets/images/human-2.png'
import Avatar3 from '../../assets/images/human-3.png'

const Team = () => {
  const breakPoints = [
    {width: 100, itemsToShow: 1},
    {width: 400, itemsToShow: 2},
    {width: 800, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
  ]
  return (
    <>
    <section className='team container'>
      <Title title='07. TEAM'/>
      <div className='team__name'>Team & Advisors</div>
      <p className='team__text'>With a team of top technology and finance professionals, the nonprofit Lymcoin expands access to low-cost financial services to fight poverty and maximize individual potential.</p>
      <div className='team__cards'>
      <Slider
        breakPoints={breakPoints}
        pagination={false}
      >
        <div className='card'>
          <img src={Avatar1} className='card__avatar' alt='avatar'/>
          <div className='card__name'>John Nelson</div>
          <div className='card__job'>Account Manager</div>
        </div>
        <div className='card'>
          <img src={Avatar2} className='card__avatar' alt='avatar'/>
          <div className='card__name'>John Nelson</div>
          <div className='card__job'>Account Manager</div>
        </div>
        <div className='card'>
          <img src={Avatar3} className='card__avatar' alt='avatar'/>
          <div className='card__name'>John Nelson</div>
          <div className='card__job'>Account Manager</div>
        </div>
        <div className='card'>
          <img src={Avatar1} className='card__avatar' alt='avatar'/>
          <div className='card__name'>John Nelson</div>
          <div className='card__job'>Account Manager</div>
        </div>
        <div className='card'>
          <img src={Avatar2} className='card__avatar' alt='avatar'/>
          <div className='card__name'>John Nelson</div>
          <div className='card__job'>Account Manager</div>
        </div>
        <div className='card'>
          <img src={Avatar3} className='card__avatar' alt='avatar'/>
          <div className='card__name'>John Nelson</div>
          <div className='card__job'>Account Manager</div>
        </div>
    </Slider>
      </div>
    </section>
    </>
  )
}

export default Team


import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import { Title } from '../index';

import Chevron from '../../assets/images/chevron.png'
import Avatar1 from '../../assets/images/human-1.png'
import Avatar2 from '../../assets/images/human-2.png'
import Avatar3 from '../../assets/images/human-3.png'

const Team = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <>
    <section className='team container'>
      <Title title='07. TEAM'/>
      <div className='team__name'>Team & Advisors</div>
      <p className='team__text'>With a team of top technology and finance professionals, the nonprofit Lymcoin expands access to low-cost financial services to fight poverty and maximize individual potential.</p>
      <div className='team__cards'>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={20}
          slidesToScroll={1}
          leftChevron={<img src={Chevron} alt='chevron' className='chevron chevron--left '/>}
          rightChevron={<img src={Chevron} alt='chevron' className='chevron chevron--right'/>}
          outsideChevron
          alwaysShowChevrons={true}
          infiniteLoop={true}
          chevronWidth={chevronWidth}
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
        </ItemsCarousel>
      </div>
    </section>
    </>
  )
}

export default Team

import React from 'react';

import { Title } from '../index';

const Events = () => {
  const cards = [
    {day: '16', date: 'April 2019', title: 'Ethyl Voting', text: '“The Ethyl Community Fund Proposal has started their voting.”'},
    {day: '30', date: 'May 2019', title: 'Chainges Conference', text: 'Join the first world-class quality blockchain and cryptocurrency conference'},
    {day: '10', date: 'June 2019', title: 'Ethyl Voting', text: 'Catapult Lymcoin (version 2.0) will come sometime this year'},
  ]
  return (
    <section className='events'>
      <Title title='10. EVENTS'/>
      <div className='events__name'>Upcoming Events</div>
      <div className='events__cards'>
        {
          cards.map(item => (
            <div className={`card ${item.day === '30' && 'card--2'}`} key={item.day}>
              <div>{item.day}</div>
              <div>{item.date}</div>
              <div>{item.title}</div>
              <div>{item.text}</div>
              <button className='btn'>Read more</button>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Events

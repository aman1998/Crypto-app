import React from 'react';

import Title from '../Title/Title';

import Photo1 from '../../assets/images/pie-chart.png';

const Benefits = () => {
  const cards = [
    {number: '01.', img: Photo1, title: 'Lymcoin Benefits', text: 'Use Lymcoin to make instant'},
    {number: '02.', img: Photo1, title: 'Lymcoin Benefits', text: 'Use Lymcoin to make instant'},
    {number: '03.', img: Photo1, title: 'Lymcoin Benefits', text: 'Use Lymcoin to make instant'},
    {number: '04.', img: Photo1, title: 'Lymcoin Benefits', text: 'Use Lymcoin to make instant'},
  ]
  return (
    <section className='benefits container'>
      <Title title='02. BENEFITS'/>
      <div className='name'>Lymcoin Benefits</div>
      <div className='cards'>
        {
          cards.map(item => (
            <div className='card' key={item.number}>
              <div className='card__number'>{item.number}</div>
              <img src={item.img} alt='card-logo' className='card__logo'/>
              <div className='card__title'>{item.title}</div>
              <p className='card__text'>{item.text}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Benefits

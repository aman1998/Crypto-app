import React from 'react';

import { Title } from '../index';

import Photo from '../../assets/images/graph.png'

const Chart = () => {
  return (
    <section className='chart container'>
      <Title title='08. CHARTS'/>
      <div className='chart__name'>Lymcoin Charts</div>
      <div className='chart__content'>
        <div className='left'>
          <div className='price'>
            <div>Current Price</div>
            <div>$541.27</div>
          </div>
          <img src={Photo} alt='graph' className='photo'/>
        </div>
        <div className='right'>
          <div className='price'>
            <div>Market Cap </div>
            <div>$147 547 106</div>
          </div>
          <img src={Photo} alt='graph' className='photo'/>
        </div>
      </div>
    </section>
  )
}

export default Chart

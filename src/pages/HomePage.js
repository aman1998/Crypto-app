import React, {useState} from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {  Header, Welcome, Roadmap, Sponsors, Benefits, Network, 
          Wallets, Team, Chart,  Miner, Events, Donate, Footer } from '../components/index';

import Photo from '../assets/images/mobile.png';
import Photo2 from '../assets/images/mobile-2.png';
import Chevron from '../assets/images/chevron2.png'

const HomePage = () => {
  const [btn, setBtn] = useState(false) 

  window.onscroll = () => {
    handleScroll()
  }

  const handleScroll = () => {
    if (
      document.body.scrollTop > 70 ||
      document.documentElement.scrollTop > 70
    ) {
      setBtn(true)
    }
    else setBtn(false)
  }

  return (
    <>
    <Header />
    <Welcome image={Photo}/>
    <Benefits />
    <Welcome image={Photo2} btn={true}/>
    <Roadmap />
    <Sponsors />
    <Network />
    <Wallets />
    <Team />
    <Chart />
    <Miner />
    <Events />
    <Donate />
    <Footer />
    { btn && 
    <div onClick={() => scroll.scrollToTop()} className='scroll-btn'>
      <img src={Chevron} alt='chevron'/>
    </div> }
    </>
  )
}

export default HomePage

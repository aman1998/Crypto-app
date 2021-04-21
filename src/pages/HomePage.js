import React from 'react';

import {  Header, Welcome, Roadmap, Sponsors, Benefits, Network, Wallets, Team,
          Chart,  Miner, Events, Donate, Footer } from '../components/index';

import Photo from '../assets/images/mobile.png';
import Photo2 from '../assets/images/mobile-2.png';

const HomePage = () => {
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
    </>
  )
}

export default HomePage

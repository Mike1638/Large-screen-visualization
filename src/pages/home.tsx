import React from 'react';
import './home.scss';
import imagehd from '../images/header.png'
import {Echart1} from '../components/echarts-1'
import {Echart2} from '../components/echarts-2'

export const Home = () => {
  return (
    <div className='home'>
      <header style={{backgroundImage: `url(${imagehd})`}}></header>
      <main>
      <section className='section1'>
      <Echart1 />
      <Echart2 />
      </section>
      <section className='section2 border'></section>
      <section className='section3 border'></section>
      <section className='section4 border'></section>
      <section className='section5 border'></section>
      </main>
      <footer>
        <span>大数据平台</span>
      </footer>
    </div>
  );
};


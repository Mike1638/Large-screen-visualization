import React from 'react';
import './home.scss';
import imagehd from '../images/header.png'
import {Echart1} from '../components/echarts-1'
import {Echart2} from '../components/echarts-2'
import {Echart3} from '../components/echarts-3'
import {Echart4} from '../components/echarts-4'
import {Echart5} from '../components/echarts-5'

export const Home = () => {
  return (
    <div className='home'>
      <header style={{backgroundImage: `url(${imagehd})`}}></header>
      <main>
      <section className='section1'>
      <Echart1/>
      <Echart2/>
      </section>
      <section className='section2'>
      <Echart3/>
      <Echart4/>
      </section>
      <section className='section3'>
      <Echart5/>
      </section>
      <section className='section4 border'></section>
      <section className='section5 border'></section>
      </main>
      <footer>
        <span>大数据平台</span>
      </footer>
    </div>
  );
};


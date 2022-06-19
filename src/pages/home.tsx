import React from 'react';
import './home.scss';
import "../font/iconfont.css"
import {Clock} from "../components/clock"
import {Echart1} from '../components/echarts-1'
import {Echart2} from '../components/echarts-2'
import {Echart3} from '../components/echarts-3'
import {Echart4} from '../components/echarts-4'
import {Echart5} from '../components/echarts-5'
import {Echart6} from '../components/echarts-6'
import {Echart7} from '../components/echarts-7'
import {Echart8} from '../components/echarts-8'
import {Echart9} from '../components/echarts-9'
import {Echart10} from '../components/echarts-10'
import { Echart11 } from '../components/echarts-11';
import { Echart12 } from '../components/echarts-12';
import { Echart13 } from '../components/echarts-13';
import { Chart14 } from '../components/echarts-14';
export const Home = () => {
  return (
    <div className='home'>
      <header className='border'>
        <Clock></Clock>
        <div className='name'>网络公安合成作战平台</div>
        <div className='item'>
          <span> 
             <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-weizhixiangqing"></use>
             </svg>
            Suzhou 
            </span>
          <span>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-kongqiwendu"></use>
              </svg>
            34°C 
            </span>
          <span>
             <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-qingtian"></use>
              </svg>
            Sunny
            </span>
        </div>
      </header>
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
      <section className='section4'>
      <Echart6/>
      
      <div className='年龄段分布 border'>
        <h2>兰州市犯罪人员年龄段分布</h2>
        <div className='年龄段分布三图'>
          <div className='图'><Echart7/></div>
          <div className='图'><Echart8/></div>
          <div className='图'><Echart9/></div>
        </div>
      </div>
      </section>
      <section className='section5 '>
        <div className='row1 border 案发类型'>
        <h2>案发类型统计</h2>
        <div className='charts'>
          <Echart10/>
          <Echart11/>
        </div>
        </div>
        <div className='row1 border 案发街道'>
        <h2>案发街道统计</h2>
        <div className='charts'>
          <Echart12/>
          <Echart13/>
        </div>
        </div>
        <div className='row3 border 作案手段'>
        <h2>作案手段分析</h2>
          <Chart14/>
        </div>
      </section>
      </main>
    </div>
  );
};

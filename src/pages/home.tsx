import React, { useEffect, useRef } from 'react';
import './home.scss';
import imagehd from '../images/header.png'
import * as echarts from 'echarts';
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
export const Home = () => {
  const divref = useRef(null)
  useEffect(()=>{
    var myChart = echarts.init(divref.current);
    myChart.setOption({
    textStyle:{
        color: '#575f7b'
    },
    tooltip: {},
    xAxis: {
        data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区','兰州新区','兰州新区','兰州新区'],
        axisLabel:{
          fontSize:fx(12),
          color:5e6783,
          formatter:function(val){
            if(val.length>2){
              let a = val.split('') 
              a.splice(2,0,'\n')
              let b = a.join('')
              return b
            }else{
              return val
            }
             
          }
        },
        axisTick: {
          show: false
        },
        axisLine:{
          show:true,
          lineStyle: {
            color: "rgba(7, 53, 104)"
          }
        } 
    },
    yAxis: {
      axisLabel:{
        fontSize:fx(12)
      },
      splitLine:{
        show:false
      },
      axisLine:{
        show:true,
        lineStyle: {
          color: "rgba(7, 53, 104)"
        }
      } 
    },
    series: [{
        name: '数量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20,34,45,56]
    }],
    grid: {
      left: fx(40) ,
      top: fx(40),
      bottom: fx(40),
      right: fx(40),
    },
});
  },[])
  return (
    <div className='home'>
      <header style={{backgroundImage: `url(${imagehd})`}}></header>
      <main>
      <section className='section1'>
        <div className='管辖统计 border'>
          <h2>案发派出所管辖统计</h2>
          <div  ref={divref} className="echart"></div>
        </div>
      </section>
      <section className='section2 border'></section>
      <section className='section3 border'></section>
      <section className='section4 border'></section>
      <section className='section5 border'></section>
      </main>
    </div>
  );
};


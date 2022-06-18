import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts'
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
export const Echart13 =()=>{
    const divref =useRef(null)
    const myChart =useRef(null)
    const datas = [
        {value: 0.08, name: '测试一'},
        {value: 0.06, name: '测试二'},
        {value: 0.11, name: '测试三'},
        {value: 0.09, name: '测试四'},
        {value: 0.12, name: '测试五'},
        {value: 0.06, name: '测试六'},
        {value: 0.08, name: '测试七'},
        {value: 0.08, name: '测试八'},
        {value: 0.08, name: '测试九'},
      ];
    useEffect(()=>{
      setInterval(()=>{
         const random = ()=>{
          return Math.random() /10 
         }
        const newdatas = [
          {value: random(), name: '测试一'},
          {value: random(), name: '测试二'},
          {value: random(), name: '测试三'},
          {value: random(), name: '测试四'},
          {value: random(), name: '测试五'},
          {value: random(), name: '测试六'},
          {value: random(), name: '测试七'},
          {value: random(), name: '测试八'},
          {value: random(), name: '测试九'},
        ];
    render(newdatas)
      },2500)
    },[])
    const render = (datas)=>{
      var option;
      option = {
          grid: {
              x: fx(50),
              y: fx(20),
              x2: fx(10),
              y2: fx(40),
          },
          xAxis: {
              data: datas.map(i => i.name),
              axisTick: {show: false},
              axisLine: {
                lineStyle: {color: '#083B70'}
              },
              axisLabel: {
                margin:fx(6),
                  interval:0,
                  rotate:50,
                  textStyle:{
                      color:'#6e7079',  
                      fontSize:fx(11)
                     },
                     axisTick:{
                      ailgnWithLabel:true,
                     },
              //   formatter(val) {
              //     if (val.length > 2) {
              //       const array = val.split('');
              //       array.splice(2, 0, '\n');
              //       return array.join('');
              //     } else {
              //       return val;
              //     }
              //   }
              },
            },
      
            yAxis: {
              splitLine: {show: false},
              axisLine: {
                show: true,
                lineStyle: {color: '#083B70'}
              },
              axisLabel: {
                  textStyle:{
                      color:'#6e7079',  
                      fontSize:fx(18)
                     },
                formatter(value) {
                  return (value * 100).toFixed(0) + '%';
                }
              }
            },
            series: [{
              type: 'bar',
              data: datas.map(i => i.value),
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#0A97FB'
              }, {
                offset: 1,
                color: '#1E34FA'
              }]),
            }]
      }
      option && myChart.current.setOption(option);    
    }
    useEffect(()=>{
         myChart.current = echarts.init(divref.current);
         render(datas)
    },[]) 
    return(
        <div className="row21">
        <div ref={divref} className='echart1'></div>
        </div>
    )
}
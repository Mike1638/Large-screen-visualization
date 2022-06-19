import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
export const Echart3 =()=>{
 const divref =  useRef(null)
 const myChart =  useRef(null)
 const datas =[
  {
    name: '盗窃',
    type: 'line',
    data: [0.1,0.2,0.3,0.4,0.5,0.6,0.7]
  },
  {
    name: '诈骗',
    type: 'line',
    data: [0.15, 0.36, 0.24,0.27,0.45,0.54,0.12]
  },
  {
    name: '抢劫',
    type: 'line',
    data: [0.15, 0.36, 0.24,0.27,0.25,0.54,0.12]
  },
  {
    name: '打人',
    type: 'line',
    data: [0.15, 0.36, 0.74,0.27,0.45,0.54,0.12]
  },
  {
    name: '斗殴',
    type: 'line',
    data: [0.15, 0.96, 0.34,0.27,0.45,0.54,0.12]
  },
  {
    name: '打架',
    type: 'line',
    data: [0.19, 0.36, 0.24,0.27,0.45,0.54,0.12]
    },
]
useEffect(()=>{
  setInterval(()=>{
    const random = ()=>{
      return (Math.random()).toFixed(1)
    }
    const newdatas =[
      {
        name: '盗窃',
        type: 'line',
        data: [0.1,0.2,0.3,0.4,0.5,0.6,random(),random(),random()]
      },
      {
        name: '诈骗',
        type: 'line',
        data: [0.15, 0.36,0.27,0.45,0.54,0.12,random(),random(),random()]
      },
      {
        name: '抢劫',
        type: 'line',
        data: [0.15, 0.36,0.27,0.25,0.54,0.12,random(),random(),random()]
      },
      {
        name: '打人',
        type: 'line',
        data: [0.15, 0.36,random(),random(),random(),0.27,0.45,0.54,0.12]
      },
      {
        name: '斗殴',
        type: 'line',
        data: [0.15,random(),random(),random(), 0.34,0.27,0.45,0.54,0.12]
      },
      {
        name: '打架',
        type: 'line',
        data: [Math.random(),random(),random(),0.36, 0.24,0.27,0.45,0.54,0.12]
        },
    ]
    render(newdatas)
  },2000)
},[])
const render =(datas)=>{
  myChart.current.setOption({
    legend: {
        data: datas.map(i=>i.name),
        bottom: fx(2),
        right:fx(3),
        itemWidth: fx(27),
        itemHeight: fx(12),
        textStyle:{
            color: 'white',
            fontSize:fx(16)
        }
      },
      grid: {
        left: '4%',
        right: '9%',
        bottom: '20%',
        top:'10%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        splitLine: {show: true, lineStyle: {color: '#073E78'}},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel:{
            fontSize:fx(12)
        },
      },
      yAxis: {
        type: 'value',
        splitLine: {lineStyle: {color: '#073E78'}},
        axisLabel: {
            fontSize:fx(12),
            formatter(val) {
            return (val * 100).toFixed(1) + '%';
          }
        }
      },
      series: datas.map(obj=>({
        ...obj,
        symbol: 'circle',
        symbolSize: fx(12),
        lineStyle: {width: fx(2)}
      }))
    })
}
 useEffect(()=>{
  myChart.current =echarts.init(divref.current)
   render(datas)
    },[]);
  return(
      <div className="趋势分析 border">
        <h2>发案趋势分析</h2>
        <div ref={divref} className='echart'></div>
      </div>
  )
}
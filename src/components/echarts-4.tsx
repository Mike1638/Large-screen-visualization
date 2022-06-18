import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
export const Echart4= ()=>{
    const divref = useRef(null)
    const myChart = useRef(null)
    const datas =[
      {x:'02',y:0.9},
      {x:'04',y:0.15},
      {x:'06',y:0.35},
      {x:'08',y:0.15},
      {x:'10',y:0.1},
      {x:'12',y:0.15},
      {x:'14',y:0.25},
      {x:'16',y:0.15},
      {x:'18',y:0.15},
      {x:'20',y:0.15},
      {x:'22',y:0.20},
      {x:'24',y:0.15},
    ]
    useEffect(()=>{
     setInterval(()=>{
      const random = ()=>{
        return Math.random()
      }
      const newdatas =[
        {x:'02',y:random()},
        {x:'04',y:random()},
        {x:'06',y:random()},
        {x:'08',y:random()},
        {x:'10',y:random()},
        {x:'12',y:random()},
        {x:'14',y:random()},
        {x:'16',y:random()},
        {x:'18',y:random()},
        {x:'20',y:random()},
        {x:'22',y:random()},
        {x:'24',y:random()},
      ]
        render(newdatas)
     },2000)
    },[])
    const render =  (datas)=>{
      var option;
      option = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {show: true,lineStyle: {color: '#073E78'}},
        data: datas.map(i=>i.x),
        axisTick:{
            show:false
        },
        axisLine:{
            show:false
        },
        axisLabel: {
            fontSize:fx(12),
        }   
        
      },
      grid: {
        left: '3%',
        right: '9%',
        bottom: '10%',
        top:'10%',
        containLabel: true
      },
      yAxis: {
        type: 'value',
        splitLine: {show: true,lineStyle: {color: '#073E78'}},
        fontSize:fx(12),
        axisLabel: {
            fontSize:fx(10),
            formatter(val) {
            return val * 100 + '%';
          }
        }
         },
      series: [
        {
          data:datas.map(i=>i.y),
          symbol: 'circle',
          symbolSize: fx(12),
          lineStyle: {width: fx(2)},
          type: 'line',
          areaStyle: {}
        }
      ]
    };
    
    option && myChart.current.setOption(option);
    }
    useEffect(()=>{
     myChart.current = echarts.init(divref.current)
     render(datas)
    },[])
    return (
        <div className="时段分析 border">
            <h2>案发时段分析</h2>
            <div ref={divref} className='echart'></div>
        </div>
    )
}
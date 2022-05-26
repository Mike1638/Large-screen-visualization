import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
export const Echart4= ()=>{
    const divref = useRef(null)
    useEffect(()=>{
     var myChart = echarts.init(divref.current)
     var option;
option = {
  xAxis: {
    type: 'category',
    boundaryGap: false,
    splitLine: {show: true,lineStyle: {color: '#073E78'}},
    data: ['02','04','06','08','10','12','14','16','18','20','22','24'],
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
      data: [0.15,0.18,0.26,0.23,0.16,0.13,0.13,0.28,0.18,0.23,0.23,0.13],
        symbol: 'circle',
        symbolSize: fx(12),
        lineStyle: {width: fx(2)},
      type: 'line',
      areaStyle: {}
    }
  ]
};

option && myChart.setOption(option);
    },[])
    return (
        <div className="时段分析 border">
            <h2>案发时段分析</h2>
            <div ref={divref} className='echart'></div>
        </div>
    )
}
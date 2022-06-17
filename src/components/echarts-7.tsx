import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
const colors =['#8D70F8', '#33A4FA']
export const Echart7 = ()=>{
const divref = useRef(null)
useEffect(()=>{
    var myChart = echarts.init(divref.current);
    var option;
     option = {
        color: colors ,
        xAxis: {show: false},
        yAxis: {show: false},
        legend: {show: false},
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['65%', '80%'],
            avoidLabelOverlap: false,
            label: {
              show: true, position: 'inside', textStyle: {color: 'white', fontSize: fx(20)},
              formatter(options) {
                return options.value * 100 + '%';
              }
            },
            labelLine: {show: false},
            itemStyle: {
              borderColor: '#0F113A',
              borderWidth: fx(4)
            },
            data: [
              {value: 0.8, name: '男'},
              {value: 0.2, name: '女'},
            ]
          }
        ]
      
    }
    option && myChart.setOption(option);
},[])
    return (
      <div className="legendwrapper">
        <div ref={divref}  className="chart"></div>
        <div className='legendname'>性别</div>
        <div className="legend">
          <span style={{background:colors[0]}}></span>男
          <span style={{background:colors[1]}}></span>女
        </div>
      </div>
    )
}
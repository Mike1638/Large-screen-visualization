import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
export const Echart2  =()=>{
const divref = useRef(null)
const myChart = useRef(null)
const datas =[ 
  {name:'测试八区公安局',2020:2,2021:3},
  {name:'测试七区公安局',2020:2,2021:3},
  {name:'测试六区公安局',2020:2,2021:3},
  {name:'测试五区公安局',2020:2,2021:3},
  {name:'测试四区公安局',2020:2,2021:3},
  {name:'测试三区公安局',2020:2,2021:3},
  {name:'测试二区公安局',2020:2,2021:3},
  {name:'测试一区公安局',2020:2,2021:3},
]
useEffect(()=>{
  setInterval(()=>{
    const newdatas =[ 
      {name:'测试八区公安局',2020:Math.random()*10,2021:3},
      {name:'测试七区公安局',2020:2,2021:4},
      {name:'测试六区公安局',2020:2,2021:3},
      {name:'测试五区公安局',2020:Math.random()*10,2021:3},
      {name:'测试四区公安局',2020:2,2021:3},
      {name:'测试三区公安局',2020:2,2021:Math.random()*10},
      {name:'测试二区公安局',2020:2,2021:3},
      {name:'测试一区公安局',2020:Math.random()*10,2021:3},
    ]
    render(newdatas)
  },3000)
},[])
const render = (datas)=>{
  var option;
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '6%',
      right: '4%',
      bottom: '12%',
      top:'5%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLabel:{
          show:false,
          fontSize:fx(12)
      },
      splitLine:{
          show:false
        },
    },
    yAxis: {
      type: 'category',
      data: datas.map(i=>i.name),
      axisLabel:{
          fontSize:fx(12),
          formatter:function(val){
             return val.replace('公安局','\n公安局')  
            }
      },
      axisTick: {
          show: false
        },
    },
    series: [
      {
        type: 'bar',
        data: datas.map(i=>i[2020]),
        itemStyle:{
          color:new echarts.graphic.LinearGradient(0,0,1,0,[
            {offset:0,
              color:'#1f33f9'
            },
            {offset:1,
              color:'#039efd'
            },
          ])
        }
      },
      {
        type: 'bar',
        data: datas.map(i=>i[2021]),
        itemStyle:{
          color:new echarts.graphic.LinearGradient(0,0,1,0,[
            {offset:0,
              color:'#b929e8'
            },
            {offset:1,
              color:'#636fdf'
            },
          ])
        }
      }
    ]
  };
  option && myChart.current.setOption(option);
}
useEffect(()=>{
  myChart.current =echarts.init(divref.current)
    render(datas)
},[])
    return (
    <div className='破获排名 border'>
    <h2>案件破获排名</h2>
    <div ref={divref}  className='echart'>
    </div>
    <span className="papm1">
      <div className="papm11"></div> 
      <div>破案排名1</div>
      </span>
    <div className="papm2">
      <div className="papm22"></div>
      <div>破案排名2</div> 
      </div>
    </div>
    )
}
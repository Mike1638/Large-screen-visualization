import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts'
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
export const Echart12 =()=>{
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
      return parseFloat((Math.random()* 1000 / 10000).toString()).toFixed(3)  
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
  },2000)
  },[])
  const render = (datas)=>{
    var option;
        option = {
            grid: {
                x: fx(50),
                y: fx(20),
                x2: fx(20),
                y2: fx(30),
                containLabel: true
            },
            xAxis: {show: false},
      yAxis: {show: false},
      legend: {
        orient: 'vertical',
        left: 'left',
        top: 'center',
        padding:[fx(20),fx(0),fx(0),fx(30)],
        textStyle: {
            color: 'white',
            fontSize: fx(11)
        },
        itemWidth: fx(10),
        itemHeight: fx(10),
        formatter(name) {
          const value = (datas.find(i => i.name === name)?.value * 100).toFixed(1)  + '%';
          return name + ' ' + value;
        }
      },
      series: [
        {
          center: ['60%', '50%'],
          type: 'pie',
          radius: '80%',
          label: {show: false},
          labelLine: {show: false},
          data: datas,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
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
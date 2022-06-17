import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts'
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
export const Echart12 =()=>{
    const divref =useRef(null)
    const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
  const data = [
    {value: 0.08, name: '东岗路'},
    {value: 0.06, name: '段家滩'},
    {value: 0.11, name: '雁北'},
    {value: 0.09, name: '五泉山'},
    {value: 0.12, name: '中山路'},
    {value: 0.06, name: '庆阳路'},
    {value: 0.08, name: '武都路'},
    {value: 0.08, name: '酒泉路'},
    {value: 0.08, name: '天水路'},
  ];
    useEffect(()=>{
        var myChart = echarts.init(divref.current);
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
          const value = data.find(i => i.name === name)?.value * 100 + '%';
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
          data: data,
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
        option && myChart.setOption(option);    
    },[]) 
    return(
        <div className="row21">
            <div ref={divref} className='echart1'></div>
        </div>
    )
}
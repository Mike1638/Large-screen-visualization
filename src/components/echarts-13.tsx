import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts'
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
export const Echart13 =()=>{
    const divref =useRef(null)
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
                x2: fx(10),
                y2: fx(40),
            },
            xAxis: {
                data: data.map(i => i.name),
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
                data: data.map(i => i.value),
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#0A97FB'
                }, {
                  offset: 1,
                  color: '#1E34FA'
                }]),
              }]
        }
        option && myChart.setOption(option);    
    },[]) 
    return(
        <div className="row21">
        <div ref={divref} className='echart1'></div>
        </div>
    )
}
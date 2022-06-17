import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts'
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}

export const Echart10 =()=>{
    const divref =useRef(null)
    useEffect(()=>{
        var myChart = echarts.init(divref.current);
        var option;
        option = {
            grid: {
                x: fx(50),
                y: fx(20),
                x2: fx(20),
                y2: fx(45),
            },
            color: '#F7A110',
            xAxis: {
                data: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
                axisTick: {show: false},
                axisLine: {
                  lineStyle: {color: '#083B70'}
                },
               
                axisLabel: {
                    color: '#6e7079',
                    interval:0,
                    textStyle:{
                     color:'#6e7079',  
                     fontSize:fx(13)
                    },
                  formatter(val) {
                    if (val.length > 2) {
                      const array = val.split('');
                      array.splice(2, 0, '\n');
                      return array.join('');
                    } else {
                      return val;
                    }
                  }
                },
              },
        
              yAxis: {
                splitLine: {show: false},
                axisLabel:{
                        textStyle:{
                         color:'#6e7079',  
                         fontSize:fx(18)
                        },
                    }   ,
                axisLine: {
                  show: true,
                  lineStyle: {color: '#083B70'}
                }
              },
              series: [{
               
                type: 'bar',
                data: [40, 22, 20, 18, 32],
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
        <div ref={divref} className='echart'></div>
    )
}
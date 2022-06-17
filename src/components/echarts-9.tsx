import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts'
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
export const Echart9 = ()=>{
    const divref = useRef(null)
    useEffect(()=>{
        var myChart = echarts.init(divref.current);
        var option;
        option = {
            grid: {
                x: fx(50),
                y: fx(20),
                x2: fx(20),
                y2: fx(30),
            },
            color: '#F7A110',
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: [0, 18, 28, 38, 48, 58, 68, 78],
              splitLine: {show: true, lineStyle: {color: '#073E78'}},
              axisTick: {show: false},
              axisLine: {show: false},
              axisLabel:{
                interval:0,
                textStyle:{
                 fontSize:fx(12)
                }
              },
            },
            yAxis: {
              type: 'value',
              splitLine: {lineStyle: {color: '#073E78'}},
              nameTextStyle:{fontSize :fx(6)},
              axisLabel: {
                formatter(val) {
                  return val * 100 + '%';
                },
                textStyle:{
                  fontSize:fx(12)
                 }
              },
            },
            series: [{
              type: 'line',
              data: [
                0.19, 0.20, 0.26,
                0.35, 0.26, 0.20,
                0.08, 0.06
              ],
              symbol: 'circle',
              symbolSize: fx(12),
              lineStyle: {width: fx(2)},
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#F7A110'
                }, {
                  offset: 1,
                  color: '#1B1D52'
                }]),
              }
            }]
          }
        
        option && myChart.setOption(option);    


    },[])
    return (
      <div className="犯罪年龄">
        <div className="border">
            <h2>犯罪年龄趋势图</h2>
        </div>
            <div ref={divref} className='echart'></div>
      </div>
    )
}
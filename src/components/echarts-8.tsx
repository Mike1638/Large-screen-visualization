import React, { useEffect, useRef } from "react";
import * as echarts from "echarts"
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
const  colors= ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA']
export const Echart8 = ()=>{
    const divref = useRef(null)
    useEffect(()=>{
    var myChart = echarts.init(divref.current);
    var option;
     option = {
        color:colors,
        xAxis: {show: false},
        yAxis: {show: false},
        legend: {show: false},
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['75%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: true, position: 'inside', textStyle: {color: 'white', fontSize: fx(20)},
              formatter(options) {
                 let  num =  ((options.value).toFixed(2)*100).toString()
                return parseInt(num)+'%';
              }
            },
            labelLine: {show: false},
            itemStyle: {
              borderColor: '#0F113A',
              borderWidth: fx(4)
            },
            data: [
              {value: 0.07, name: '10-20'},
              {value: 0.1, name: '20-30'},
              {value: 0.23, name: '30-40'},
              {value: 0.28, name: '40-50'},
              {value: 0.32, name: '50-60'},
            ]
          }
        ]
      
    }
    option && myChart.setOption(option);
    },[])

    return (
      <div className="agewrapper">
        <div ref={divref} className="echart"></div>
        <div className="agegroup">年龄段</div>
        <div className="age">
          <span style={{background: colors[0]}}></span> 10-20
          <span style={{background: colors[1]}}></span> 20-30
          <span style={{background: colors[2]}}></span> 30-40
          <span style={{background: colors[3]}}></span> 40-50
          <span style={{background: colors[4]}}></span> 50-60
        </div>
      </div>
    )
}
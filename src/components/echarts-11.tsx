import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts'
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
export const Echart11 =()=>{
    const divref =useRef(null)
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
            color: colors,
            xAxis: {show: false},
            yAxis: {show: false},
            legend: {show: false},
            series: [
              {
                startAngle: -20,
                type: 'pie',
                radius: ['25%', '90%'],
                avoidLabelOverlap: false,
                label: {
                  show: true, position: 'outside', textStyle: {color: 'white', fontSize: fx(20)},
                  distanceToLabelLine: 0,
                  formatter(options) {
                    return options.value * 100 + '%';
                  }
                },
                labelLine: {show: true, length: 0},
                roseType: 'area',
                itemStyle: {
                  shadowBlur: fx(200),
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                data: [
                  {value: 0.36, name: '刑事案件'},
                  {value: 0.20, name: '民事案件'},
                  {value: 0.18, name: '经济案件'},
                  {value: 0.24, name: '其他案件'},
                ]
              }
            ]
        }
        option && myChart.setOption(option);    
    },[]) 
    return(
        <div className="row12">
            <div ref={divref} className='echart1'></div>
            <div className="row12anjian">
                <span style={{background:colors[0]}}></span>刑事
                <span style={{background:colors[1]}}></span>民事
                <span style={{background:colors[2]}}></span>经济
                <span style={{background:colors[3]}}></span>其他
            </div>
        </div>
    )
}
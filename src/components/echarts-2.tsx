import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
export const Echart2  =()=>{
const divref = useRef(null)
useEffect(()=>{
    var myChart = echarts.init(divref.current);
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
        data: ['七里河区公安局','城关区公安局','城关区公安局','城关区公安局','城关区公安局','城关区公安局','城关区公安局','城关区公安局','城关区公安局', ],
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
          data: [118203, 123489, 229034, 104970, 131744, 630230,234223,345343,534555],
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
          data: [119325, 223438, 331000, 521594, 134141, 681807,634223,341343,534355],
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
    option && myChart.setOption(option);
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
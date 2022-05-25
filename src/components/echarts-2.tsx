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
        data: ['城关区公安局','城关区公安局','城关区公安局','城关区公安局','城关区公安局','城关区公安局','城关区公安局','城关区公安局','城关区公安局', ],
        axisLabel:{
            fontSize:fx(12),
            formatter:function(val){
                if(val.length>3){
                  let a = val.split('') 
                  a.splice(3,0,'\n')
                  let b = a.join('')
                  return b
                }else{
                  return val
                }
                 
              }
        },
        axisTick: {
            show: false
          },
      },
      series: [
        {
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230,234223,345343,534555]
        },
        {
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807,634223,341343,534355]
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
import React, { useEffect, useRef } from "react"
import * as echarts from 'echarts';
export const Echart7 = ()=>{
const divref = useRef(null)
useEffect(()=>{
    var myChart = echarts.init(divref.current);
    var option;
     option = {
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    };

    option && myChart.setOption(option);
},[])
    return (
        <div ref={divref}></div>
    )
}
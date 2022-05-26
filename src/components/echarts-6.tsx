import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts';
import chinageo from '../geo/chinageo.json'

const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}

export const Echart6 = ()=>{
    const divref = useRef(null)
    useEffect(()=>{
    var myChart = echarts.init(divref.current)
    const colors = {'青海省': '#BB31F7', '甘肃省': '#15B8FD', '四川省': '#06E1EE'};
    // @ts-ignore
    echarts.registerMap('CN', chinageo);
    myChart.setOption({
        xAxis: {show: false},
        yAxis: {show: false},
        series: [
          {
            type: 'map',
            mapType: 'CN', // 自定义扩展图表类型
            data: [
              {name: '甘肃省', value: 1},
            ],
            label: {show: false, color: 'white'},
            itemStyle: {
              areaColor: '#010D3D',
              color: colors['甘肃省'],
              borderColor: '#01A7F7',
              emphasis: {
                label: {color: 'white'},
                areaColor: '#5470C6',
              },
            }
          },
          {
            type: 'map',
            mapType: 'CN', // 自定义扩展图表类型
            data: [
              {name: '四川省', value: 100},
            ],
            itemStyle: {
              areaColor: '#010D3D',
              color: colors['四川省'],
              borderColor: 'yellow',
              emphasis: {
                label: {color: 'white'},
                areaColor: '#5470C6',
              },
            }
          },
          {
            type: 'map',
            mapType: 'CN', // 自定义扩展图表类型
            data: [
              {name: '青海省', value: 100},
            ],
            itemStyle: {
              areaColor: '#010D3D',
              color: colors['青海省'],
              borderColor: '#01A7F7',
              emphasis: {
                label: {color: 'white'},
                areaColor: '#5470C6',
              },
            }
          },
  
        ]
      });
    },[])

    return (
        <div className="大地图 border">
            <h2>全兰州市犯罪人员籍贯分布地</h2>
            <div ref={divref} className="echart">
            </div>
        </div>
    )
}
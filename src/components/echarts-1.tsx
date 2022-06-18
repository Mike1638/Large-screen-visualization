import * as echarts from 'echarts'
import React,{ useEffect, useRef } from 'react'
const fx=(n)=>{return  n/ 2420 * (window as any).pagewidth}
export const  Echart1 =()=> { 
  const divref = useRef(null)
  const myChart = useRef(null)
  const datas = [
    {name:'测试一区',number:15},
    {name:'测试二区',number:25},
    {name:'测试三区',number:35},
    {name:'测试四区',number:25},
    {name:'测试五区',number:25},
    {name:'测试六区',number:45},
    {name:'测试七区',number:25},
    {name:'测试八区',number:5},
    {name:'测试九区',number:25},
  ]
  useEffect(()=>{
     setInterval(()=>{
      const random = ()=>{
           return Math.random() * 50  
      }
      const newdatas = [
        {name:'测试一区',number:random()},
        {name:'测试二区',number:random()},
        {name:'测试三区',number:random()},
        {name:'测试四区',number:random()},
        {name:'测试五区',number:random()},
        {name:'测试六区',number:random()},
        {name:'测试七区',number:random()},
        {name:'测试八区',number:random()},
        {name:'测试九区',number:random()},
      ]
      render(newdatas)
     },3000)
  },[])
  const render = (datas)=>{
    myChart.current.setOption({
      textStyle:{
          color: '#575f7b'
      },
      tooltip: {},
      xAxis: {
          data: datas.map(i=>i.name),
          axisLabel:{
            fontSize:fx(12),
            color:5e6783,
            formatter:function(val){
              if(val.length>2){
                let a = val.split('') 
                a.splice(2,0,'\n')
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
          axisLine:{
            show:true,
            lineStyle: {
              color: "rgba(7, 53, 104)"
            }
          } 
      },
      yAxis: {
        axisLabel:{
          fontSize:fx(12)
        },
        splitLine:{
          show:false
        },
        axisLine:{
          show:true,
          lineStyle: {
            color: "rgba(7, 53, 104)"
          }
        } 
      },
      series: [{
          name: '数量',
          type: 'bar',
          data: datas.map(i=>i.number)
      }],
      grid: {
        left: fx(50) ,
        top: fx(40),
        bottom: fx(60),
        right: fx(30),
      },
  })
 
 }
 useEffect(()=>{
  myChart.current = echarts.init(divref.current);
  render(datas)
 },[]);
  return  (
  <div className='管辖统计 border'>
  <h2>案发派出所管辖统计</h2>
  <div ref={divref} className='echart'></div>
</div>
); 
}

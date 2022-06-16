//import react from "react";

import ChartBar from "./ChartBar";
import './chart.css'

const Chart=(props)=>{
const dataMaxValue=props.dataPoint.map((maxvalue)=> maxvalue.value)
const maxofarr=Math.max(...dataMaxValue);
  return (
    <div className="chart">
        
        {props.dataPoint.map((dataPoint)=> <ChartBar
         value={dataPoint.value} 
         label={dataPoint.label} 
         key={dataPoint.label} 
         maxValue={maxofarr} />)}
    </div>
  )


}

export default Chart;

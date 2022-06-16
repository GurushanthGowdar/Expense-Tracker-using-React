//import react from "react";
import './chartBar.css';


const ChartBar=(props)=>{


let charBarFilling='0%';
if(props.maxValue > 0){
    charBarFilling=Math.round((props.value/props.maxValue)*100)+'%';
}

return (
   <div className="chart-bar">
    <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height:charBarFilling}}></div>
    </div>
    <div className="chart-bar__label">{props.label}</div>

   </div>
)



}

export default ChartBar;
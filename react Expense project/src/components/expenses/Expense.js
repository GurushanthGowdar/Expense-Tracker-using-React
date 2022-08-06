import React from "react"
// import ExpensesFilter from "../newExpense/ExpensesFilter"
import "./expense.css"
import Dym from "./dym"
import Card from "../UI/card"

function Expense(props){
  // const [title,setTitle]=useState(props.title);
   //const [updatedTitle,setupdatedTitle]=useState(props.title);
   //const clickHandler= () => {
    //setTitle('updated!!!!!');
//    }
    
//    const  SelectedDate=(dateValue)=>{
//     console.log(dateValue);
//     setSelectedDate(dateValue);
//    }

  return  (
        <div>
        {/* <ExpensesFilter SelectedValue={SelectedDate} selected={dateValues} /> */}
        <Card className='expense-item'>
            
          <Dym date={props.date}> </Dym>
           <div className='expense-item__description' >
               <h2 >{props.title}</h2>
         
         <div className="expense-item__price ">{props.amount}</div>
           {/* <button onClick={clickHandler}>click me </button> */}
              

           </div>


    </Card>  
    </div>
)}

export default Expense;

import Expense from "./Expense"
import React,{useState} from "react";
import ExpensesFilter from "../newExpense/ExpensesFilter";
import "./NewExpenses.css";
//import Chart from "../chart/Chart";
import ExpenseChart from "./ExpenseChart";


function NewExpenses(props){
  const [dateValues,setSelectedDate]=useState("2020");
  //const [expenses,setExpenses]= useState(props.items);
  
  const  SelectedDate=(dateValue)=>{
    console.log(dateValue);
    setSelectedDate(dateValue);
    
   }

   const filteredExpenses=props.items.filter((expense) =>{
    return expense.date.getFullYear().toString()===dateValues;
   })   
   console.log(filteredExpenses);
   
   let datapointArr=[{label:'jan',value:0},
   {label:'feb',value:0},
   {label:'mar',value:0},
   {label:'apr',value:0},
   {label:'may',value:0},
   {label:'june',value:0},
   {label:'july',value:0},
   {label:'aug',value:0},
   {label:'sept',value:0},
   {label:'oct',value:0},
   {label:'nov',value:0},
   {label:'dec',value:0}]

   for(const expense of filteredExpenses){
    const expenseMonth=expense.date.getMonth();
    datapointArr[expenseMonth].value+=expense.amount;
   }
        return (
        
             <div>
          <ExpenseChart dataPoint={datapointArr}></ExpenseChart>
          
          <ExpensesFilter  SelectedValue={SelectedDate} selected={dateValues} />
          {filteredExpenses.length===0 && <p className="content-para">No Data Found for the selected year</p>}
          {filteredExpenses.length>0 && filteredExpenses.map( (Nowexpenses)=> (<Expense
            key={Nowexpenses.id}
            title={Nowexpenses.title}
            amount={Nowexpenses.amount}
            date={Nowexpenses.date} >
            </Expense>)
          )}

{/* 
      <Expense title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} ></Expense>
      <Expense title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} ></Expense>
      <Expense title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} ></Expense>
      <Expense title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date} ></Expense> */}
      {/* <Expense title={props.items[4].title} amount={props.items[4].amount} date={props.items[4].date} ></Expense> */}
      </div>
    )
}

export default NewExpenses;


import React,{useState} from "react";
import NewFormExpense from "./components/newExpense/NewExpense"
import NewExpenses from "./components/expenses/NewExpenses"
//import Chart from "./components/chart/Chart";



const dumy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

console.log(dumy_expenses)

function App(){
   const [expenses,setExpenses]=useState(dumy_expenses)    
   
   const ExpenseToAdd=(DataToBeAdd)=> {
      setExpenses((prevexpenses) => {
        //dumy_expenses.push(DataToBeAdd);
       return [DataToBeAdd,...prevexpenses]
      });

      console.log(expenses);
   }

// const NewExpeneseUpdater=()=>{
//   return (
    // <div>
    // <NewFormExpense OnSaveNewExpense={ExpenseToAdd}></NewFormExpense>
    // </div>
    
//   )
// } 

  // const clickHandle=()=>{
  //   console.log('hello');
    
  // }

  return (
    <div>
      {/* <h1>hello world</h1>
      <p>Mahadeva Sab ke dev</p>
      <h2>Mahadeva Sab ke satt ye </h2> */}
           
    <NewFormExpense OnSaveNewExpense={ExpenseToAdd}></NewFormExpense>
    
    <NewExpenses items={expenses} ></NewExpenses>
      {/* <Expense title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date} ></Expense> */}
       
      </div>
  )
}

export default App;
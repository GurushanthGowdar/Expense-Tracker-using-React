import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm"; 




const NewFormExpense=(props)=> {
     const [isClicked,setClicked]=useState(false); 
     const SaveExpenseForm=(updatedExpenseValue) => {
        const ExpenseValue={...updatedExpenseValue,id:Math.random().toString()}
        console.log(ExpenseValue);
        setClicked(false);
        props.OnSaveNewExpense(ExpenseValue);
      }
      const NewExpeneseUpdater=()=>{
        setClicked(true);
      }

      const cancelHandler=()=> {
        setClicked(false);
      }

    return (<div className="new-expense">
      {!isClicked && <button onClick={NewExpeneseUpdater}>add new expense</button>}
      {isClicked && <ExpenseForm  onSaveExpenseForm={SaveExpenseForm}  onCancel={cancelHandler} />}


    
    </div>)
}

export default NewFormExpense;
import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm=(props) => {
    const [enteredtitle,setenteredtitle]=useState('');
    const [entereddate,setentereddate]=useState('');
    const [enteredamount,setenteredamount]=useState('');
    // const [userInput,setUSerInput]=useState({
    //     enteredtitle:'',
    //     entereddate:'',
    //     enteredamount:''
    // }) 
     
    const titlechange=(evt)=>{
        //console.log(evt.target.value);
        setenteredtitle(evt.target.value);
        // setUSerInput((prvstate)=> {
        //  return {...prvstate,enteredtitle:evt.target.value}
        // })
        //     {
        //     ...userInput,
        //     enteredtitle:evt.target.value
        // }
        
    }
    
    const datechange=(evt)=>{
        //console.log(evt.target.value);
        setentereddate(evt.target.value);
        // setUSerInput({
        //     ...userInput,
        //     entereddate:evt.target.value
        // })
    }
    const amountchange=(evt)=>{
        //console.log(evt.target.value);
        setenteredamount(evt.target.value);
        // setUSerInput({
        //     ...userInput,
        //     enteredamount:evt.target.value
        // })   
    }
    const SubmitHandler=(evt)=> {
        evt.preventDefault();
        const expenses={
            title:enteredtitle,
            amount:enteredamount,
            date:new Date(entereddate)
        }
        setenteredamount('');
        setentereddate('');
        setenteredtitle('');
        //console.log(expenses);
        props.onSaveExpenseForm(expenses);
    }
     
    return (
        <form onSubmit={SubmitHandler}>

            <div className="new-expense_controls" >
                <label htmlFor="title">title</label>
                <input type="text" id="title" value={enteredtitle} placeholder="Enter the title" onInput={titlechange}/>
            </div>
            
            <div className="new-expense_controls">
                <label htmlFor="date">date</label>
                <input type="date" id="date" value={entereddate} placeholder="select a date" onInput={datechange} />
            </div>
            
            <div className="new-expense_controls">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" value={enteredamount} placeholder="Enter the amount" onInput={amountchange}/>
            </div>
            <div className=".new-expense__actions">
                <button type="submit">update</button>
                <button type="submit" onClick={props.onCancel}>cancel</button>
            </div>
        
        </form>
    )
}

export default ExpenseForm;
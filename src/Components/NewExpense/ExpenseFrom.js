
import { useState } from "react";
import "./ExpenseFrom.css";

function ExpenseFrom(props){
    const [prevtitle,setTitle]=useState('');
    const [prevamount,setamount]=useState('');
    const [prevdate,setdate]=useState('');
   const clickHandler=(event)=>{
        setTitle(event.target.value);
        console.log(prevtitle);
    }
    function clickHandler1(event){
        setamount(event.target.value);
        console.log(prevamount);
    }
    const clickHandler2=function (event) {
        setdate(event.target.value);
        console.log(event.target.value)
    }
     const submitHandler=(event)=>{
        event.preventDefault();
        const obj={
            title:prevtitle,
            amount:prevamount,
            date:prevdate
        }
        props.onSaveExpenseData(obj)
        setTitle("");
        setamount("");
        setdate("");
      }
    return (
        <form className="new-expense__controls" onSubmit={submitHandler}>
            <div className="new-expense__controls">
             <div className="new-expense__controls">   
            <label className="new-expense__control label">Title</label>
                <input  className="new-expense__control input" type="text" value={prevtitle} onChange={clickHandler} />
            </div>
            <div className="new-expense__controls">   
            <label className="new-expense__control label">Amount</label>
                <input  className="new-expense__control input" type="number" value={prevamount} min="0.01" step="0.01" onChange={clickHandler1} />
            </div>
            <div className="new-expense__controls">   
            <label className="new-expense__control label">Date</label>
                <input  className="new-expense__control input" type="date" min="2019-01-01" max="2023-12-31" value={prevdate} onChange={clickHandler2}/>
            </div>
            <div className="new-expense__actions">
            <button>ADD EXPENSE</button>
           </div> 
           </div>
        </form>
     )
}
 export default ExpenseFrom;
import "./NewExpense.css";
import ExpenseFrom from "./ExpenseFrom.js";
function NewExpense(props){
   const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onSaveExpense(expenseData)
    } 

    return(<div className="new-expense">
     <ExpenseFrom  onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>)
}
export  default NewExpense;
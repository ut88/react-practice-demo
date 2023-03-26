import ExpenseDate from './ExpenseDate';
import Card from './Card';
import React,{ useState } from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // const [title,setTitle]=useState(props.title);
  const [amount,setamount]=useState(props.amount);
    function clickHandler(){
        // setTitle("Update!");
        setamount(100);
        // console.log(title);
    }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js';
import React,{ useState } from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [amount,setamount]=useState(props.amount);
    function clickHandler(){
        setamount(100);
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
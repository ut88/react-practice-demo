import { useState } from "react";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card.js';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const filterExpense=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })
  return (<div>
    
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {filterExpense.map(expense=><ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />)}
    </Card>
    </div>
  );
}

export default Expenses;
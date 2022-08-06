
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import React, { useState } from 'react';

function Expenses (props){
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
       setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

  console.log(filteredExpenses);
    return (
    <div>
    <div className="expenses">
    <ExpensesFilter 
    selected={filteredYear} 
    onChangeFilter = {filterChangeHandler}
     />

    {/* {expensesContent} */}
    <ExpensesList items={filteredExpenses} />

</div>
    </div>
   ); 
};

export default Expenses;
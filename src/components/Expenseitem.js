import ExpenseDate from './ExpenseDate';

import './Expenseitem.css';
import React from 'react';

function Expenseitem(props) {
  
    return (  
        <li>
        <div className="expense-item">
           <ExpenseDate  date={props.date}/>
        <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
    
        </div>
        </li>
    );
    
}

export default Expenseitem;
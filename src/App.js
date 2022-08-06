import React, { useState } from "react";

import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
  id: 'e1', 
  title: 'Toilet Paper',
  amount: 94.12,
  date: new Date(2020, 7, 14)},
  {
  id: 'e2', 
  title: 'New TV',
  amount: 294.67,
  date: new Date(2021, 2, 28)},
  {
  id: 'e3', 
  title: 'Car Insurance',
  amount: 894.67,
  date: new Date(2021, 2, 12)},
  {
  id: 'e4', 
  title: 'New Desk(Wooden)',
  amount: 494.67,
  date: new Date(2021, 2, 28)},
];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

const addExpenseHandler = (expense) => {
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
  });
};

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get Started"),
  //   React.createElement(Expenses, { items: expenses})
  // );

  return (
   <div>
    <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses}/>

   </div>
  );
}

export default App;

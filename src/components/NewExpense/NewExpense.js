import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
       const expenseDataSubmitedHandler = (enteredExpenseData)=> {

        // Convert the date string to a JavaScript Date object
    const date = new Date(enteredExpenseData.date);
    const amount = parseInt(enteredExpenseData.amount)
    console.log(amount, 'amount');
      //pass in expenseData
 const expenseData = {
    ...enteredExpenseData,
    amount: amount, 
    date: date,
    id:Math.random().toString()
}
props.onAddExpense(expenseData)
console.log(expenseData, 'new expense data');
       };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {expenseDataSubmitedHandler}/>
        </div>
    );
};

export default NewExpense;
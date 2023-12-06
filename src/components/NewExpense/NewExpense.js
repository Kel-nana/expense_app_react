import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
       const expenseDataSubmitedHandler = (enteredExpenseData)=> {
        //pass in expenseData
 const expenseData = {
    ...enteredExpenseData, 
    id:Math.random().toString()
}
console.log(expenseData, 'new expense data');
       };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {expenseDataSubmitedHandler}/>
        </div>
    );
};

export default NewExpense;
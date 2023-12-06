import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    // Define a state object to store user input for title, amount, and date
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

   // Event handler for changing the title input field Depending on previous statev 
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });   
  };

   // Event handler for changing the amount input field
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    }); 
  };

   // Event handler for changing the date input field
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };
  
  // Event handler for submitting the form
  const submitHandler = (event) => {
    event.preventDefault();  

    // Create an object to sto re the user's input data
    const expenseData = { 
      ...userInput,
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData); 
    // clear input field
    setUserInput({
      title: "",
      amount: "",
      date: "",
    })
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
          type="text" 
          value={ userInput.title } 
          onChange={titleChangeHandler} 
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={ userInput.amount }
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={ userInput.date }
            min="2019-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
 
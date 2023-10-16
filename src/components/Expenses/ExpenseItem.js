import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2023, 6, 6);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;
  // const month = props.date.toLocaleString('en-US', { month: 'long' });
  // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  // const year = props.date.getFullYear();
  const [title, setTitle] = useState(props.title);
  console.log("expenseitem evaluated ");
  const clickHandler = () => {
    setTitle("Updated!");
    console.log("individual expenseitem evaluated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change</button>
    </Card>
  );
};

export default ExpenseItem;

// import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // Define a state variable 'title' and initialize it with the 'title' prop
  // const [title, setTitle] = useState(props.title);

  // Event handler for changing the title when the "change" button is clicked
  // const clickHandler = () => {
  //   setTitle("Updated!");
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}; 

export default ExpenseItem;

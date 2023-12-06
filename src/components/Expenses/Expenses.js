import React, { useState } from "react";
import ExpenseFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  // Filter data based on year and pass it through props to ExpenseList
  const filteredExpenses = props.items.filter((expenses)=> {
    console.log(expenses.date.getFullYear().toString(), 'filtered data')
    return expenses.date.getFullYear().toString() === filteredYear
    
  })


const filterChangeHandler = selectedYear => {
  setFilteredYear(selectedYear)
}
console.log(filteredYear)
// line 18 unique id for added items
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter> 
      <ExpenseList items= {filteredExpenses}/>
    </Card>
  );
};

export default Expenses;

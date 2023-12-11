import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {

    console.log(props.expenses, 'chart data');
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];
//for of loops for arrays
//for in loops for objects  
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); 
    console.log(expenseMonth, 'month value');
    chartDataPoints[expenseMonth].value += expense.amount;
  }
//   console.log(chartDataPoints, 'chart data points');
 
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
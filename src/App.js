import React from "react";
import ExpenseItem from "./components/ExpenseItem";
import "./components/ExpenseItem.css";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Book",
      amount: 82.4,
      date: new Date(2020, 9, 30),
    },
    {
      id: "e2",
      title: "Monitor",
      amount: 832.22,
      date: new Date(2021, 4, 20),
    },
    {
      id: "e3",
      title: "Android Mobile",
      amount: 98.35,
      date: new Date(2021, 2, 5),
    },
    {
      id: "e4",
      title: "Furniture",
      amount: 72.78,
      date: new Date(2021, 8, 1),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
};

export default App;

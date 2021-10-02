import React from "react";

import "./components/ExpenseItem.css";
import "./components/Expenses.css";
import Expenses from "./components/Expenses";

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
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

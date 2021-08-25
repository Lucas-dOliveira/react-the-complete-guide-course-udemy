import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const onFilterHandler = (year) => {
    setFilteredExpenses((filteredExpenses) => {
      return year
        ? expenses.filter((e) => e.date.getFullYear() === year)
        : expenses;
    });
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onFilter={onFilterHandler} />
        {filteredExpenses.map((e) => (
          <ExpenseItem {...e} />
        ))}
      </Card>
    </>
  );
};

export default Expenses;

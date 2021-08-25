import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ onFilter }) => {
  const [enteredYear, setEnteredYear] = useState();
  const yearChangedHandler = (event) => {
    const yearData = event.target.value;
    setEnteredYear(yearData);
    onFilter(parseInt(yearData));
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={enteredYear} onChange={yearChangedHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

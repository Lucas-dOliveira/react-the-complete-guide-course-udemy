import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((e) => (
        <ExpenseItem {...e} />
    ))}
    </Card>
  );
};

export default Expenses;

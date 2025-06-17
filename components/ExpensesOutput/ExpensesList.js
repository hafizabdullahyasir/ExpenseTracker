import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpensesItem(itemData) {
  return <ExpenseItem
  description={itemData.item.description}
  amount={itemData.item.amount}
  date={itemData.item.date}
  id={itemData.item.id}
  />
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItem}
      keyExtractor={(item) => item.id}
    />
  );
}

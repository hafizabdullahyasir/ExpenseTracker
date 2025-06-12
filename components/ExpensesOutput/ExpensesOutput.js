import {  View, FlatList, StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"




export default function ExpensesOutput({expenses, expensesPeriod}){
    return(
        <View>
           <ExpensesSummary expenses={expenses} periodNAme={expensesPeriod}/>
         <ExpensesList/>
            <FlatList/>
        </View>
    )
}
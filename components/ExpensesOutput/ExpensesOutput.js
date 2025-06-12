import {  View, FlatList, StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"




export default function ExpensesOutput(){
    return(
        <View>
           <ExpensesSummary/>
         <ExpensesList/>
            <FlatList/>
        </View>
    )
}
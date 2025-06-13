import {  View, FlatList, StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of Shoes',
        amount: 59.99,
        date: new Date('2021-10-19')
    },
    {
        id: 'e2',
        description: 'A pair of Car',
        amount: 5900.99,
        date: new Date('2021-8-19')
    },
    {
        id: 'e3',
        description: 'A pair of Mangoes',
        amount: 15.99,
        date: new Date('2025-12-19')
    },
    {
        id: 'e4',
        description: 'A pair of Women ',
        amount: 100.99,
        date: new Date('2024-12-19')
    },
    {
        id: 'e5',
        description: 'A pair of book',
        amount: 10.99,
        date: new Date('2023-12-19')
    },
    {
        id: 'e6',
        description: 'A pair of Hajishb',
        amount: 9.99,
        date: new Date('2022-12-19')
    },
];







export default function ExpensesOutput({expenses, expensesPeriod}){
    return(
        <View style={styles.container}>
           <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
         <ExpensesList expenses={DUMMY_EXPENSES}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    }
})
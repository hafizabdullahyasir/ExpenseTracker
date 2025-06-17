import {  View, StyleSheet, Text   } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"
import { useContext } from "react"








    export default function ExpensesOutput({expenses, expensesPeriod, fallbackText}){

    let content = <Text style={styles.infoText}>{fallbackText}</Text>
    if(expenses.length > 0){
        content = <ExpensesList expenses={expenses}/>
    }


    return(
        <View style={styles.container}>
           <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
         {content}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    },
    infoText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 32,
    }
})
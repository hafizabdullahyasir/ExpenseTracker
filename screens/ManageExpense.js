import { View, StyleSheet } from "react-native"
import { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { useContext } from "react";
import ExpensesContext from "../store/expenses-context";
import ExpensesForm from "../components/ManageExpense/ExpensesForm";





export default function ManageExpense({route, navigation}){

const expensesCtx = useContext(ExpensesContext);

const editedExpenseId = route.params?.expenseId;
const isEditing = !!editedExpenseId;

const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
);

useLayoutEffect(()=>{
     navigation.setOptions({
        title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
}, [navigation, isEditing])


function deleteExpenseHandler(){
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
}

function cancelHandler(){
    navigation.goBack();
}

function confirmHandler(expenseData){
    if(isEditing){
        expensesCtx.updateExpense(editedExpenseId, expenseData)
    }else{
        expensesCtx.addExpense(expenseData)
    }
    navigation.goBack();
}

    return (
        <View style={styles.container}>
        <ExpensesForm onCancel={cancelHandler} onSubmit={confirmHandler} defaultValues={selectedExpense} submitButtonLabel={isEditing ? 'Update' : 'Add'}/>
        {/* <View style={styles.buttons}>
            <Button mode='flat' onPress={cancelHandler} style={styles.button}>Cancel</Button>    
            <Button mode='flat' onPress={confirmHandler} style={styles.button}>{isEditing ? 'Update' : 'Add'}</Button>
        </View> */}


          {isEditing && (
            <View style={styles.deleteContainer}>
                <IconButton icon='trash' size={36} color={GlobalStyles.colors.error500} onPress={deleteExpenseHandler}/>
            </View>
          )}
        </View>
    )
} 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
   
    deleteContainer:{
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
  
})
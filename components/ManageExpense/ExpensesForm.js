import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import { playCircle } from "ionicons/icons";    
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../utils/date";

export default function ExpensesForm({onCancel, onSubmit, defaultValues, submitButtonLabel}) {

const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? getFormattedDate(defaultValues.date) : "",
    description: defaultValues ? defaultValues.description : "",
});


function inputChangeHandler(inputIdentifier, enteredValue){
    setInputValues((currentInputValues)=>{
        return {
            ...currentInputValues,
            [inputIdentifier]: enteredValue,
        }
    })
    console.log(inputValues);
}   
function submitHandler(){
    const parsedDate = new Date(inputValues.date);
    if (isNaN(parsedDate)) {
      alert("Invalid date format. Use YYYY-MM-DD.");
      return;
    }
        const expenseData = {
            amount: +inputValues.amount,
                            date: parsedDate,
            description: inputValues.description,
        }
  const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
  const dateIsValid = expenseData.date.toString() !== "Invalid Date";
  const descriptionIsValid = expenseData.description.trim().length > 0;
  if(!amountIsValid || !dateIsValid || !descriptionIsValid){
    Alert.alert("Invalid input", "Please check your input values");
    return;
  }



        onSubmit(expenseData); 
} 


    return (
       <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
      <Input style={styles.rowInput} label="Amount" textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
            

        }}/>
        <Input style={styles.rowInput} label="Date" textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
        }}/>
      </View>
        <Input label="Description" textInputConfig={{
            multiline: true,
           onChangeText: inputChangeHandler.bind(this, "description"),
           value: inputValues.description,
        }}/>
         <View style={styles.buttons}>
                <Button mode='flat' onPress={onCancel} style={styles.button}>Cancel</Button>    
            <Button mode='flat' onPress={submitHandler} style={styles.button}>{submitButtonLabel}</Button>
        </View>
       </View>
       
    )
}
const styles = StyleSheet.create({
    inputRow:{
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 16,
    },
    rowInput:{
        flex: 1,
    },
    form:{
        marginTop: 40,
    },
    title:{
        fontSize: 24 ,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginVertical: 16,
        textAlign: "center",
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        minWidth: 120,
        marginHorizontal: 8
    },
})
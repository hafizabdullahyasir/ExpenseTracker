import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";



export default function Input({ label, textInputConfig , style}) {

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={[styles.input, textInputConfig.multiline && styles.inputMultiline]} {...textInputConfig} />
        </View>

    )
}


const styles = StyleSheet.create({ 
 inputContainer: {
marginHorizontal: 4,
marginVertical: 8,


 },
 label: {
    fontSize: 12,
    color: "#FFFFFF",
    marginBottom: 4,
 },
 input:{
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    borderRadius: 6,
    padding: 6,
    fontSize: 18,
 },
 inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
 }
})
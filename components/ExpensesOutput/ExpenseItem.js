import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";



export default function ExpenseItem({description, amount, date, id}){

    const navigation = useNavigation();
    function expensePressHandler(){
      navigation.navigate('ManageExpense', {
        expenseId: id
     })
    }

    return(
        <Pressable onPress={expensePressHandler} style={({pressed}) => pressed && styles.pressed} android_ripple={{color: GlobalStyles.colors.gray500}}>
            <View style={styles.ExpenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                        <Text style={[styles.textBase]}>{date.toLocaleDateString()}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={[styles.textBase, styles.amount]}>{amount}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    ExpenseItem:{
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    textBase:{
        color: GlobalStyles.colors.primary50
    },
    description:{
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer:{
       paddingHorizontal: 12,
       paddingVertical: 4,
       backgroundColor: 'white',
       borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: 80 ,
      
    },
    amount:{
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
    },
    Pressable:{
        opacity: 0.75
    }

})
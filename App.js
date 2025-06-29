import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import {Ionicons} from '@expo/vector-icons'
import IconButton from './components/UI/IconButton';
import { ExpensesContextProvider } from './store/expenses-context';




const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();



function ExpensesOverview(){
return <BottomTabs.Navigator screenOptions={({navigation})=>({
  headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
  headerTintColor: 'white',
  tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
  tabBarActiveTintColor: GlobalStyles.colors.accent500, 
  headerRight: ({tintColor}) => <IconButton icon='add' size={24} color={tintColor} onPress={() => {navigation.navigate('ManageExpense') }}/>
})}>
<BottomTabs.Screen name='RecentExpenses' component={RecentExpenses} options={{
  title: 'Recent Expense',
  tabBarLabel: 'Recent Expenses',
  tabBarIcon: ({color, size}) => <Ionicons name='hourglass' size={size} color={color}/>
}}/>
<BottomTabs.Screen name='AllExpenses' component={AllExpenses}  options={{
  title: 'All Expense',
  tabBarLabel: 'All Expenses',
  tabBarIcon: ({color, size}) => <Ionicons name='calendar' size={size} color={color}/>
}}/>





</BottomTabs.Navigator>



}



export default function App() {
  return (

     <>
     <StatusBar style="light" />
     <ExpensesContextProvider>
     <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: 'white',
    }}>
      <Stack.Screen name='ExpensesOverview'options={{headerShown:  false}} component={ExpensesOverview}/>
    <Stack.Screen name='ManageExpense' component={ManageExpense} options={{presentation: 'modal'}}/>
    



    </Stack.Navigator>
     </NavigationContainer>
     </ExpensesContextProvider>
     </>
    
  );
}



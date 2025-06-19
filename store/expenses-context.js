import { createContext, useReducer } from "react";




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
        description: 'A pair of bitcoin ',
        amount: 10500,
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
        description: 'A pair of ton',
        amount: 9.99,
        date: new Date('2022-12-19')
    },
];


// created variable to get the functionality of the context 
const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date})=>{},
    deleteExpense: (id)=>{},
    updateExpense: (id, {description, amount, date})=>{},
});



// created hook to get the logic of the expenses
function expensesReducer(state, action){
 switch(action.type){
   case 'ADD':
    const id = new Date().toString() + Math.random().toString();
    return [{...action.payload, id: id}, ...state]
   case 'UPDATE':
    const updateableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
    const updateableExpense = state[updateableExpenseIndex];
    const updatedItem = {...updateableExpense, ...action.payload.data}; 
    const updatedExpenses = [...state];
    updatedExpenses[updateableExpenseIndex] = updatedItem;
    return updatedExpenses;
    case 'DELETE':
        return state.filter((expense) => expense.id !== action.payload);
        default: 
        return state;


 }

}




  



//  created a fucntion provider to wrap the children components
function ExpensesContextProvider({children}){
const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);


function addExpense(expenseData){
    dispatch({type: 'ADD', payload: expenseData})
}
function deleteExpense(id){
    dispatch({type: 'DELETE', payload: id})
}
function updateExpense(id, expenseData){
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}})
}

const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
}


    return<ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContext;
export { ExpensesContextProvider };
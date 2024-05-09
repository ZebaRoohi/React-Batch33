import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../src/components/todos/todosSlice'
import countriesReducer from '../src/components/countries/countrySlice'

export const store=configureStore({
    reducer:{
    todos:todosReducer,
    countries:countriesReducer,
    }
})
//npm install @reduxjs/toolkit react-redux
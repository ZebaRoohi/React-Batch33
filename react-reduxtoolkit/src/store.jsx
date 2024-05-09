import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../src/components/counterSlice'
import todosReducer from '../src/components/todolist/todoSlice'
export const store=configureStore({
    reducer:{
        counter:counterReducer,
        todos:todosReducer,
    }
})
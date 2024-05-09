import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name:'todos',
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:Date.now(),
                text:action.payload,
                completed:false
            }
            state.push(newTodo)
        },
        deleteTodo:(state,action)=>{
            return state.filter((todo)=>todo.id!==action.payload)
        }
    }

})
export const {addTodo,deleteTodo}=todoSlice.actions
export default todoSlice.reducer
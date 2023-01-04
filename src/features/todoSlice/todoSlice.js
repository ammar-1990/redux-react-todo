import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:JSON.parse(localStorage.getItem('todos')) || []
}

export const todoSlice=createSlice ({
    name :'todos',
    initialState,

    reducers:{
        addTodo:(state,action)=> {
            state.todos.push(action.payload)
        },
        editTodo:(state,action)=> {
            state.todos=state.todos.map((todo)=>{
              if(todo.id===action.payload.id) 
              return action.payload 
              else
              return todo
             
            }
            )
        }
        ,
        deleteTodo:(state,action)=> {
            state.todos=state.todos.filter((todo)=> 
                todo.id !== action.payload.id
            )
        },
        deleteAll:state=>{
            state.todos=[]}
    }
})

export const {addTodo,editTodo,deleteTodo,deleteAll} = todoSlice.actions
export default todoSlice.reducer
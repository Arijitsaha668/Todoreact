import {useState, createContext,useContext} from "react";

export  const TodoContext = createContext({
    todos:[{
        id:1,
        todo:"hello ari",
        completed:false,
    }],
    addTodo:(todo)=>{},
    UpdateTodo:(id, todo) =>{},
    deleteTodo:(id) =>{},
    toggleCompleted:(id) =>{},
})

export const usetodo = () =>{
    return useContext(TodoContext);
}

export const Todoprovider = TodoContext.Provider


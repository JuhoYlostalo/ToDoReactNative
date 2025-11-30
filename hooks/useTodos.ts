import { useReducer } from "react";

export type Todo = {
    id: number
    text: string
    done: boolean
}

type TodoState = {
    tasks: Todo[]
    nextId: number
}

const initialState: TodoState ={
    tasks: [],
    nextId: 1
}

type TodoAction = 
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'DELETE_TODO'; id: number };

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                tasks: [...state.tasks,{
                     id: state.nextId,
                     text: action.text,
                     done: false

                     }],
                     nextId: state.nextId + 1
            }
        case "TOGGLE_TODO":
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.id ? {...task, done: !task.done}
                    : task
                )
            }
        case "DELETE_TODO":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
    }   
}

export const useTodos = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const handleAdd = (text: string) =>{
        dispatch({type: "ADD_TODO", text})
    }

    const handleToggle = (id: number) =>{
        dispatch({type: "TOGGLE_TODO", id})
    }

    const handleDelete = (id: number) =>{
        dispatch({type: "DELETE_TODO", id})
    }

     return {
        todos: state.tasks,
        handleAdd,
        handleToggle,
        handleDelete
    }
}


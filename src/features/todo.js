import { createSlice } from "@reduxjs/toolkit";


const initialTodoList =  [{ title: "Learn React", completed: false },]

export const todoSlice = createSlice({
    name: "todo",
    initialState: { value: JSON.parse(localStorage.getItem('todos')) || initialTodoList },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
            localStorage.setItem("todos", JSON.stringify(state.value));
        },
        removeTodo: (state, action) => {
            state.value = state.value.filter((todo) => todo.title !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state.value));
        },
        toggleTodo: (state, action) => {
            state.value = state.value.map((todo) => {
                if (todo.title === action.payload) {
                    return { completed: !todo.completed, title: todo.title};
                }

                return todo;

            });
            localStorage.setItem("todos", JSON.stringify(state.value));
        }
    },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
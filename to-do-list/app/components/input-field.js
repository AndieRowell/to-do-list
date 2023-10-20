import React, {useState} from "react";
import { TextField } from '@mui/material';
import TodoButton from "./button";

const ToDoInput = ({ onAddTodo, todos }) => {
    const [todo, setTodo] = useState("");

    const handleAddTodo = () => {
        if (todo.trim()) {
            onAddTodo(todo);
            setTodo("");

    return (
    <Box sx={{ display: "flex"}}>
        <TextField
        id="outlined secondary"
        fullWidth
        label="To Do"
        color="secondary"
        margin="normal"
        focused
        onChange={(e) => setTodo(e.target.value)}/>
    <TodoButton onclick={handleAddTodo} />
    </Box>
    );
};

export default ToDoInput;

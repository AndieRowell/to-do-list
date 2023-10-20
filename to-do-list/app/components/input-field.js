import React, {useState} from "react";
import { TextField } from '@mui/material';

const ToDoInput = ({ onAddTodo }) => {
    const [todo, setTodo] = useState("");

    const handleAddTodo = () => {
        if (todo.trim()) {
            onAddTodo(todo);
            setTodo("");

    return (
        <TextField
        id="outlined secondary"
        fullWidth
        label="To Do"
        color="secondary"
        margin="normal"
        focused
        onChange={(e) => setTodo(e.target.value)}/>
    );
};

export default ToDoInput;

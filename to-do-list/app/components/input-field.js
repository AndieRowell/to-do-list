import React, {useState} from "react";
import { TextField } from '@mui/material';

const ToDoInput = ({ onAddTodo }) => {
    const [todo, setTodo] = useState("");

    const handleAddTodo = () => {
        if (todo.trim()) {
            onAddTodo()
        }
        const newTodo = event.target.value;
        setTodo(newTodo);
        //

    }



    return (
        <TextField type="text" onChange={(e) => setTodo(e.target.value)} value={todo}/>
    )
}

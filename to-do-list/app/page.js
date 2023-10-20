"use client";
import React, { useState } from "react";
//import Image from 'next/image'
//import styles from './page.module.css'
import {
  Typography,
  Container,
  TextField,
  ButtonGroup,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ToDoInput from "./to-do-list/app/components/input-field.js";

export default function Home() {
  const [todos, setTodos] = React.useState([]); //i know there's something here about react.useState i forgot about....
  //const [todo, setTodo] = React.useState("")

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(storedTodos);
  }, []);

  const handleAddTodo = (newTodo) => {
    const updatedTodos = [
      ...todos,
      {
        id: new Date().getTime(), //assign each todo with a date (instead of using index in array)
        text: todo,
        completed: false,
      },
    ];

    // if (todo.trim()) {
    //   const newTodo = {
    //     id: new Date().getTime(), //assign each todo with a date (instead of using index in array)
    //     text: todo,
    //     completed: false, //not
    //   };

    // setTodo([...todos, newTodo]);
    // setTodo("");

    saveTodosToLocalStorage(updatedTodos);
  };

  // need to use localStorage
  //localStorage.setItem(key, value) - adds pair to storage or updates value if key exists - add todo
  //localStorage.getItem(key) - retrieves value associated with a given key
  //localStorage.removeItem(key) - removes key value pair associated with specified key
  //localStorage.clear() - clear all key value pairs from storage - clear all

  //need a function to delete todo
  //need a function to toggle? that they are completed
  //boolean values

  return (
    <main>
      <Typography variant="h4" color="secondary">
        TO DO LIST:
      </Typography>

      {/* <Container> */}
      <ToDoInput onAddTodo={handleAddTodo} todos={todos} />
      <Box sx={{ display: "flex" }}>
        <TextField />
        <IconButton>
          <AddBoxOutlinedIcon />
        </IconButton>
      </Box>
      {/* </Container> */}
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        {/* <Container> */}
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          color="secondary"
        >
          <Button>All</Button>
          <Button>To Do</Button>
          <Button>Completed</Button>
        </ButtonGroup>
        {/* </Container> */}
        {/* <Container> */}
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          color="secondary"
        >
          <Button>Complete All</Button>
          <Button>Undo All</Button>
        </ButtonGroup>
        {/* </Container> */}
      </Box>
    </main>
  );
}

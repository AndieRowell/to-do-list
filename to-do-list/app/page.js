"use client";
import React, { useState, useEffect } from "react";
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
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Home() {
  // const [items, setItems] = React.useState

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('items'));
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);

  return (
    <main>

        <Typography variant="h4" color="secondary">TO DO LIST:</Typography>

      {/* <Container> */}
        <Box sx={{ display: "flex" }}>
          <TextField
            id="outlined secondary"
            fullWidth
            label="To Do"
            color="secondary"
            margin="normal"
            focused
          />
          <IconButton
            aria-label="AddBoxOutlinedIcon"
            color="secondary"
            size="large"
          >
            <AddBoxOutlinedIcon />
          </IconButton>
        </Box>
      {/* </Container> */}
      <Box sx={{ display: "flex", justifyContent: "space-evenly"}}>
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

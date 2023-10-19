"use client"
import React, {useState, useEffect} from 'react'
//import Image from 'next/image'
//import styles from './page.module.css'
import { Container, TextField } from '@mui/material'


export default function Home() {

  const [items, setItems] = React.useState

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);


  return (
    <main>
      <h1>TO DO:</h1>
      <Container>
        <TextField id="outlined secondary" fullWidth label ="fullWidth" label="To Do" color="secondary" focused />
      </Container>
    </main>
  )
}

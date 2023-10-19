"use client"
import React from 'react'
//import Image from 'next/image'
//import styles from './page.module.css'
import { TextField } from '@mui/material'


export default function Home() {
  return (
    <main>
      <h1>TO DO:</h1>
      <div>
        <TextField id="outlined secondary" label="To Do" color="secondary" focused />
      </div>
    </main>
  )
}

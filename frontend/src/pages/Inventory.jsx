import React from 'react'
import SideBar from '../pages/SideBar'
import { Box } from '@mui/material'


const Inventory = () => {
  return (
    <>
     <Box sx={{ display: 'flex' , marginTop:'50px' }}>
        <SideBar />
        <h1> Inventory </h1>
      </Box>
    </>
  )
}

export default Inventory

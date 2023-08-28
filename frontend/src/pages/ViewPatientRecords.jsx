import React from 'react'
import SideBar from '../pages/SideBar'
import CheckIcon from '@mui/icons-material/Check';
import { Box, Button, Grid, TextField, Typography } from '@mui/material'

const ViewPatientRecords = () => {
  return (
    <>
     <Box sx={{ display: 'flex' , marginTop:'100px', marginLeft: '40px' , marginRight: '40px' }}>
        <SideBar />
        <Grid container>
          <Grid item xs={12} align='center' marginBottom={3}>
            <Typography variant='h4'> View Patient Records </Typography>
          </Grid>

          <Grid item xs={12} md={2}>
            <form>
              <TextField fullWidth name='' value='' label='NIC NO' />
              <Grid item display={'flex'} alignItems='flex-end' justifyContent='flex-end' marginTop={1}>
                <Button variant='contained' color='success'> <CheckIcon fontSize='small' /> </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ViewPatientRecords

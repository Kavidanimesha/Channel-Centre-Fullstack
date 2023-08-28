import React from 'react'
import SideBar from '../pages/SideBar'
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material'


const PharmacyBillForm = () => {

    const drugLsit =[
      { id: 1, name: "Acetaminophen" },
      { id: 2, name: "Ibuprofen" },
      { id: 3, name: "Aspirin" },
      { id: 4, name: "Amoxicillin" },
      { id: 5, name: "Ciprofloxacin" },
      { id: 6, name: "Fluoxetine" },
      { id: 7, name: "Sertraline" },
      { id: 8, name: "Lisinopril" },
      { id: 9, name: "Losartan" },
      { id: 10, name: "Metformin" },
      { id: 11, name: "Lansoprazole" },
      { id: 12, name: "Omeprazole" },
      { id: 13, name: "Atorvastatin" },
      { id: 14, name: "Simvastatin" },
      { id: 15, name: "Furosemide" },
      { id: 16, name: "Levothyroxine" },
      { id: 17, name: "Albuterol" },
      { id: 18, name: "Montelukast" },
      { id: 19, name: "Ranitidine" },
      { id: 20, name: "Promethazine" }
    ]

    const producers = [
        { id: 1, name: "Pfizer" },
        { id: 2, name: "Novartis" },
        { id: 3, name: "Roche" },
        { id: 4, name: "Merck & Co." },
        { id: 5, name: "Johnson & Johnson" },
        { id: 6, name: "Bayer" },
        { id: 7, name: "Sanofi" },
        { id: 8, name: "GlaxoSmithKline" },
        { id: 9, name: "AstraZeneca" },
        { id: 10, name: "Eli Lilly" }
    ]

    const doses = [
        { id: 1, name: "2.5 mg" },
        { id: 2, name: "5 mg" },
        { id: 3, name: "10 mg" },
        { id: 4, name: "20 mg" },
        { id: 5, name: "25 mg" },
        { id: 6, name: "50 mg" },
        { id: 7, name: "75 mg" },
        { id: 8, name: "100 mg" },
        { id: 9, name: "125 mg" },
        { id: 10, name: "150 mg" },
        { id: 11, name: "200 mg" },
        { id: 12, name: "250 mg" },
        { id: 13, name: "300 mg" },
        { id: 14, name: "400 mg" },
        { id: 15, name: "500 mg" },
        { id: 16, name: "600 mg" },
        { id: 17, name: "800 mg" },
        { id: 18, name: "1 g" },
        { id: 19, name: "2 g" }
    ]

  return (
    <>
      <Box sx={{ display: 'flex' , marginTop:'100px', marginLeft: '40px' , marginRight: '40px' }}>
        <SideBar />
        <Grid container>
          <Grid item xs={12} align='center' marginBottom={3}>
            <Typography variant='h4'> Pharmacy Biling Interface </Typography>
          </Grid>

          <Grid container>

          <Grid item xs={12}>
            <form>
              <Grid item xs={12} md={2}>
                <TextField fullWidth name='' value='' label='Bill NO' />
                <Grid item display={'flex'} alignItems='flex-end' justifyContent='flex-end' marginTop={1}>
                  <Button variant='contained' color='success'> <CheckIcon fontSize='small' /> </Button>
                </Grid>
              </Grid>
                <Grid item xs={12} display={'flex'} flexDirection={'column'} gap={2}>
                    <TextField variant='standard' fullWidth name='' value='' label="Full Name" />
                    <TextField variant='standard' fullWidth name='' value='' label="Address" />
                </Grid>

                <Grid item display={'flex'} flexDirection={'row'} gap={2} marginTop={2} marginBottom={4}>
                  <TextField fullWidth variant='standard'  name='' value='' label="Contact" />
                  <TextField fullWidth variant='standard'  name='' value='' label="NIC" />
                </Grid>
                
                <Typography color={'primary'}> ADD ITEMS </Typography>
                
                <Grid item xs={12} display={'flex'} flexDirection={'row'} gap={2} marginTop={2}>
                  <TextField select fullWidth name='' value='' label='Drug' >
                  {drugLsit.map ((drug) => (
                    <MenuItem value={drug.name} key={drug.id}> {drug.name} </MenuItem>
                  ))}
                  </TextField> 

                  <TextField select fullWidth name='' value='' label='Company'>
                    {producers.map ((producer) => (
                      <MenuItem key={producer.id} value={producer.name}> {producer.name} </MenuItem>
                    ))}
                  </TextField>

                  <TextField select fullWidth name='' value='' label='Dose'>
                      {doses.map ((dose) => (
                        <MenuItem key={dose.id} value={dose.name}> {dose.name} </MenuItem>
                      ))}
                  </TextField> 

                </Grid>
                <Grid item display={'flex'} alignItems='flex-end' justifyContent='flex-end' marginTop={1}>
                  <Button variant='contained' color='success'> <AddIcon fontSize='small' /> </Button>
                </Grid>
             </form>
          </Grid>

          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default PharmacyBillForm
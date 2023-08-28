import React, { useState } from 'react'
import SideBar from '../pages/SideBar'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import * as Yup from 'yup'

const CreatePatientRecords = () => {

  const [errors , setErrors] = useState({})

  const [data , setData] = useState({
    name: '',
    address: '',
    contact: '',
    nic: '',
    image: ''
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data , [name]: value})
    
    setErrors({...errors , [name]: undefined})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await prescriptionSchema.validate(data, { abortEarly: false });
      console.log( data);
      // api
    }
     catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  const prescriptionSchema = Yup.object().shape({
    name: Yup.string().required('Full Name is required'),
    address: Yup.string().required('Address is required'),
    nic: Yup.string().required('NIC is required'),
    contact: Yup.string().required('Contact is required'),
    image: Yup.string().required('Image is required'),
  });


  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginTop: "100px",
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
        <SideBar />
        <Grid container>
          <Grid item xs={12} align="center" marginBottom={3}>
            <Typography variant="h4"> Create Patient Records </Typography>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <form method="post" onSubmit={handleSubmit}>
                <Grid item xs={12} md={2}>
                  <TextField
                    fullWidth
                    name="bilNo"
                    value=""
                    label="Bill Number"
                  />
                  <Grid
                    item
                    display={"flex"}
                    alignItems="flex-end"
                    justifyContent="flex-end"
                    marginTop={1}
                  >
                    <Button variant="contained" color="success"> <CheckIcon fontSize="small" /> </Button>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={12}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={2}
                >
                  <TextField
                    variant="standard"
                    fullWidth
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    label="Full Name"
                    error={!!errors.name} 
                    helperText={errors.name}
                  />
                  <TextField
                    variant="standard"
                    fullWidth
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    label="Address"
                    error={!!errors.address} 
                    helperText={errors.address}
                  />
                </Grid>

                <Grid
                  item
                  display={"flex"}
                  flexDirection={"row"}
                  gap={2}
                  marginTop={2}
                >
                  <TextField
                    fullWidth
                    variant="standard"
                    name="contact"
                    value={data.contact}
                    onChange={handleChange}
                    label="Contact"
                    error={!!errors.contact} 
                    helperText={errors.contact}
                  />
                  <TextField
                    fullWidth
                    variant="standard"
                    name="nic"
                    value={data.nic}
                    onChange={handleChange}
                    label="NIC"
                    error={!!errors.nic} 
                    helperText={errors.nic}
                  />
                </Grid>

                <Grid
                  item
                  xs={12}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={2}
                  marginTop={3}
                >
                  <Typography> Insert Images </Typography>
                  <input
                    type="file"
                    multiple
                    name="image"
                    value={data.image}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} align="center" marginTop={2}>
                  <Button type="submit" variant="contained" color="success"> Save </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CreatePatientRecords

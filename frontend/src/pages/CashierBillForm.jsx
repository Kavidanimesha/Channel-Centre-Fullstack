import React, { useState } from 'react'
import SideBar from '../pages/SideBar'
import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import * as Yup from 'yup'

const CashierBillForm = () => {

  const [data , setData] = useState({
    name: '',
    address: '',
    contact: '',
    nic: '',
    date: '',
    status: '',
    amount: ''
  })

  const [errors , setErrors] = useState({})

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
      console.log(data);
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
    contact: Yup.string().required('Contact is required'),
    nic: Yup.string().required('NIC is required'),
    date: Yup.string().required('Please select a Date'),
    status: Yup.string().required('Please select a Status'),
    amount: Yup.string().required('Amount is required'),
  }); 

  const statusList = [
    { id: 1 , name: 'Paid'},
    { id: 2 , name: 'Not Paid'},
    { id: 3 , name: 'Pending'}
  ]

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
          <Grid item xs={12} align="center">
            <Typography variant="h4"> Patient Billing Interface </Typography>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <form method="post" onSubmit={handleSubmit}>
                <TextField name="" value="" label="Bill No" />
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
                  display={"flex"}
                  flexDirection={"row"}
                  gap={2}
                  marginTop={2}
                >
                  <TextField
                    fullWidth
                    type="date"
                    name="date"
                    value={data.date}
                    onChange={handleChange}
                    label="Date"
                    InputLabelProps={{ shrink: true }}
                    error={!!errors.date} 
                    helperText={errors.date} 
                  />
                  <TextField
                    fullWidth
                    select
                    name="status"
                    value={data.status}
                    onChange={handleChange}
                    label="Status"
                    error={!!errors.status} 
                    helperText={errors.status} 
                  >
                    {statusList.map((status) => (
                      <MenuItem key={status.id} value={status.name}> {status.name} </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid
                  item
                  xs={3}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={2}
                  marginTop={2}
                >
                  <TextField
                    fullWidth
                    name="amount"
                    value={data.amount}
                    onChange={handleChange}
                    label="Amount"
                    error={!!errors.amount} 
                    helperText={errors.amount} 
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

export default CashierBillForm

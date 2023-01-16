import React from 'react'
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Basicdetails = React.memo<any>(({ values, handleChange }) => {

  console.log('Rendering basic details only');

  return (
    <div>
      <div className='flex-col'>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant='h4'>Basic details</Typography>
        </Box>

        <label htmlFor="email">E-mail</label>
        <TextField
          fullWidth
          id="email"
          name="email"
          size="small"
          value={values.email}
          onChange={handleChange} />
      </div>

      <div className='flex-col'>
        <label htmlFor="password">Password</label>
        <TextField
          fullWidth
          id="password"
          name="password"
          type="password"
          size="small"
          value={values.password}
          onChange={handleChange} />
      </div>

    </div>
  )
},
  (prevProps, nextProps) => {
    if (
      prevProps.values.email === nextProps.values.email &&
      prevProps.values.password === nextProps.values.password
    ) {
      return true;
    }
    return false;
  }
)
export default Basicdetails;
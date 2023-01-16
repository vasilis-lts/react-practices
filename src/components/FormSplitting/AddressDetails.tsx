import React from 'react'
import { MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const Addressdetails = React.memo<any>(({ values, handleChange }) => {

  console.log('Rendering address details only');

  return (
    <div>

      <div className='flex-col'>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant='h4'>Address details</Typography>
        </Box>

        <label htmlFor="city">City</label>
        <TextField
          fullWidth
          id="city"
          name="city"
          size="small"
          value={values.city}
          onChange={handleChange} />
      </div>

      <div className='flex-col'>
        <label htmlFor="country">Country</label>
        <Select
          name="country"
          value={values.country}
          onChange={handleChange}
          size="small">
          <MenuItem value="GR" key="GR" >Greece</MenuItem>
          <MenuItem value="NL" key="NL" >Netherlands (the)</MenuItem>
        </Select>
      </div>

    </div>
  )
},
  (prevProps, nextProps) => {
    if (
      prevProps.values.country === nextProps.values.country &&
      prevProps.values.city === nextProps.values.city
    ) {
      return true;
    }
    return false;
  }
)
export default Addressdetails;
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Basicdetails from './Basicdetails';
import AddressDetails from './AddressDetails';

const FormSplitting = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     email: 'foobar@example.com',
  //     password: 'foobar',
  //     city: "Athens",
  //     country: "GR"
  //   },
  //   // validationSchema: validationSchema,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  const [values, setValues] = useState({
    email: 'foobar@example.com',
    password: 'foobar',
    city: "Athens",
    country: "GR"
  })

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  }

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setValues(prevValues => {
      let newValues = Object.assign({}, prevValues);
      newValues[name] = value;
      return newValues;
    })
  }

  return (
    <div className='flex-col' style={{ maxWidth: 400 }}>
      <hr />
      <Box sx={{ mt: 5 }}><h1>Form splitting</h1></Box>
      <form onSubmit={handleSubmit}>

        <Basicdetails
          values={values}
          handleChange={handleChange}
        />
        <AddressDetails
          values={values}
          handleChange={handleChange}
        />

        <Button
          sx={{ mt: 5 }}
          color="primary"
          variant="contained"
          fullWidth
          type="submit">Submit</Button>

      </form>
    </div>
  );
};
export default FormSplitting;
import React, { useState, useEffect } from 'react';
import { User } from '../types';
import styled from "@emotion/styled";
import { TextField, Box, Select, MenuItem } from '@mui/material';

const user = {
  username: "Vasilis-Litsas",
  age: 37,
  address: {
    country: "GR",
    city: "Athens"
  }
};

const ScreenContainer = styled('div')(({ theme }) => ({
  padding: 20,
  height: "100%",
  overflowY: "auto",

  '& .MuiSelect-select': {
    borderColor: "#fff",
    width: 200,
    paddingLeft: 26,
    display: "flex",
    alignItems: "center",
  },
  'label': {
    width: 200
  },
  select: {
    '&:before': {
      borderColor: "#fff",
    },
    '&:after': {
      borderColor: "#fff",
    }
  },

}));

const number = 123;
const f = new Intl.NumberFormat('gr-GR', {
  currency: "EUR",
  style: "currency"
})

function UserDetails() {
  const [User, setUser] = useState<null | User>(null)

  useEffect(() => {
    getUser();

    return () => {
      //
    }
  }, [])

  const getUser = () => {
    setUser(user);
  }

  return (
    <ScreenContainer>
      <h2>User details {f.format(number)}</h2>
      <hr />
      <h4>Basic details</h4>
      {User ?
        <div className='flex-col'>

          <Box className="flex-align-center">
            <label>Username: </label>
            <TextField
              name="username"
              value={User.username}
              onChange={e => {
                setUser({ ...User, username: e.target.value })
              }}
              size="small"
            />
          </Box>

          <Box className="flex-align-center" sx={{ mt: 1 }}>
            <label>Age: </label>
            <TextField
              name="age"
              defaultValue={User.age}
              disabled
              size="small"
            />
          </Box>

          <h4>Address</h4>
          <Box className="flex-align-center">
            <label>Country: </label>
            <Select
              name="country"
              value={User.address.country}
              onChange={e => {
                setUser({ ...User, address: { ...User.address, country: e.target.value } })
              }}
              size="small"
            >
              <MenuItem value="GR" key="GR" >Greece</MenuItem>
              <MenuItem value="NL" key="NL" >Netherlands (the)</MenuItem>
            </Select>
          </Box>

        </div>
        : null}
    </ScreenContainer>
  )
}

export default UserDetails
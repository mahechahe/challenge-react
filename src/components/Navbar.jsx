import { Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end'
      }}
    >
      <Typography fontWeight='500' fontSize='25px'>RANDOM user generator</Typography>
    </div>
  )
}

export default Navbar

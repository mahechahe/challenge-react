import { Chip } from '@mui/material'
import React from 'react'

const OtherInformation = ({ data }) => {
  const color = ['#ffc931', '#0189fd', '#01cf65', '#000']
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      <p style={{ fontWeight: '500', color: '#000', fontSize: '16px' }}>
        Other information
      </p>
      <div
        style={{
          width: '100%',
          height: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Chip
            style={{
              background: `${color[0]}`,
              color: '#fff',
              fontWeight: '500'
            }}
            label={data?.email}
          />
          <Chip
            style={{
              background: `${color[1]}`,
              color: '#fff',
              fontWeight: '500'
            }}
            label={data?.phone}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: '10px'
          }}
        >
          <Chip
            style={{
              background: `${color[2]}`,
              color: '#fff',
              fontWeight: '500'
            }}
            label={data?.dob?.age}
          />
          <Chip
            style={{
              background: `${color[3]}`,
              color: '#fff',
              fontWeight: '500'
            }}
            label={data?.location?.timezone?.description}
          />
        </div>
      </div>
    </div>
  )
}

export default OtherInformation

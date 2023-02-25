import { Avatar, Button } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import Description from './Description'
import OtherInformation from './OtherInformation'
import { GlobalContext } from '../context/useContext'
import NameDetail from './NameDetail'

const Header = () => {
  const { data, getUserContext, loading } = useContext(GlobalContext)

  useEffect(() => {
    getUserContext()
  }, [])

  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px'
      }}
    >
      <div
        style={{
          width: '400px',
          height: '500px',
          background: 'white',
          borderRadius: '10px',
          overflow: 'hidden'
        }}
      >
        <div style={{ width: '100%', height: '50px', background: '#f8f9fa' }} />
        <div
          style={{
            width: '100%',
            height: '80px',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <Avatar
            style={{ width: '80px', height: '80px' }}
            alt='Remy Sharp'
            src={data?.picture?.large}
          />
          <div
            style={{ width: '200px', display: 'flex', justifyContent: 'end' }}
          >
            <Button
              size='small'
              variant='contained'
              style={{
                background: `${data?.gender === 'male' ? '#0189ff' : '#ff70a6'}`,
                width: '500px'
              }}
              onClick={getUserContext}
            >
              {loading ? 'Loading..' : 'Generate new user'}
            </Button>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '180px',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <div
            style={{
              width: '85%',
              height: '70px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <NameDetail data={data} />
          </div>
          <div
            style={{
              width: '85%',
              height: '90px',
              display: 'grid',
              flexDirection: 'column',
              borderTop: '1px solid #dee2e6',
              borderBottom: '1px solid #dee2e6',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              padding: '10px 0'
            }}
          >
            <Description data={data?.location?.city} footer='City' />
            <Description data={data?.location?.state} footer='State' />
            <Description data={data?.location?.country} footer='Country' />
            <Description data={data?.location?.postcode} footer='Postal code' />
          </div>
        </div>
        <div style={{ width: '85%', height: '80px', margin: '20px auto' }}>
          <OtherInformation data={data} />
        </div>
      </div>
    </div>
  )
}

export default Header

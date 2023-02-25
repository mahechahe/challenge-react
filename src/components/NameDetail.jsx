import React from 'react'

const NameDetail = ({ data }) => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          width: '10px',
          height: '10px',
          background: `${data?.gender === 'male' ? '#0189ff' : '#ff70a6'}`,
          position: 'absolute',
          borderRadius: '10px',
          top: '-8px'
        }}
      />
      <h1
        style={{ color: 'black', fontSize: '26px', fontWeight: '500' }}
      >
        {data?.name?.title} {data?.name?.first} {data?.name?.last}
      </h1>
      <p style={{ color: '#495057', fontSize: '15px' }}>
        {data?.login?.username}
      </p>
    </div>
  )
}

export default NameDetail

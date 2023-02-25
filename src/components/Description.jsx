import React from 'react'

const Description = ({ data, footer }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <p style={{ color: '#000', fontSize: '15px', fontWeight: '500' }}>
        {footer}
      </p>
      <p style={{ color: '#adb5bd', fontSize: '14px' }}>{data}</p>
    </div>
  )
}

export default Description

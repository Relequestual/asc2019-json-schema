import React from 'react'

export default ({ children }) => (
  <div style={{
    width: '100%',
    height: '100%',
    /* box-sizing: border-box; */
    position: 'relative',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  }}>
    {children}
  </div>
)

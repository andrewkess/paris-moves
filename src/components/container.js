import React from 'react'

//this is what the content maxwidth element can be called for when to break the float
//maxWidth: 1180,


export default ({ children }) => (
  <div style={{  maxWidth: 1250, margin: '0 auto', paddingTop: '58px', }}>{children}</div>
)

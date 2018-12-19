import React, { } from 'react'
import { Link } from "react-router-dom"

const style = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    color: '#777',
  },
} 

const NoMatchDirectory = () => {
  return (
    <div style={style.div}>
      <h1>Error 404</h1>
      <h4>Directory not found</h4>
      <Link to='/'>Back to App</Link>
    </div>
  )
}

export default NoMatchDirectory;
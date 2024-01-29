import React from 'react'
import logo from "../components/images/mylogo.jpg"
function Logo({width = '100px'}) {
  return (
    <img height={50} width={80} src={logo} alt="xyz"/>
  )
}

export default Logo
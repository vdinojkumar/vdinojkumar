import React from "react";
import { Link } from "react-router-dom";
import {Stack} from '@mui/material'
import Logo from '../assets/images/LOGO.png'

const Navbars = () => {
  return (
    <Stack  direction='row' justifyContent="space-around" 
    sx={{gap:{sm:'122px', xs:'40px'},mt: {sm : '32px' , xs:'20px'}, 
       justifyContent:'none'}} px='20px'>
      <Link to="/">
        <img src={Logo} alt="logo" style={{ 
          width:'45px' , height:'40px', 
          margin :'0 20px' }}/>
      </Link>
      <Stack direction="row" gap="40px" 
             fontSize="24px" fontFamily="Alegreya"
             alignItems="flex-end">
        <Link to="/" style={
          {textDecoration:'none',color:'#3A1212', 
          borderBottom:'3px solid #000000'}
         }>Home</Link>
        <a href="#exercises" style={
          {textDecoration:'none',color:'#3A1212'}
         }>Exercises</a>
      </Stack>
    </Stack>
  )
}
export default Navbars
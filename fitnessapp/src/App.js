import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetails from "./Pages/ExerciseDetails"
import Home from "./Pages/Home"
import Footer from "./component/Footers"
import Navbar from './component/Navbars';

function App() {
  return (
    <Box width="400px" sx={{width :{xl:'1488px'}}} m="auto">
      <Navbar/>
      <Routes>   
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetails/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;

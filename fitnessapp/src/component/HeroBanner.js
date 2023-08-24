import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        justifyContent:"right"
      }}
      position="relative"
      p="20px"
    >
      
      <Typography
        fontSize={'150px'} fontWeight={600}
        color=''
        sx={{
          opacity:0.1,
          display: { lg: 'block', xs: 'none' }
        }}
      > BUILD <br/> YOUR BODY</Typography>
      
      <Typography color='#fff'fontWeight={400} sx={{ fontSize: { lg: "35px", xs: '22px' } }} mb="20px" mt="30px">
       Fitness isn't always about greatness. it's about <br/>
       consistency . Consistent hard work , healthy <br/>
       will come.
      </Typography>
      
      
      <Typography fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most effective exercises
      </Typography>
      
      
      <Button variant="contained" color="error" href="#exercises" sx={{
      bgcolor:'#000000', 
      color:'#FFF',
      textTransform:'none',
      width:{lg:'300px' , xs:'150px'},
      fontSize:{lg:'20px',xs:'14px'},
      height:'56px',
      position:'absolute',
      right:'',
      }} >
        Explore Exercise
      </Button>
      
  
      
      
      
      <img
        src={HeroBannerImage}
        alt="banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;

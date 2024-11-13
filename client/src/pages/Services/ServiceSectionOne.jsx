import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Define a styled component for the hero section
const HeroSection = styled(Box)({
  height: "60vh", // Set the height to 50 viewport height
  background: "url('/src/assets/images/hero_bg_1.jpg')", // Replace with your image path
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white", // Text color
  textAlign: "center",
});

const ServiceSectionOne = () => {
  return (
    <HeroSection>
      <Typography variant="h2">Services</Typography>
    </HeroSection>
  );
};

export default ServiceSectionOne;

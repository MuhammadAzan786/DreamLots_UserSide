import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";
import HomeAppBar from "./HomeAppBar";
import HomeSectionOne from "./HomeSectionOne";
import HomeSectionTwo from "./HomeSectionTwo";
import HomeSectionThree from "./HomeSectionThree";
import HomeSectionFourth from "./HomeSectionFourth";
import HomeSectionFooter from "./HomeSectionFooter";
import HomeSectionFive from "./HomeSectionFive";

const Home = () => {
  return (
    <>
      <HomeAppBar />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFourth />
      <Box sx={{ backgroundColor: "#eaebf2" }}>
        <Container maxWidth="lg">
          <HomeSectionFive
            imageSrc="/src/assets/images/panaroma3.jpg"
            title="360 Virtual Tour"
            description="This is a stunning 360-degree view of a beautiful property."
          />
        </Container>
      </Box>
      <HomeSectionFooter />
    </>
  );
};

export default Home;

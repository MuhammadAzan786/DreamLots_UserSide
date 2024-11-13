import React from "react";
import { Box, Typography, Grid, Container, Button } from "@mui/material";
import { styled } from "@mui/system";
import HouseIcon from "@mui/icons-material/House";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ApartmentIcon from "@mui/icons-material/Apartment";

const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  padding: theme.spacing(4),
  textAlign: "center",
  transition: "box-shadow 0.3s",
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
}));

const ServiceSectionTwo = () => {
  return (
    <Box
      className="section bg-light"
      sx={{
        minHeight: "calc(70vh - 50px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FeatureCard data-aos="fade-up" data-aos-delay="300">
              <HouseIcon fontSize="large" color="primary" sx={{ mb: 2 }} />
              <Typography
                variant="h5"
                component="h3"
                sx={{ mb: 3, fontWeight: "bold" }}
              >
                Quality Properties
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Typography>
              <Button variant="contained" sx={{ mt: 3 }}>
                Read more
              </Button>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard data-aos="fade-up" data-aos-delay="400">
              <AccountBalanceIcon
                fontSize="large"
                color="primary"
                sx={{ mb: 2 }}
              />
              <Typography
                variant="h5"
                component="h3"
                sx={{ mb: 3, fontWeight: "bold" }}
              >
                Top Rated Agent
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Typography>
              <Button variant="contained" sx={{ mt: 3 }}>
                Read more
              </Button>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard data-aos="fade-up" data-aos-delay="500">
              <ApartmentIcon fontSize="large" color="primary" sx={{ mb: 2 }} />
              <Typography
                variant="h5"
                component="h3"
                sx={{ mb: 3, fontWeight: "bold" }}
              >
                Property for Sale
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Typography>
              <Button variant="contained" sx={{ mt: 3 }}>
                Read more
              </Button>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceSectionTwo;

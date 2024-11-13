import React, { useState } from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ExploreIcon from "@mui/icons-material/Explore";
import BusinessIcon from "@mui/icons-material/Business";
import HomeIcon from "@mui/icons-material/Home";

const SectionContainer = styled(Container)({
  height: "60vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const CustomCard = styled(Card)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: "#F8F9FA",
  padding: "20px 45px",
  boxShadow: "2px 4px 12px 0px rgba(0,0,0,0.39)",
  WebkitBoxShadow: "2px 4px 12px 0px rgba(0,0,0,0.39)",
  MozBoxShadow: "2px 4px 12px 0px rgba(0,0,0,0.39)",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#dddddd",
  },
}));

const IconContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "1rem",
}));

const CustomIcon = styled(({ component: Component, hover, ...props }) => (
  <Component {...props} />
))(({ theme, hover }) => ({
  position: "relative",
  zIndex: 2,
  fontSize: "3rem",
  color: !hover ? "#2C387E" : theme.palette.common.black,
  transition: "color 0.3s",
}));

const CardTitle = styled(Typography)({
  fontWeight: "bold",
  marginBottom: "0.5rem",
});

const CardSubtitle = styled(Typography)({
  color: "#666",
});

const HomeSectionTwo = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <SectionContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <CustomCard
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <CardContent>
              <IconContainer>
                <CustomIcon component={ExploreIcon} hover={hoveredCard === 1} />
              </IconContainer>
              <CardTitle>
                <Typography
                  variant="h4"
                  component="h2"
                  className="font-weight-bold text-primary heading"
                  style={{ marginBottom: "1rem" }}
                >
                  Virtual Tours
                </Typography>
              </CardTitle>
              <CardSubtitle variant="body2">
                Experience properties from the comfort of your home.
              </CardSubtitle>
            </CardContent>
          </CustomCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomCard
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <CardContent>
              <IconContainer>
                <CustomIcon
                  component={BusinessIcon}
                  hover={hoveredCard === 2}
                />
              </IconContainer>
              <CardTitle>
                <Typography
                  variant="h4"
                  component="h2"
                  className="font-weight-bold text-primary heading"
                  style={{ marginBottom: "1rem" }}
                >
                  Commercial
                </Typography>
              </CardTitle>
              <CardSubtitle variant="body2">
                Explore commercial properties for your business.
              </CardSubtitle>
            </CardContent>
          </CustomCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomCard
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <CardContent>
              <IconContainer>
                <CustomIcon component={HomeIcon} hover={hoveredCard === 3} />
              </IconContainer>
              <CardTitle>
                <Typography
                  variant="h4"
                  component="h2"
                  className="font-weight-bold text-primary heading"
                  style={{ marginBottom: "1rem" }}
                >
                  Residential
                </Typography>
              </CardTitle>
              <CardSubtitle variant="body2">
                Find your dream home in our residential listings.
              </CardSubtitle>
            </CardContent>
          </CustomCard>
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default HomeSectionTwo;

import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, CardActions } from "@mui/material";
import BedroomIcon from "@mui/icons-material/Hotel";
import BathroomIcon from "@mui/icons-material/Bathtub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Luxury Villa",
    price: 164226,
    area: 278,
    no_of_bedrooms: 2,
    no_of_bathrooms: 3,
    description:
      "Luxury villa with stunning views. Perfect for a peaceful getaway.",
    image: "/src/assets/images/prop1.jpg",
  },
  {
    title: "Modern Apartment",
    price: 120000,
    area: 180,
    no_of_bedrooms: 3,
    no_of_bathrooms: 2,
    description:
      "Stylish and modern apartment in the heart of the city. Close to amenities.",
    image: "/src/assets/images/prop2.jpg",
  },
  {
    title: "Cozy Cottage",
    price: 85000,
    area: 120,
    no_of_bedrooms: 2,
    no_of_bathrooms: 1,
    description:
      "Charming cottage nestled in a quaint countryside setting. Perfect for relaxation.",
    image: "/src/assets/images/prop3.jpg",
  },
  {
    title: "Spacious Townhouse",
    price: 200000,
    area: 220,
    no_of_bedrooms: 4,
    no_of_bathrooms: 3,
    description:
      "Large townhouse with ample space for a growing family. Convenient location.",
    image: "/src/assets/images/prop4.jpg",
  },
  {
    title: "Cozy Cottage",
    price: 85000,
    area: 120,
    no_of_bedrooms: 2,
    no_of_bathrooms: 1,
    description:
      "Charming cottage nestled in a quaint countryside setting. Perfect for relaxation.",
    image: "/src/assets/images/prop5.jpg",
  },
  {
    title: "Spacious Townhouse",
    price: 200000,
    area: 220,
    no_of_bedrooms: 4,
    no_of_bathrooms: 3,
    description:
      "Large townhouse with ample space for a growing family. Convenient location.",
    image: "/src/assets/images/prop6.jpg",
  },
  // Add more fake data for remaining cards...
];

export default function BuyPropertyCards() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} marginBottom={"30px"} marginTop={"30px"}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
              component={Link}
              to={"/propertyContent"}
            >
              <CardMedia
                sx={{ height: 0, paddingTop: "56.25%" }}
                image={card.image}
                title={card.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {`Price: Rs ${card.price}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`Area: ${card.area} sqft`}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <BedroomIcon />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ ml: 1 }}
                    >
                      {card.no_of_bedrooms}
                    </Typography>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <BathroomIcon />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ ml: 1 }}
                    >
                      {card.no_of_bathrooms}
                    </Typography>
                  </div>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined">
                  Share
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  startIcon={<VisibilityIcon />}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

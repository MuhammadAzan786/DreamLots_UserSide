import {
  Card,
  CardContent,
  Grid,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Box,
  styled,
  Container,
} from "@mui/material";
import React from "react";
import HomeAppBar from "../Home/HomeAppBar";
import HomeSectionFooter from "../Home/HomeSectionFooter";

const StyledFileInput = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  cursor: "pointer",
  marginBottom: theme.spacing(2),
  "&:hover": {
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[200],
  },
}));

const CreatePostForm = () => {
  const [formState, setFormState] = React.useState({
    title: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    propertyType: "",
    size: "",
    yearBuilt: "",
    parking: "",
    garage: "",
    numberOfFloors: "",
    garageLength: "",
    garageWidth: "",
    city: "",
    street: "",
    gas: "",
    water: "",
    electricity: "",
    rooms: "",
    roomImages: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handlePropertyTypeChange = (event) => {
    setFormState({
      ...formState,
      propertyType: event.target.value,
    });
  };

  // const handleRoomChange = (event) => {
  //   setFormState({
  //     ...formState,
  //     rooms: event.target.value,
  //   });
  // };

  // const handleImageUpload = (index) => (event) => {
  //   const newRoomImages = [...formState.roomImages];
  //   newRoomImages[index] = event.target.files[0];
  //   setFormState({
  //     ...formState,
  //     roomImages: newRoomImages,
  //   });
  // };

  const handleGarageChange = (event) => {
    setFormState({
      ...formState,
      garage: event.target.value,
    });
  };

  return (
    <>
      {/* <Typography sx={styles.pageTitle}>Add Property</Typography> */}
      <HomeAppBar />
      <Container maxWidth="lg" sx={{ mt: "50px", mb: "30px" }}>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="cardTitle">
                    Property Listing Form
                  </Typography>
                </Grid>
                {/* Existing fields */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="propertyType"
                    label="Property Type"
                    value={formState.propertyType}
                    onChange={handlePropertyTypeChange}
                    fullWidth
                    select
                  >
                    <MenuItem value="residential">Residential</MenuItem>
                    <MenuItem value="commercial">Commercial</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="size"
                    label="Size (sqft)"
                    value={formState.size}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="yearBuilt"
                    label="Year Built"
                    value={formState.yearBuilt}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="parking"
                    label="Parking"
                    value={formState.parking}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    name="bedrooms"
                    label="Number of Bedrooms"
                    value={formState.bedrooms}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="bathrooms"
                    label="Number of Bathrooms"
                    value={formState.bathrooms}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="floors-label">Number of Floors</InputLabel>
                    <Select
                      labelId="floors-label"
                      name="numberOfFloors"
                      value={formState.numberOfFloors}
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      {/* Add more floors as needed */}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="garage"
                    label="Garage"
                    value={formState.garage}
                    onChange={handleGarageChange}
                    fullWidth
                    select
                  >
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                  </TextField>
                </Grid>
                {/* Conditional rendering for garage fields */}
                {formState.garage === "yes" && (
                  <>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="garageLength"
                        label="Garage Length"
                        value={formState.garageLength}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="garageWidth"
                        label="Garage Width"
                        value={formState.garageWidth}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                  </>
                )}

                <Grid item xs={12} sm={6}>
                  <TextField
                    name="city"
                    label="City"
                    value={formState.city}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="street"
                    label="Street"
                    value={formState.street}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <TextField
                    name="gas"
                    label="Gas Utility"
                    value={formState.gas}
                    onChange={handleChange}
                    fullWidth
                    select
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    name="water"
                    label="Water Utility"
                    value={formState.water}
                    onChange={handleChange}
                    fullWidth
                    select
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    name="electricity"
                    label="Electricity Utility"
                    value={formState.electricity}
                    onChange={handleChange}
                    fullWidth
                    select
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <StyledFileInput>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      id="room-images"
                      style={{ display: "none" }}
                    />
                    <label htmlFor="room-images" style={{ cursor: "pointer" }}>
                      Upload Room Images
                    </label>
                  </StyledFileInput>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <StyledFileInput>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      id="room-images"
                      style={{ display: "none" }}
                    />
                    <label htmlFor="room-images" style={{ cursor: "pointer" }}>
                      Outer Elevation Images
                    </label>
                  </StyledFileInput>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <StyledFileInput>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      id="room-images"
                      style={{ display: "none" }}
                    />
                    <label htmlFor="room-images" style={{ cursor: "pointer" }}>
                      Garage Images
                    </label>
                  </StyledFileInput>
                </Grid>

                {/* Add more fields as needed */}
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: "20px" }}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
      <HomeSectionFooter />
    </>
  );
};

/**@type{import("@mui/material").SxProps} */
// const styles = {
//   pageTitle: {
//     fontSize: "2rem",
//     fontWeight: "500",
//     mb: 2,
//   },
// };

export default CreatePostForm;

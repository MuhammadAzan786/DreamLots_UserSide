import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const PropertySearchForm = () => {
  const [propertyType, setPropertyType] = React.useState("");
  const [budgetRange, setBudgetRange] = React.useState([100000, 10000000]);

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleBudgetRangeChange = (event, newValue) => {
    setBudgetRange(newValue);
  };

  return (
    <Container>
      <Box mt={4} mb={2}>
        <form>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth variant="outlined" size="small">
                <InputLabel>Property Type</InputLabel>
                <Select
                  value={propertyType}
                  onChange={handlePropertyTypeChange}
                  label="Property Type"
                >
                  <MenuItem value={"House"}>House</MenuItem>
                  <MenuItem value={"Apartment"}>Apartment</MenuItem>
                  <MenuItem value={"Condo"}>Condo</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <Typography id="budget-range-slider" gutterBottom>
                  Budget Range
                </Typography>
                <Slider
                  value={budgetRange}
                  onChange={handleBudgetRangeChange}
                  valueLabelDisplay="auto"
                  aria-labelledby="budget-range-slider"
                  min={100000}
                  max={10000000}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Number of Bedrooms"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Square Footage"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Year Built"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<SearchIcon />}
                  style={{ width: "100%" }}
                >
                  Search
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default PropertySearchForm;

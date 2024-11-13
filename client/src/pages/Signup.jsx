import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, Link as RouterLink } from "react-router-dom";

import {
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  Link,
} from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!username) {
      formErrors.username = "Username is required";
    }

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid";
    }

    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Form is valid, proceed with signup logic
      try {
        const response = await axios.post("http://localhost:5000/signup", {
          username,
          email,
          password,
          role,
        });
        console.log("Signup successful:", response.data);
        toast.success("Registered Successfully");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
        // Handle successful signup
      } catch (error) {
        console.error("Error signing up:", error);
        toast.error("Error signing up !");
        // Handle signup error
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5", // Dull white background
          padding: 2,
        }}
      >
        <Card sx={{ minWidth: 320, width: "50%", padding: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              marginBottom={"15px"}
            >
              Sign Up
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={!!errors.username}
                    helperText={errors.username}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!errors.password}
                    helperText={errors.password}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  {/* <Typography variant="h6" gutterBottom>
                    Role
                  </Typography> */}
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant={role === "buyer" ? "contained" : "outlined"}
                        color="primary"
                        onClick={() => setRole("buyer")}
                      >
                        Buyer
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        fullWidth
                        variant={role === "seller" ? "contained" : "outlined"}
                        color="primary"
                        onClick={() => setRole("seller")}
                      >
                        Seller
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box
                    border={1}
                    borderRadius={1}
                    borderColor="grey.500"
                    p={1}
                    textAlign="center"
                  >
                    <label htmlFor="profile-pic" style={{ cursor: "pointer" }}>
                      Upload Profile Picture
                    </label>
                    <input
                      id="profile-pic"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Sign Up
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center" mt={2}>
                    <Typography variant="body2">
                      Already have an account?{" "}
                      <Link
                        component={RouterLink}
                        to={"/login"}
                        variant="body2"
                        color="primary"
                        sx={{ cursor: "pointer" }}
                      >
                        Log In
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Box>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Signup;

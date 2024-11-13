// ForgetPassword.js
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

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Form is valid, proceed with forget password logic
      try {
        const response = await axios.post(
          "http://localhost:5000/forget-password",
          {
            email,
          }
        );
        console.log("Password reset email sent:", response.data);
        toast.success("Password reset email sent");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
        // Handle successful forget password request
      } catch (error) {
        console.error("Error sending password reset email:", error);
        toast.error("Error sending password reset email!");
        // Handle forget password error
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
              Forget Password
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Reset Password
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center" mt={2}>
                    <Typography variant="body2">
                      Remember your password?{" "}
                      <Link
                        component={RouterLink}
                        to="/login"
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

export default ForgetPassword;

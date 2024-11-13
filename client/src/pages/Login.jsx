import React, { useState } from "react";
import axios from "axios";
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
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { SetUser } from "../redux/AuthSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!username) {
      formErrors.username = "Username is required";
    }

    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Form is valid, proceed with signup logic
      try {
        const response = await axios.post("http://localhost:5000/login", {
          username,
          password,
        });
        console.log("Login successful:", response.data);
        const data = response.data.User;

        dispatch(SetUser({ ...data }));
        toast.success("Login Successfull");
        if (data.role == "admin") {
          setTimeout(() => {
            navigate("/admin");
          }, 1500);
        } else if (data.role == "buyer") {
          setTimeout(() => {
            navigate("/buyer");
          }, 1500);
        } else if (data.role == "seller") {
          setTimeout(() => {
            navigate("/seller");
          }, 1500);
        }

        // Handle successful signup
      } catch (error) {
        console.error("Error Logging In:", error);
        toast.error("Error Logging In !");
        // Handle signup error
      }
      // Form is valid, proceed with login logic
      console.log("Form submitted", { username, password });
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
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={!!errors.username}
                    helperText={errors.username}
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!errors.password}
                    helperText={errors.password}
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Link
                      to={"/forgetpassword"}
                      variant="body2"
                      sx={{ cursor: "pointer" }}
                      component={RouterLink}
                    >
                      Forgot password?
                    </Link>
                    <Typography variant="body2">
                      <Box ml={2}>
                        {"Don't have an account? "}

                        <Link
                          component={RouterLink}
                          to={"/signup"}
                          variant="body2"
                          color="primary"
                          sx={{ cursor: "pointer" }}
                        >
                          Sign Up
                        </Link>
                      </Box>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Box>
      <Toaster />
    </>
  );
};

export default Login;

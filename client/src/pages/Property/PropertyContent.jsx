/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Snackbar,
  Alert,
  TextField,
  Avatar,
  Table,
  TableContainer,
  TableCell,
  TableRow,
  ListItemAvatar,
  Card,
  CardContent,
  TableBody,
} from "@mui/material";
import house1 from "/src/assets/images/prop1.jpg";
import house2 from "/src/assets/images/prop2.jpg";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import IosShareIcon from "@mui/icons-material/IosShare";
import StarIcon from "@mui/icons-material/Star";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ArrowBack from "@mui/icons-material/ArrowBack";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import HomeAppBar from "../Home/HomeAppBar";

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const center = {
  lat: 32.0836, // Latitude for Sargodha, Punjab
  lng: 72.6711, // Longitude for Sargodha, Punjab
};

const PropertyContent = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [open, setOpen] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    setOpen(true); // Open the Snackbar
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  // comments
  const commentsData = [
    {
      id: 1,
      username: "John Doe",
      text: "This is the first comment",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      username: "Jane Smith",
      text: "This is the second comment",
      avatar: "https://via.placeholder.com/150",
    },
  ];
  const [comments, setComments] = useState(commentsData);
  const [text, setText] = useState("");

  const addComment = (text) => {
    const newComment = {
      id: comments.length + 1,
      username: "Anonymous", // You can replace this with a dynamic username input
      text,
      avatar: "https://via.placeholder.com/150",
    };
    setComments([...comments, newComment]);
    setText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addComment(text);
    }
  };
  // messager Box
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello!", sender: "seller" },
    { id: 2, text: "How are you?", sender: "seller" },
    { id: 3, text: "Hi there!", sender: "buyer" },
    { id: 4, text: "I am good, thank you!", sender: "buyer" },
    { id: 5, text: "Nice weather today!", sender: "seller" },
    { id: 6, text: "How is it going?", sender: "seller" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, sender: "buyer" },
      ]);
      setNewMessage("");
    }
  };
  // table

  const [showMore, setShowMore] = useState(false);

  const toggleRowsVisibility = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <HomeAppBar />
      <Container
        maxWidth="xl"
        sx={{
          background: "#f1f1f1",
          width: "100%",
          height: "auto",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg" sx={{ py: 3, color: "#0f0f0f" }}>
          {/* <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}> */}
          {/* <Link to="/Homepage">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    marginBottom: 2,
                    background:
                      "linear-gradient(45deg, #2177FE 30%, #21C5FD 90%)",
                    color: "white",
                    fontWeight: "bold",
                    // borderRadius: 5,
                    marginTop: "0.9rem",
                    paddingTop: "10px",
                  }}
                >
                  <ArrowBack /> Back
                </Button>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            > */}
          {/* <Button sx={{ width: "100%" }} onClick={handleFavoriteClick}>
                {isFavorite ? (
                  <FavoriteIcon sx={{ mr: 1 }} />
                ) : (
                  <FavoriteBorderOutlinedIcon sx={{ mr: 1 }} />
                )}
                Favorite
              </Button>
              <Button sx={{ width: "100%" }}>
                <IosShareIcon sx={{ mr: 1 }} /> Share
              </Button> */}
          {/* </Grid>
          </Grid> */}
          {/* <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Property saved in favorites
            </Alert>
          </Snackbar> */}
        </Container>

        <Container maxWidth="lg" sx={{ paddingBottom: "1rem" }}>
          <Typography variant="h4" sx={{ fontWeight: 600, pt: 3, px: 1 }}>
            Luxuary Family Home
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              py: 2,
              px: 1,
              color: "gray",
              display: "flex",
              alignContent: "center",
            }}
          >
            <LocationOnIcon
              sx={{ color: "red", fontSize: "1.4rem", px: "1" }}
            />{" "}
            1234 Elm Street Springfield, IL 62704 Pakistan
          </Typography>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              >
                <img src={house1} alt="" style={{ width: "100%" }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <ImageList cols={2} rowHeight={160}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img} sx={{ overflow: "hidden" }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ width: "100%", height: "auto", borderRadius: 5 }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Grid>
          </Grid>
          <Box sx={{ py: 2 }}>
            <hr />
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={8}>
                {/* Property Content */}
                <Paper>
                  <Box sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", float: "right" }}
                    >
                      PKR 25,00,000
                    </Typography>
                    <Box py={2}>
                      <Grid container spacing={1} alignItems="center">
                        <Grid item>
                          <BedIcon />
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">3 beds</Typography>
                        </Grid>
                        <Grid item>
                          <BathtubIcon />
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">1 bath</Typography>
                        </Grid>
                        <Grid item>
                          <SquareFootIcon />
                        </Grid>
                        <Grid item>
                          <Typography variant="body1">500 SqFt</Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "1rem",
                      }}
                    >
                      <StarIcon />
                      <Box
                        sx={{ display: "flex", alignItems: "center", ml: 1 }}
                      >
                        4.9/5
                        <Box
                          component="span"
                          sx={{ textDecoration: "underline", ml: 1 }}
                        >
                          10 reviews
                        </Box>
                      </Box>
                    </Typography>

                    <Box py={2}>
                      <Grid container spacing={1} alignItems="center">
                        <Grid item>
                          <Avatar>AA</Avatar>
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" sx={{ fontSize: "14px" }}>
                            Arslan Asif
                          </Typography>
                          <Typography variant="body2" sx={{ fontSize: "12px" }}>
                            Top Seller
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>

                    <Box sx={{ py: 2 }}>
                      <hr />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          paddingBottom: "1.1rem",
                        }}
                      >
                        Detail
                      </Typography>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              Type
                            </TableCell>
                            <TableCell>House</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              Area
                            </TableCell>
                            <TableCell>5000 Sqft</TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              Price
                            </TableCell>
                            <TableCell>PKR 25,00,000</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              Purpose
                            </TableCell>
                            <TableCell>Sale</TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              Bed Room
                            </TableCell>
                            <TableCell>4</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              Bath
                            </TableCell>
                            <TableCell>3</TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              Kitchen
                            </TableCell>
                            <TableCell>2</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              Floors
                            </TableCell>
                            <TableCell>2</TableCell>
                          </TableRow>

                          {[...Array(0)].map((_, index) => (
                            <TableRow key={index}>
                              <TableCell sx={{ fontWeight: "bold" }}>
                                Row {index + 1}
                              </TableCell>
                              <TableCell>Detail {index + 1}</TableCell>
                              <TableCell sx={{ fontWeight: "bold" }}>
                                Column {index + 1}
                              </TableCell>
                              <TableCell>Value {index + 1}</TableCell>
                            </TableRow>
                          ))}

                          {/* Additional Rows */}
                          {showMore &&
                            [...Array(4)].map((_, index) => (
                              <TableRow key={index + 4}>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                  Additional Row {index + 1}
                                </TableCell>
                                <TableCell>Detail {index + 5}</TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                  Column {index + 5}
                                </TableCell>
                                <TableCell>Value {index + 5}</TableCell>
                              </TableRow>
                            ))}
                          {/* Toggle Button */}
                          <TableRow>
                            <TableCell colSpan={4} align="right">
                              <Button onClick={toggleRowsVisibility}>
                                {showMore ? "Show Less" : "Show More"}
                              </Button>
                            </TableCell>
                          </TableRow>
                        </Table>
                      </TableContainer>
                    </Box>

                    <Box sx={{ py: 2 }}>
                      <hr />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          paddingBottom: "1.1rem",
                        }}
                      >
                        Description
                      </Typography>
                      <Typography sx={{ fontSize: "0.8rem" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ex voluptas nisi molestiae consequatur eius natus
                        quidem quos sint fugiat vel eum, perspiciatis impedit
                        obcaecati ducimus iure itaque repellendus voluptate,
                        accusantium vero numquam unde ipsa amet!
                      </Typography>
                    </Box>

                    <Box sx={{ py: 2 }}>
                      <hr />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          paddingBottom: "1.1rem",
                        }}
                      >
                        Location
                      </Typography>
                      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                        <GoogleMap
                          mapContainerStyle={mapContainerStyle}
                          center={center}
                          zoom={14}
                        >
                          <Marker position={center} />
                        </GoogleMap>
                      </LoadScript>
                    </Box>

                    <Box sx={{ py: 2 }}>
                      <hr />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          paddingBottom: "1.1rem",
                        }}
                      >
                        Comments & Reviews
                      </Typography>
                      <Container maxWidth="lg">
                        <Box sx={{ my: 4 }}>
                          <List>
                            {comments.map((comment) => (
                              <ListItem
                                key={comment.id}
                                alignItems="flex-start"
                              >
                                <ListItemAvatar>
                                  <Avatar
                                    alt={comment.username}
                                    src={comment.avatar}
                                  />
                                </ListItemAvatar>
                                <Card sx={{ width: "100%", mb: 2 }}>
                                  <CardContent>
                                    <Typography
                                      variant="subtitle1"
                                      component="div"
                                    >
                                      {comment.username}
                                    </Typography>
                                    <Typography
                                      variant="body2"
                                      color="text.secondary"
                                    >
                                      {comment.text}
                                    </Typography>
                                  </CardContent>
                                </Card>
                              </ListItem>
                            ))}
                          </List>
                          <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                            }}
                          >
                            <TextField
                              label="Add a comment"
                              variant="outlined"
                              value={text}
                              onChange={(e) => setText(e.target.value)}
                              fullWidth
                            />
                            <Button
                              type="submit"
                              variant="contained"
                              color="primary"
                              sx={{ borderRadius: 5 }}
                            >
                              Comment
                            </Button>
                          </Box>
                        </Box>
                      </Container>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
              {/* Message Box */}
              <Grid item lg={4} md={12} sm={12} sx={{ paddingBottom: "1rem" }}>
                {/* shechule Tour */}
                <Box component={Paper} sx={{ paddingBottom: "1rem" }}>
                  <Box sx={{ py: 3 }}>
                    <MessageTwoToneIcon
                      sx={{
                        fontSize: "3rem",
                        margin: "0 auto",
                        color: "#1769aa",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1.4rem",
                    }}
                  >
                    How can we help?
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      display: "block",
                      width: "80%",
                      margin: " 0.8rem auto",
                      borderRadius: 5,
                    }}
                  >
                    Schedule Tour
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      display: "block",
                      width: "80%",
                      margin: "0.5rem auto",
                      borderRadius: 5,
                    }}
                  >
                    Ask a Question
                  </Button>
                </Box>

                {/* message box */}
                <Box sx={{ py: 2 }}>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: "16px",
                      minHeight: "400px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: "bold", textAlign: "center", py: 1 }}
                    >
                      <Box component="span">Message with Seller</Box>
                    </Typography>
                    <Box
                      sx={{
                        flexGrow: 1,
                        overflowY: "auto",
                        marginBottom: "16px",
                        padding: "8px",
                        border: "1px solid #e0e0e0",
                        borderRadius: "4px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      {messages.map((message) => (
                        <Box
                          key={message.id}
                          sx={{
                            alignSelf:
                              message.sender === "buyer"
                                ? "flex-end"
                                : "flex-start",
                            maxWidth: "70%",
                            padding: "8px",
                            backgroundColor:
                              message.sender === "buyer"
                                ? "#3f51b5"
                                : "#e0e0e0",
                            color:
                              message.sender === "buyer"
                                ? "#ffffff"
                                : "#000000",
                            borderRadius: "8px",
                          }}
                        >
                          <Typography variant="body1">
                            {message.text}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <TextField
                        variant="outlined"
                        placeholder="Type a message..."
                        fullWidth
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        sx={{ marginRight: "8px" }}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon />}
                        onClick={handleSend}
                      >
                        Send
                      </Button>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Container>
    </>
  );
};

const itemData = [
  {
    img: house1,
    title: "Image 1",
  },
  {
    img: house2,
    title: "Image 2",
  },
  {
    img: house2,
    title: "Image 3",
  },
  {
    img: house1,
    title: "Image 4",
  },
];

export default PropertyContent;

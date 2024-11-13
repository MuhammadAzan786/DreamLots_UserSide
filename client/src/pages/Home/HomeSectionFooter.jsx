import React from "react";
import {
  Container,
  Grid,
  Link,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  ChevronRight,
} from "@mui/icons-material";

const HomeSectionFooter = () => {
  return (
    <>
      <section style={{ padding: "40px 0", background: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div>
                <Typography variant="h5" className="text-brand">
                  EstateAgency
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ marginTop: "10px" }}
                >
                  Enim minim veniam quis nostrud exercitation ullamco laboris
                  nisi ut aliquip exea commodo consequat duis sed aute irure.
                </Typography>
                <List sx={{ marginTop: "10px" }}>
                  <ListItem disableGutters>
                    <Typography variant="h6" color="textSecondary">
                      <span style={{ color: "#2C387E" }}>Phone: </span>{" "}
                      DreamLotsSupport@gmail.com
                    </Typography>
                  </ListItem>
                  <ListItem disableGutters>
                    <Typography variant="h6" color="textSecondary">
                      <span style={{ color: "#2C387E" }}>Email: </span>{" "}
                      03107747765
                    </Typography>
                  </ListItem>
                </List>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div>
                <Typography variant="h5" className="text-brand">
                  DreamLots
                </Typography>
                <List>
                  {[
                    "Buy Property",
                    "Rent Property",
                    "Virtual Tour Services",
                    "Virtual Tours",
                    "Contact",
                    "Sign In",
                  ].map((item, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemIcon>
                        <ChevronRight
                          fontSize="medium"
                          sx={{ color: "#2C387E" }}
                        />
                      </ListItemIcon>
                      <Link href="#" underline="hover" color="inherit">
                        <ListItemText primary={item} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div>
                <Typography variant="h5" className="text-brand">
                  We Are In
                </Typography>
                <List>
                  {[
                    "Pakistan",
                    "Saudi Arabia",
                    "United Arab Emirates",
                    "Bangladesh",
                    "Africa",
                    "Philippines",
                  ].map((item, index) => (
                    <ListItem key={index} disableGutters>
                      <ListItemIcon>
                        <ChevronRight
                          fontSize="medium"
                          sx={{ color: "#2C387E" }}
                        />
                      </ListItemIcon>
                      <Link href="#" underline="hover" color="inherit">
                        <ListItemText primary={item} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <footer
        style={{ background: "#2C387E", padding: "20px 0", color: "#fff" }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <div>
                <List
                  sx={{ display: "flex", justifyContent: "center", padding: 0 }}
                >
                  {[
                    { icon: <Facebook />, href: "#" },
                    { icon: <Twitter />, href: "#" },
                    { icon: <Instagram />, href: "#" },
                    { icon: <LinkedIn />, href: "#" },
                  ].map((social, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        display: "inline",
                        width: "auto",
                        padding: "0 10px",
                      }}
                    >
                      <Link href={social.href} color="inherit">
                        {social.icon}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography textAlign={"center"} variant="body2">
                Final Year Project . Arslan Asif / Saleeha Akram / Muhammad Azan
                Afzal
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default HomeSectionFooter;

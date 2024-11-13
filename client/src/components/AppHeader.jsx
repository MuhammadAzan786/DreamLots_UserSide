import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { useProSidebar } from "react-pro-sidebar";

const AppHeader = () => {
  const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
  return (
    <>
      <AppBar position="sticky" sx={styles.appBar}>
        <Toolbar>
          <IconButton
            onClick={() => {
              broken ? toggleSidebar() : collapseSidebar();
            }}
            color="secondary"
          >
            <MenuIcon />
          </IconButton>
          {/* <Box
            component="img"
            sx={styles.appLogo}
            src="/src/assets/IMAGES/pexels-hngstrm-3654216.jpg"
          ></Box> */}
          <Typography variant="h6">DREAMLOTS</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton title="Notifications" color="secondary">
            <Badge badgeContent={14} color="error">
              <NotificationsActiveIcon />
            </Badge>
          </IconButton>
          <IconButton title="settings" color="secondary">
            <SettingsIcon />
          </IconButton>
          <IconButton title="logout" color="secondary">
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppHeader;

/**@type {import("@mui/material").SxProps} */
const styles = {
  appBar: {
    bgcolor: "neutral.main",
  },
  appLogo: {
    height: "3vh",
    width: "3vw",
    borderRadius: 5,
    ml: 2,
    mr: 2,
  },
};

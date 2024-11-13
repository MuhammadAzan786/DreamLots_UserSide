import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Avatar, Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link, useLocation } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BusinessIcon from "@mui/icons-material/Business";
import AddHomeIcon from "@mui/icons-material/AddHome";
const SideNav = () => {
  const theme = useTheme();
  const location = useLocation();
  const { collapsed } = useProSidebar();
  return (
    <>
      <Sidebar
        style={{ height: "100%", top: "auto" }}
        breakPoint="md"
        backgroundColor={theme.palette.neutral.light}
      >
        <Box sx={styles.avatarContainer}>
          {!collapsed ? (
            <Avatar
              sx={styles.avatar}
              alt="profile img"
              src="/src/assets/IMAGES/img1.jpeg"
            ></Avatar>
          ) : null}
          {!collapsed ? (
            <Typography variant="body2" sx={styles.yourName}>
              Muhammad Azan
            </Typography>
          ) : null}
          {!collapsed ? (
            <Typography variant="body2" sx={styles.yourDesig}>
              ADMIN
            </Typography>
          ) : null}
        </Box>
        <Menu
          menuItemStyles={{
            button: ({ active }) => {
              return {
                backgroundColor: active
                  ? theme.palette.neutral.medium
                  : undefined,
              };
            },
          }}
        >
          <MenuItem
            active={location.pathname === "/"}
            component={<Link to="/" />}
            icon={<DashboardIcon />}
          >
            <Typography variant="body2">Dashboard</Typography>
          </MenuItem>
          {/* <MenuItem
            active={location.pathname === "/content"}
            component={<Link to="/content" />}
            icon={<SourceIcon />}
          >
            <Typography variant="body2">Content</Typography>
          </MenuItem>
          <MenuItem
            active={location.pathname === "/analytics"}
            component={<Link to="/analytics" />}
            icon={<StyleIcon />}
          >
            <Typography variant="body2">Analytics</Typography>
          </MenuItem>
          <MenuItem
            active={location.pathname === "/customization"}
            component={<Link to="/customization" />}
            icon={<ArchitectureIcon />}
          >
            <Typography variant="body2">Customization</Typography>
          </MenuItem> */}
          <SubMenu
            label={<Typography variant="body2">Users</Typography>}
            icon={<PersonOutlineIcon />}
          >
            <MenuItem
              active={location.pathname === "/buyer"}
              component={<Link to="/buyer" />}
            >
              <Typography variant="body2">Buyers</Typography>
            </MenuItem>
            <MenuItem
              active={location.pathname === "/seller"}
              component={<Link to="/seller" />}
            >
              <Typography variant="body2">Sellers</Typography>
            </MenuItem>
          </SubMenu>
          <MenuItem
            active={location.pathname === "/property"}
            component={<Link to="/property" />}
            icon={<BusinessIcon />}
          >
            <Typography variant="body2">Property Manager</Typography>
          </MenuItem>

          <MenuItem
            active={location.pathname === "/addproperty"}
            component={<Link to="/addproperty" />}
            icon={<AddHomeIcon />}
          >
            <Typography variant="body2">Create Property Post</Typography>
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

/**@type {import("@mui/material").SxProps} */
const styles = {
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    my: 2,
  },
  avatar: {
    width: "36%",
    height: "12vh",
  },
  yourName: {
    mt: 1,
  },
  yourDesig: {
    fontWeight: "600",
  },
};

export default SideNav;

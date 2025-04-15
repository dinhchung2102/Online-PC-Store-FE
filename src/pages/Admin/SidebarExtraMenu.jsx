import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import { Link } from "react-router-dom";

const menuItems = [
  { text: "Home", icon: <HomeIcon />, to: "/admin/home" },
  { text: "Analytics", icon: <BarChartIcon />, to: "/admin/analytics" },
  { text: "Clients", icon: <PeopleIcon />, to: "/admin/clients" },
  { text: "Tasks", icon: <AssignmentIcon />, to: "/admin/tasks" },
  { text: "Settings", icon: <SettingsIcon />, to: "/admin/settings" },
  { text: "About", icon: <InfoIcon />, to: "/admin/about" },
  { text: "Feedback", icon: <HelpIcon />, to: "/admin/feedback" },
];

const SidebarExtraMenu = () => {
  return (
    <List dense>
      {menuItems.map(({ text, icon, to }) => (
        <ListItem key={text} disablePadding>
          <ListItemButton component={Link} to={to}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarExtraMenu;

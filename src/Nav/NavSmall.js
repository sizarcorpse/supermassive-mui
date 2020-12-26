import React, { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { ThemeDistributor } from "../Theme/ThemeDistributor";
import {
  withStyles,
  CssBaseline,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Hidden,
  SvgIcon,
  Tooltip
} from "@material-ui/core";

import Header from "../Head/Header";

const NavSmall = (props) => {
  const { classes, handleNavSmallModalClose } = props;

  return (
    <Grid
      container
      component="main"
      style={{ height: "100vh", background: "#f9f7f7" }}
    >
      <CssBaseline />
      <Grid item xs={12} style={{ height: 50 }}>
        <Header
          closeMe={true}
          handleNavSmallModalClose={handleNavSmallModalClose}
        />
      </Grid>

      <Grid item xs={12}>
        <Box className={classes.scui_box_grid} height="100vh">
          <Box className={classes.ScuiSkillCard}>
            <Typography variant="h3" color="primary">
              Home
            </Typography>
          </Box>
          <Box className={classes.ScuiSkillCard}>
            <Typography variant="h3" color="primary">
              Categories...
            </Typography>
          </Box>
          <Box className={classes.ScuiSkillCard}>
            <Typography variant="h3" color="primary">
              Posts By Reaction
            </Typography>
          </Box>
          <Box className={classes.ScuiSkillCard}>
            <Typography variant="h3" color="primary">
              Archive
            </Typography>
          </Box>
          <Box className={classes.ScuiSkillCard}>
            <Typography variant="h3" color="primary">
              Sample Page
            </Typography>
          </Box>
          <Box className={classes.ScuiSkillCard}>
            <Typography variant="h3" color="primary">
              Contact Form
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(NavSmall);

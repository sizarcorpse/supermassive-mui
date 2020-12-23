import React, { useState } from "react";
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

const Nav = (props) => {
  const { classes } = props;

  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={12}>
        <AppBar
          position="static"
          elevation={0}
          className={classes.scui_nav_appbar}
        >
          <Toolbar className={classes.scui_nav_toolbar}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box></Box>
              <Box display="flex">
                {[
                  "Home",
                  "Categories",
                  "Post by Reaction",
                  "Archive",
                  "Sample Page",
                  "Contat Form"
                ].map((m, i) => (
                  <Box key={i} m={2}>
                    <Link to="#" className={classes.scui_link_underline_remove}>
                      <Typography
                        variant="h2"
                        color="primary"
                        className={classes.scui_nav_onhover}
                      >
                        {m}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
              <Box></Box>
            </Box>
          </Toolbar>
        </AppBar>
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
)(Nav);

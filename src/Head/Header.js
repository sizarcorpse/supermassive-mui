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
import DateRangeIcon from "@material-ui/icons/DateRange";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import Angry from "../assets/angry.svg";
import Care from "../assets/care.svg";
import Haha from "../assets/haha.svg";
import Love from "../assets/love.svg";
import Sad from "../assets/sad.svg";
import Wow from "../assets/wow.svg";
import Like from "../assets/like.svg";

const Home = (props) => {
  const { classes, closeMe, handleNavSmallModalClose } = props;

  return (
    <Grid container component="main">
      <CssBaseline />

      <AppBar
        position="static"
        className={classes.scui_header_appbar}
        elevation={0}
      >
        <Toolbar className={classes.scui_header_toolbar}>
          <Hidden xsDown>
            <Grid
              item
              xs={false}
              sm={5}
              md={3}
              lg={2}
              xl={2}
              style={{ borderRight: "1px solid #e3e3e3" }}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <DateRangeIcon
                  color="primary"
                  className={classes.scui_header_cal_icon}
                />
                <Typography variant="h1" color="primary">
                  Wednesday, December 23
                </Typography>
              </Box>
            </Grid>
          </Hidden>
          <Grid
            item
            xs={6}
            sm={7}
            md={9}
            lg={9}
            xl={9}
            style={{ borderRight: "1px solid #e3e3e3" }}
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Hidden smDown>
                <Box flexGrow={1} flexShrink={1}>
                  <Box display="flex">
                    {["Home", "Archive", "Contact"].map((m, i) => (
                      <Box key={i} mx={1}>
                        <Typography variant="h1" color="primary">
                          {m}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Hidden>
              <Hidden mdDown>
                <Box display="flex" flexGrow={1}>
                  <Typography variant="h1" color="primary">
                    This is supermassive black hole aha!!
                  </Typography>
                </Box>
              </Hidden>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                mx={1}
                ml="auto"
              >
                <Tooltip title="Like">
                  <Box display="flex">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton className={classes.scui_header_iconbutton}>
                        <img
                          src={Like}
                          alt=""
                          className={classes.scui_header_reaction_icon}
                        />
                      </IconButton>
                    </motion.div>
                  </Box>
                </Tooltip>
                <Tooltip title="Haha">
                  <Box display="flex">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton className={classes.scui_header_iconbutton}>
                        <img
                          src={Haha}
                          alt=""
                          className={classes.scui_header_reaction_icon}
                        />
                      </IconButton>
                    </motion.div>
                  </Box>
                </Tooltip>
                <Tooltip title="Love">
                  <Box display="flex">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton className={classes.scui_header_iconbutton}>
                        <img
                          src={Love}
                          alt=""
                          className={classes.scui_header_reaction_icon}
                        />
                      </IconButton>
                    </motion.div>
                  </Box>
                </Tooltip>
                <Tooltip title="Sad">
                  <Box display="flex">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton className={classes.scui_header_iconbutton}>
                        <img
                          src={Sad}
                          alt=""
                          className={classes.scui_header_reaction_icon}
                        />
                      </IconButton>
                    </motion.div>
                  </Box>
                </Tooltip>
                <Tooltip title="Angry">
                  <Box display="flex">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton className={classes.scui_header_iconbutton}>
                        <img
                          src={Angry}
                          alt=""
                          className={classes.scui_header_reaction_icon}
                        />
                      </IconButton>
                    </motion.div>
                  </Box>
                </Tooltip>
                <Tooltip title="Wow">
                  <Box display="Wow">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton className={classes.scui_header_iconbutton}>
                        <img
                          src={Wow}
                          alt=""
                          className={classes.scui_header_reaction_icon}
                        />
                      </IconButton>
                    </motion.div>
                  </Box>
                </Tooltip>
                <Tooltip title="Care">
                  <Box display="Care">
                    <motion.div
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton className={classes.scui_header_iconbutton}>
                        <img
                          src={Care}
                          alt=""
                          className={classes.scui_header_reaction_icon}
                        />
                      </IconButton>
                    </motion.div>
                  </Box>
                </Tooltip>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} sm={2} md={1} lg={1} xl={1}>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              p={1}
            >
              {closeMe === true ? (
                <CloseIcon
                  color="primary"
                  onClick={() => {
                    handleNavSmallModalClose(false);
                  }}
                />
              ) : (
                <SearchIcon color="primary" />
              )}
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(Home);

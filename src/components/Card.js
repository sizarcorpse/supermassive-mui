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
  Tooltip,
  Card,
  CardHeader,
  CardMedia
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

const GCard = (props) => {
  const { classes, closeMe, handleNavSmallModalClose } = props;
  return (
    <Box mx={10}>
      <Card className={classes.scui_card_gp}>
        <Box>
          <Box display="flex" alignItems="flex-start" m={3}>
            <Button variant="contained">sizar</Button>
            <Button variant="contained">corpse</Button>
          </Box>
          {/* <Box>
            <img
              className={classes.scui_card_gp_photo}
              src="https://w.wallhaven.cc/full/j3/wallhaven-j38gm5.jpg"
              alt=""
              title="Paella dish"
            />
          </Box> */}
        </Box>
        <Box>
          <Box>ava</Box>
          <Box>author</Box>
        </Box>
        <Box>title</Box>
        <Box>higjlight</Box>
      </Card>
    </Box>
  );
};

export default withStyles(
  (theme) => ({
    // ...MuiNav(theme),
    ...ThemeDistributor(theme)
  }),
  { withTheme: true }
)(GCard);

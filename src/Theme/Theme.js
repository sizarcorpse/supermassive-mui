import { createMuiTheme } from "@material-ui/core/";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1b1b1b"
    },
    secondary: {
      main: "#f8fbff"
    }
  },
  typography: {
    fontFamily: '"Roboto"',
    h1: {
      // header

      fontSize: "12px",
      letterSpacing: "1px",
      wordSpacing: "2px",
      fontWeight: "400",
      textDecoration: "none solid rgb(68, 68, 68)",
      fontStyle: "normal",
      fontVariant: "normal",
      textTransform: "capitalize"
    },
    h2: {
      // navigation

      fontSize: "14px",
      letterSpacing: ".5px",
      wordSpacing: "2px",
      fontWeight: "500",
      textDecoration: "none solid rgb(68, 68, 68)",
      fontStyle: "normal",
      fontVariant: "normal",
      textTransform: "capitalize"
    },
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    body1: {},
    body2: {},
    subtitle1: {},
    subtitle2: {},
    button: {},
    caption: {},
    overline: {}
  }
});

theme.overrides = {
  MuiTooltip: {
    tooltip: {
      fontSize: 14,
      borderRadius: 15,
      position: "relative",
      top: -15
    }
  }
};

theme.props = {
  // #action :
};

export default theme;

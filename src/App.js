import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// #material-ui :
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme/Theme";

// #components :
import Header from "./Head/Header";
import Nav from "./Nav/Nav";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Route path="/" component={Header} />
          <Route path="/" component={Nav} />
          <Switch></Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

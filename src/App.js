import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// #material-ui :
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme/Theme";

// #components :
import Header from "./Head/Header";
import Nav from "./Nav/Nav";
import GCard from "./components/Card";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Route path="/" component={Header} />
          <Route path="/" component={Nav} />
          <Route path="/" component={GCard} />
          <Switch></Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import createApolloClient from "./graphql/createApolloClient";
import SimpleQuery from "./graphql/SimpleQuery";
import SimpleMutation from "./graphql/SimpleMutation";
import { Page } from "react-onsenui";
import LoggedInRoute from "./router/LoggedInRoute";
import LoggedOutRoute from "./router/LoggedOutRoute";

import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

const App = () => (
  <ApolloProvider client={createApolloClient()}>
    <Router>
      <Page>
        <div className="App">
          <nav>
            <h2>Routing</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <LoggedOutRoute path="/login">
              <h1>Login Form</h1>
            </LoggedOutRoute>
            <LoggedInRoute path="/dashboard">
              <h1>Dashboard</h1>
            </LoggedInRoute>
            <LoggedInRoute path="/" exact>
              <h1>Home Content</h1>
            </LoggedInRoute>
          </Switch>

          <SimpleMutation />
          <SimpleQuery />
        </div>
      </Page>
    </Router>
  </ApolloProvider>
);

export default App;

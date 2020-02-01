import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import logo from "./logo.svg";
import "./App.css";
import createApolloClient from "./graphql/createApolloClient";
import SimpleQuery from "./SimpleQuery";

function App() {
  const apolloClient = createApolloClient();

  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/users">
              <h1>Users</h1>
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>

          <SimpleQuery />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

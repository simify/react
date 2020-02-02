import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import createApolloClient from "./graphql/createApolloClient";
import SimpleQuery from "./graphql/SimpleQuery";
import SimpleMutation from "./graphql/SimpleMutation";
import { Page } from "react-onsenui";

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
                <Link to="/demo">Demo</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/demo">
              <h1>Demo Route Content</h1>
            </Route>
            <Route path="/" exact>
              <h1>Home Content</h1>
            </Route>
          </Switch>

          <SimpleMutation />
          <SimpleQuery />
        </div>
      </Page>
    </Router>
  </ApolloProvider>
);

export default App;

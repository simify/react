import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import createApolloClient from "./graphql/createApolloClient";
import SimpleQuery from "./graphql/SimpleQuery";
import SimpleMutation from "./graphql/SimpleMutation";
import { Page } from "react-onsenui";

import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import LoginState from "./login/LoginState";
import Navigation from "./router/Navigation";
import Content from "./router/Content";

const App = () => {
  return (
    <ApolloProvider client={createApolloClient()}>
      <Router>
        <Page>
          <div className="App">
            <h1>JackPotter</h1>
            <LoginState />
            <Navigation />
            <Content />
            <hr />
            <SimpleMutation />
            <SimpleQuery />
          </div>
        </Page>
      </Router>
    </ApolloProvider>
  );
};

export default App;

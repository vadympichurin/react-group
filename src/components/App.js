import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";

import HomePage from "../pages/HomePage";
import ArticlePage from "../pages/ArticlePage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/AboutPage";
import SingleArticlePage from "../pages/SingleArticlePage";

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route
        exact
        path="/"
        component={ HomePage }
      />
      <Route path="/about" component={AboutPage} />
      <Route exact path="/articles" component={ArticlePage} />
      <Route path="/articles/:id" component={SingleArticlePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;

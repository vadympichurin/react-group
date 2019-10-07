import React, { Component } from "react";
import { Route, Switch, Redirect, Link, NavLink } from "react-router-dom";
import Navigation from './Navigation';

import HomePage from '../pages/HomePage';
import ArticlePage from '../pages/ArticlePage';
import NotFoundPage from '../pages/NotFoundPage';
import AboutPage from '../pages/AboutPage';

import Article from './Article';
import SingleArticlePage from '../pages/SingleArticlePage';

// const AboutPage = () => <h1>About Page</h1>;
// const HomePage = ({title}) => <h1>{title}</h1>;
// const NotPage = () => <h1>Component not found</h1>
// const ArticlesPage = () => <h1>Article page</h1>

// NavLink имеет два атрибута activeStyle & activeClassName которые нужны для стилизации, также есть exact

const App = () => (
  <div>

    <Navigation />

    <Switch>
      {/* <Route exact path="/" component={HomePage} /> */}
      <Route exact path="/" render={ (props) => <HomePage title="HOME PAGE" {...props} />} />
      <Route path="/about" component={AboutPage} />
      <Route exact path="/articles" component={ArticlePage} />
      <Route path="/articles/:id" component={SingleArticlePage} />

      <Route component={NotFoundPage} />
      {/* <Route  component={NotPage} /> */}

      {/* <Redirect to="/" /> */}
    </Switch>
  </div>
);

export default App;

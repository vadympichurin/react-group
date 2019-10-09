import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from './Navigation';

// import HomePage from '../pages/HomePage';
// import ArticlePage from '../pages/ArticlePage';
// import NotFoundPage from '../pages/NotFoundPage';
// import AboutPage from '../pages/AboutPage';

// import Article from './Article';
// import SingleArticlePage from '../pages/SingleArticlePage';

const AsyncHomePage = lazy(() => import('../pages/HomePage' /* webpackChunkName: "home-page" */ ));
const AsyncAboutPage = lazy(() => import('../pages/AboutPage' /* webpackChunkName: "about-page" */ ));
const AsyncArticlePage = lazy(() => import('../pages/ArticlePage' /* webpackChunkName: "article-page" */ ));
const AsyncSingleArticlePage = lazy(() => import('../pages/SingleArticlePage' /* webpackChunkName: "singlearticle-page" */ ));
const AsyncNotFoundPage = lazy(() => import('../pages/NotFoundPage' /* webpackChunkName: "notfound-page" */ ));


// NavLink имеет два атрибута activeStyle & activeClassName которые нужны для стилизации, также есть exact

const App = () => (
  <div>

    <Navigation />

    <Switch>
      <Suspense fallback={ <h1>Loading...</h1> } >
      <Route exact path="/" component={AsyncHomePage} />
      <Route path="/about" component={AsyncAboutPage} />
      <Route exact path="/articles" component={AsyncArticlePage} />
      <Route path="/articles/:id" component={AsyncSingleArticlePage} />
      {/* <Route component={AsyncNotFoundPage} /> */}
      </Suspense>
    </Switch>
  </div>
);

export default App;

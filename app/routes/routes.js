import React from "react";
import { Route, IndexRoute } from "react-router";
import Loadable from "react-loadable";

const Loading = () => <div>Loading...</div>;

const App = Loadable({
  loader: () => import("../containers/App"),
  loading: Loading
});

const Home = Loadable({
  loader: () => import("../containers/Home"),
  loading: Loading
});

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);

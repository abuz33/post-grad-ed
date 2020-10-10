import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/pages/Header";
import { Watchlist } from "./components/pages/Watchlist";
import { Watched } from "./components/pages/Watched";
import { Add } from "./components/pages/Add";
import { Movie } from "./components/pages/Movie";

import NotFound from "./components/pages/404";
import "./App.css";

import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Watchlist />
          </Route>
          <Route path="/watchlist" exact>
            <Watchlist />
          </Route>
          <Route path="/watched" exact>
            <Watched />
          </Route>
          <Route path="/add" exact>
            <Add />
          </Route>

          <Route path="/:listName/:movieId" exact>
            <Movie />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;

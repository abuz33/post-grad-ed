import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movie from "./components/Pages/Movie";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Movie />;
      </Route>
    </Router>
  );
}

export default App;

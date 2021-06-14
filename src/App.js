import React from "react";
import "./null.css";
import "./index.css";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Subscribe from "./components/Subscribe/Subscribe";
import Films from "./components/Films/Films";
import Footer from "./components/Footer/Footer";
import { Route, Switch } from "react-router-dom";
import PageFilm from "./components/PageFilm/PageFilm";
import Menu from "./components/Header/Menu";
import Favorite from "./components/Favorite/Favorite";

function App() {
  return (
    <div className="app">
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Menu />
            <Header />
            <Gallery />
            <Subscribe />
            <Films />
          </Route>
          <Route exact path="/favorite">
            <Menu />
            <Favorite />
          </Route>
          <Route path="/:film">
            <Menu />
            <PageFilm />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import s from "./Favorite.module.css";
import { StateProvider, useStateValue } from "./../../context";
import Film from "../Film/Film";

function Favorite() {
  let [{ favorites }, dispatch] = useStateValue(StateProvider);
  return (
    <div className="container">
      <div className={s.favorite}>
        {favorites.length ?
          favorites.map(film => {

           return <Film film={film} dispatch={dispatch} key={film.title} />
          }) : 
          <h1>{"there're no favorite films yet".toUpperCase()}</h1>}
      </div>
    </div>
  );
}

export default Favorite;

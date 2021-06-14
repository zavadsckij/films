import React from "react";
import s from "./PageFilm.module.css";
import ReactPlayer from "react-player";
import { StateProvider, useStateValue } from './../../context';

function PageFilm() {
    const [state, dispatch] = useStateValue(StateProvider)
    let film = state.currentFilm
  return (
    <div className={s.pageFilm}>
      <div className="container">
        {film && (
          <>
            <h1>{film.title.toUpperCase()}</h1>
            <div className={s.film}>
              <img src={film.imgUrl} alt="film" />
              <div className={s.filmInfo}>
                <p>
                  <strong> Rating: </strong>
                  <span>{film.rating}</span>
                </p>
                <p>
                  <strong> Janres: </strong>
                  <span>{film.janres}</span>
                </p>
                <p>
                  <strong>Information: </strong>
                  {film.info}
                </p>
              </div>
            </div>
            <div className={s.video}>
              <ReactPlayer
                url={film.videoUrl}
                controls={true}
                className={s.player}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PageFilm;

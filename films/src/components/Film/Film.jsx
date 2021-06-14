import React, { useState } from "react";
import s from "./Film.module.css";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import CloseIcon from "@material-ui/icons/Close";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import { addToFavorites, setCurrentFilm } from "../../filmsReducer";

function Film({ film, dispatch }) {
  let [infoMode, setInfoMode] = useState(false);
  const history = useHistory()
  return (
    <div className={s.film}>
      {!infoMode ? (
        <>
          <div className={s.film_img_div}>
            <img src={film.imgUrl} alt="film img" className={s.film_img} />
            <div className={s.hover}>
                <PlayCircleFilledWhiteIcon
                onClick = {() => {
                  dispatch(setCurrentFilm(film))
                  history.push(`/${film.title.split(" ").join("-").toLowerCase()}`)
                  }}
                  />
              <span>Watch Now</span>
              <button
                onClick={() => {
                  setInfoMode(true);
                }}
              >
                View Info
              </button>
            </div>
          </div>
          <div className={s.film_info}>
            <div className={s.title}>
              <h3>{film.title.slice(0, 16)}</h3>
              <span className={s.rating}>{film.rating}</span>
            </div>
            <p>{film.janres}</p>
          </div>
        </>
      ) : (
        <div className={s.film_info_wrapper}  style = {{'backgroundImage': `url(${film.imgUrl})`}}>
          {/* <img src={film.imgUrl} alt="film img" className={s.film_img} /> */}
          <div className={s.info_inner}>
            <div className={s.film_control}>
              <CloseIcon
                onClick={() => {
                  setInfoMode(false);
                  dispatch(setCurrentFilm(film))
                }}
              />
              <button onClick = {() => dispatch(addToFavorites(film))}>+ Favorites</button>
              <MoreVertIcon />
            </div>
            <div className={s.film_info}>
              <div className={s.title}>
                <h3>{film.title.slice(0, 16)}</h3>
                <span className={s.rating}>{film.rating}</span>
              </div>
              <p>{film.janres}</p>
              <p className={s.info_description}>{film.info}</p>
                <button 
                onClick = {() => {
                  dispatch(setCurrentFilm(film))
                  history.push(`/${film.title.split(" ").join("-").toLowerCase()}`)
                  }}
                  >Watch Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Film;

import React from "react";
import s from "./Slider.module.css";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import { addToFavorites } from "../../filmsReducer";
import { useHistory } from 'react-router-dom'
import { setCurrentFilm } from './../../filmsReducer';


function SliderItem({ film, setPlayMode, setUrl, dispatch }) {

  const history = useHistory()
   
  return (
      <div className={s.slider_item}>
        {film && (
          <>
            <img src={film.imgUrl} alt="header bg" className={s.slder_img} />
            <div className={s.info}>
              <div className={s.info__about}>
                <h2>{film.title.toUpperCase()}</h2>
                <p className={s.janres}>
                  {film.janres.split(",").map((janre, i) => {
                    return <span key = {i}>{janre}</span>;
                  })}
                  <span>1h 46m</span>
                </p>
                <p className={s.stars}>
                  {Array(Math.ceil(film.rating)).fill().map((star, i) =>{
                    return <StarOutlinedIcon className={s.star} key = {i}/>
                  } )}
                  <span className={s.rating}>{film.rating}</span>
                </p>
              </div>
              <div className={s.info__buttons}>
                <button
                  className={s.sign}
                  onClick={() => {
                    setPlayMode(true);
                    setUrl(film.videoUrl)
                  }}
                >
                  Watch Now
                </button>
                <button className={s.sign}
                 onClick = {() => {
                  dispatch(setCurrentFilm(film))
                  history.push(`/${film.title.split(" ").join("-").toLowerCase()}`)}}>View Info</button>
                <button className={s.favorite} onClick = {() =>dispatch(addToFavorites(film))}>+ Favorites</button>
                <MoreVertOutlinedIcon className={s.searchIcon} />
              </div>
            </div>
          </>
        )}
      </div>
  );
}

export default SliderItem;

import React, { useState} from "react";
import './Slick.css'
import Slider from "react-slick";
import SliderItem from './SliderItem';
import ReactPlayer from "react-player";
import CloseIcon from "@material-ui/icons/Close";
import { StateProvider, useStateValue } from './../../context';

function HeaderSlider() {
  
  let [playMode, setPlayMode] = useState(false);
  const [state, dispatch] = useStateValue(StateProvider)
  let films = state.filmsHeader
  let [url, setUrl] = useState('')
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>{playMode ?
        <><ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls={true}
          style={{ position: "fixed", top: "0", left: "0", zIndex: "9" }}
        />
        <CloseIcon
          onClick={() => {
            setPlayMode(false);
          }}
          style={{
            position: "fixed",
            top: "20px",
            left: "20px",
            zIndex: "10",
            fontSize: "100px",
            cursor: "pointer",
          }}
        />
      </>
      :
      <Slider {...settings}>
      {films.map(film =>{
        return <SliderItem film = {film} dispatch = {dispatch} key = {film.title} setPlayMode = {setPlayMode} setUrl={setUrl}/>
      })}
    </Slider>
  }
    </>
  )
}

export default HeaderSlider;

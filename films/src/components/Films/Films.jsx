import React, { useState} from 'react'
import s from './Films.module.css'
import Film from '../Film/Film';
import { StateProvider, useStateValue } from './../../context';


function Films() {
  let [num, setNum] = useState(4)
  const [{films}, dispatch] = useStateValue(StateProvider)
    return (
      <div className="container">
        <div className={s.films}>
          {films[num] ? films.map(film => {
            return <Film film = {film} dispatch = {dispatch} key = {film.title}/>
          }).slice(0, num): films.map(film => {
            return <Film film = {film} dispatch = {dispatch} key = {film.title}/>
          })}
        </div>
        <div className={s.btn}>
          <button onClick = {()=>{setNum(num+4)}} disabled = {!films[num]}>Show More</button>
        </div>
      </div>
    );
}

export default Films

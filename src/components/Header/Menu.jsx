import React from "react";
import {useHistory}  from 'react-router-dom'
import s from "./Header.module.css";
import logo from "./logo.png";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Link } from "react-router-dom";
import GradeIcon from "@material-ui/icons/Grade";
import { StateProvider, useStateValue } from './../../context';

function Menu() {
  const history = useHistory()
  const [{favorites}, dispatch] = useStateValue(StateProvider)
  return (
    <nav className={s.nav}>
      <Link to="/">
        <img src={logo} />
      </Link>
      <div className={s.search}>
        <SearchOutlinedIcon className={s.searchIcon} />
        <button className={s.sign}>Sign In</button>
        <button className={s.sign}>Sign Up</button>
        <div  style={{ cursor: "pointer", position: "relative" }} onClick={()=>history.push('/favorite')}>
          <GradeIcon
            fontSize="large"
          />
          <span style={{ 'color': "red", 'position': "absolute", 'right': "0",'height':'80%', 'top':'-5%' }}>{favorites.length}</span>
        </div>
      </div>
    </nav>
  );
}

export default Menu;

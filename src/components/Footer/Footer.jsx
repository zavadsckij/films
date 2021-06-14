import React from "react";
import { Link } from "react-router-dom";
import s from "./Footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
  return (
    <div className={s.footer}>
      <div className= 'container'>
        <div className={s.social}>
          <div className={s.links}>
            <Link to="About">About</Link>
            <Link to="Service">Terms of Service</Link>
            <Link to="Contact">Contact</Link>
          </div>
          <div className = {s.footer_title}>MOVIE</div>
          <div className={s.social_links}>
            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://www.twitter.com/">
              <TwitterIcon />
            </a>
            <a href="https://www.pinterest.com/">
              <PinterestIcon />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
            <a href="https://www.youtube.com/">
              <YouTubeIcon />
            </a>
          </div>
        </div>
        <div className={s.copy}>
          Copyright © 2017 <strong>MOVIE</strong>. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;

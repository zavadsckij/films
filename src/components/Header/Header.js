import React from 'react'
import s from './Header.module.css'
import HeaderSlider from './../Slider/HeaderSlider';


function Header() {
    return (
    
        <header className = {s.header} >
               <HeaderSlider/>
        </header>
    
    )
}

export default Header

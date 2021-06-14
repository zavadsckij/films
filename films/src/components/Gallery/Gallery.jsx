import React, {useState, useEffect} from 'react'
import s from './Gallery.module.css'
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import Film from '../Film/Film';
import { StateProvider, useStateValue } from './../../context';
import { sortFilms, sortByRating } from './../../filmsReducer';


function Gallery() {
    const [{films, sortedFilms}, dispatch] = useStateValue(StateProvider)
    const [isOpenModal, toggleOpenModal] = useState(false)
    
   let filmsOutput = sortedFilms.length? sortedFilms : films
    const addActiveClass = (e)=>{
       let items =  [...document.querySelector(`.${s.sortItems}`).children]
        items.forEach((item, i, array) =>{

            if(array[i] !== array[array.length-1])
               item.className = ''
               e.currentTarget.className = s.active
        })
    }

    
    
    return (
        <div className = {s.gallery}>
            <div className = 'container'>
                <div className = {s.sort}>
                    <div className={s.sortItems}>
                        <span className = {s.active} onClick = {(e)=>{addActiveClass(e)}}>Tranding</span>
                        <span onClick = {(e)=>{addActiveClass(e); dispatch(sortByRating())}}>Top Rated</span>
                        <span onClick = {(e)=>{addActiveClass(e)}}>New Arrivals</span>
                        <span onClick = {(e)=>{addActiveClass(e)}}>Trailers</span>
                        <span onClick = {(e)=>{addActiveClass(e)}}>Coming Soon</span>
                        <span onClick = {(e)=>{toggleOpenModal(!isOpenModal); addActiveClass(e)}}>Genre <KeyboardArrowDownOutlinedIcon /> </span>
                        <div className = {isOpenModal ? s.modal_visible : s.modal_hidden} id = 'genres'>
                            <span onClick = {(e) => {dispatch(sortFilms(e.currentTarget.innerText))}}>Action</span>
                            <span onClick = {(e) => {dispatch(sortFilms(e.currentTarget.innerText))}}>Adventure</span>
                            <span onClick = {(e) => {dispatch(sortFilms(e.currentTarget.innerText))}}>History</span>
                            <span onClick = {(e) => {dispatch(sortFilms(e.currentTarget.innerText))}}>Fantasy</span>
                            <span onClick = {(e) => {dispatch(sortFilms(e.currentTarget.innerText))}}>Thriller</span>
                            <span onClick = {(e) => {dispatch(sortFilms(e.currentTarget.innerText))}}>Drama</span>
                            <span onClick = {(e) => {dispatch(sortFilms(e.currentTarget.innerText))}}>Cartoon</span>
                            <span onClick = {(e) => {dispatch(sortFilms(e.currentTarget.innerText))}}>Comedy</span>
                        </div>
                    </div>
                    <div className={s.view}>
                        <ViewModuleOutlinedIcon className = { s.view_item_active }/>
                        <ViewAgendaOutlinedIcon  className = { s.view_item}/>
                    </div>
                </div>
                <div className={s.films}>
                   {filmsOutput.map(film =>{
                       return <Film film = {film} dispatch = {dispatch} key = {film.title}/>
                   })}
                </div>
            </div>
        </div>
    )
}

export default Gallery

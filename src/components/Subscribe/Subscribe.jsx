import React from 'react'
import s from './Subscribe.module.css'

function Subscribe() {
    return (
        <div className="container">
            <div className = {s.subscribe}>
            <h3>Receive information on the latest hit movies straight to your inbox.</h3>
        <button>Subscribe!</button>
        </div>
        </div>
        
    )
}

export default Subscribe

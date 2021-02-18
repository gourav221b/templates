import React from 'react'
import './heading.css'

function Heading(props) {
    return (
        <div className="heading">
            <h6>{props.genre}</h6>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Heading

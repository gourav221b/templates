import React from 'react'
import {Router ,Switch } from 'react-router-dom'
import Heading from '../Heading/Heading'
import Bcard from './Bcard'
import './blogs.css'
function Blogs() {
    return (
        <div>
            <Heading genre="Read More" title="Blogs"/>
            <section className="blogDiv row">
               
            <Bcard/>
           
            </section>

        </div>
    )
}

export default Blogs

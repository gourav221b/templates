import React from 'react'
import Landing from '../Landing/Landing'
import Heading from '../Heading/Heading'
import Product from '../Products/Product'
import About from '../About/About'
function Home() {
    window.scrollTo(0,0)
    return (
        <div>
            <Landing/>
            <About id="home"/>
            <Heading genre="portfolio" title="Featured Projects"/>
            <Product count="4"/>
            
        </div>
    )
}

export default Home

import React from 'react'
import Heading from '../Heading/Heading'
import Product from '../Products/Product'

function Works() {
    window.scrollTo(0,0)
    return (
        <div>   
             <div className="blogHead">
              <Heading genre="Dont Believe Us?" title="All Works"/>
              </div>
              <Product count="99"/>
        </div>
    )
}

export default Works

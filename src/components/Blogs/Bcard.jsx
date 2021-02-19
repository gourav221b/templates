import React from 'react'
import Bloglist from './bloglist.json';
import {Link} from 'react-router-dom'
import './blogs.css'
function Bcard() {
    return (
        <>
        {Bloglist.length ? Bloglist.map(blog => (
      <div className="filterDiv col-md-5" key={blog.id} data-category={blog.category}>
         <Link to={blog.path} > 
            <div className="blogImage">
                 <img src={blog.image} alt={blog.name}/>
            </div>
        </Link>
            <div className="tags">
                <span>{blog.date} | {blog.category}</span>
            </div>
            <Link to={blog.path} style={{textDecoration:"none"}} >  
                <div className="blogName">
                {blog.name}
                 </div>
            </Link>
            <div className="blogSub">
                {blog.subtext}
            </div>
            <Link to={blog.path} style={{textDecoration:"none"}}>  
            <div className="readMore">
                Read More |<i className="fa fa-angle-right"></i>
            </div>
            </Link>
        </div>
        
   
        )) :<div> Blog Section is currently empty. Check back in a few days <br/><br/></div>}   
        </>
    )
}

export default Bcard

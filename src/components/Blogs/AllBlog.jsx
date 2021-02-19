import React from 'react'
import Bloglist from './bloglist.json'
import { Link } from "react-router-dom";
function AllBlog() {

    window.scrollTo(0,0)
    return (
        <>
        <h3 className="allbloghead">All Blogs</h3>
        {Bloglist.length ? Bloglist.map(blog => (
      <div className="sideTab " key={blog.id} data-category={blog.category} style={{margin:"15px 0"}}>
         
         <Link to={blog.path} style={{textDecoration:"none"}} >  
                <div className="blogName" style={{fontSize:16,fontFamily:"Raleway"}}>
                {blog.name}
                 </div>
            
            <div className="tags">
                <span>{blog.date} | {blog.category}</span>
            </div>
           </Link>
           
        </div>
        
   
        )) :<div> Blog Section is currently empty. Check back in a few days <br/><br/></div>}   
        </>
    )
}

export default AllBlog

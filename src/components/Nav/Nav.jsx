import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import './nav.css'
import * as Icon from 'akar-icons';

const hamMenu = document.getElementById('navIcon');
const closeBtn = document.getElementById('navClose');
const mySidenav = document.getElementById('mySidenav');
const Nav=()=> {


   
        // hamMenu.addEventListener('click',()=>
        // {
        //     openNav();
        // })
        // closeBtn.addEventListener('click',()=>
        // {
        //     closeNav();
        // })
        
  
    
    function openNav()
    {
       
    document.getElementById('mySidenav').classList.add('open');
      document.getElementById('navClose').style.display="block";
    console.log('open')
    }
    function closeNav()
    {
     document.getElementById('mySidenav').classList.remove('open')
       document.getElementById('navClose').style.display="none";
    }
   
//  function checkMobile()
//     {

    
//  if(window.innerWidth<800)
//  {
//    closeNav();
//    console.log('mobile')
//  }
// }


    return (
        
        <div>
            <div id="navIcon" className="hamburgerMenu navIcon"  onClick={()=>{
                openNav()
            }} >
                <Icon.TextAlignLeft size={20}  color={`white`} style={{pointerEvents:'none'}}/>
            </div>
            <div  id="navClose" className="closeBtn navClose"
            onClick={()=>{
               closeNav()
            }} 
            ><Icon.Cross size={20}  color={`white`} style={{pointerEvents:'none'}}/></div>
            <section id="mySidenav" className="sidenav">
                <div className="brand">
            <Link to='/' className='brandName'><h1>prosto</h1><h6>Designing your dreams.</h6></Link>
            </div>
            <ul className="menu">
            <li><NavLink to="/" activeClassName="active" className="navMenu"  >Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active" className="navMenu" >About</NavLink></li>
            <li><NavLink to="/works" activeClassName="active" className="navMenu" >Works</NavLink></li>
            <li><NavLink to="/services" activeClassName="active" className="navMenu" >Services</NavLink></li>
            <li><NavLink to="/blogs" activeClassName="active" className="navMenu" >Blogs</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active" className="navMenu" >Contact</NavLink></li>
            </ul>
            <div className="socialicons">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
               
            </div>
            <div className="navcopyright">© Prosto 2021 | All rights reserved.  
            <br/>Images|<a target="_blank" href="www.pexels.com"> Pexels </a> | <a href="https://unsplash.com/" target="_blank">Unsplash </a><br/>Icons| <a href="https://akaricons.com/" target="_blank" > akarIcons</a>
            
            </div>
            </section>
        </div>
    )
}

export default Nav

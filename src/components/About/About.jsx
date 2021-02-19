import React from 'react'
import './about.css';
import '../Heading/heading.css'
import '../Products/product.css';
import Heading from '../Heading/Heading'
function About(props) {
    window.scrollTo(0,0)
    return (
        <div>
             <div className="blogHead">
            <Heading genre="Who we Are" title="About Us"/>
           </div> 
           <div className="aboutDiv row">
                <div className="col-md-6 image ">
                    <img src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="team image"/>
                </div>
                <div className="col-md-6 content ">
                <div className="heading" style={{marginLeft:0, padding:0}}>
            <h6>PROSTO</h6>
            <h2 style={{textTransform:'none'}}>Designing your dreams</h2>
        </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nulla reprehenderit facilis hic repellendus exercitationem saepe unde voluptas, at amet iure tenetur consectetur eius necessitatibus inventore ad? Nihil, necessitatibus alias. Reiciendis natus harum assumenda nobis, libero accusamus sed quis porro earum quibusdam pariatur recusandae distinctio corrupti dolorum eveniet atque minima laborum.</p><p> Nisi cupiditate voluptatem eaque recusandae. Suscipit saepe aut non beatae vero sunt incidunt illum totam ad, fugiat, hic, repellendus tenetur? Amet possimus distinctio provident hic quis pariatur error illum inventore maiores iusto, asperiores consequatur doloremque praesentium officiis nihil dignissimos labore vel porro. Numquam facilis suscipit dolorum unde rem. Ipsam!</p>
                </div>
            </div>
            {props.id !=='home'?<><Heading genre="The Brains" title="our Team"/>
            <div className="row teamDiv productRow">
         <div class="product col-md-3">
            <img src="https://images.pexels.com/photos/5528835/pexels-photo-5528835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Avatar" class="image"/>
                    <div class="overlay">
                        <div class="text">
                        <h4>James Spencer</h4>
                        <p>Product Designer</p>
                        <i className="fa fa-facebook"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-twitter"></i>
                    </div>
            </div>
        </div>
        <div class="product col-md-3">
            <img src="https://images.pexels.com/photos/5683338/pexels-photo-5683338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Avatar" class="image"/>
                    <div class="overlay">
                        <div class="text">
                        <h4>Jessica Lockhart</h4>
                        <p>Software Developer</p>
                        <p>
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-linkedin"></i>
                        </p>
                    </div>
            </div>
        </div>
        <div class="product col-md-3">
            <img src="https://images.pexels.com/photos/4445705/pexels-photo-4445705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Avatar" class="image"/>
                    <div class="overlay">
                        <div class="text">
                        <h4>William Abernathy</h4>
                        <p>Web designer, Photographer</p>
                        <i className="fa fa-facebook"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-instagram"></i>
                    </div>
            </div>
        </div>
         
            </div>
       </>:''}
            
        </div>
    )
}

export default About

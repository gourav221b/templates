import React from 'react'
import {Link} from 'react-router-dom'
import Heading from '../../Heading/Heading'
import ProductList from '../productlist.json'
function Product6() {
    window.scrollTo(0,0);
    return (
        <div>
            <div className="blogHead">
            <Heading genre={ProductList[5].subtext} title={ProductList[5].title}/>
            </div>

            <div className="productPage">
                <div className="productImage">
                    <img src="https://images.unsplash.com/photo-1571647627378-e4ed42e700fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80" alt={ProductList[5].title} className="productimg col-md-5 img-fluid"/>
                    <img src="https://images.unsplash.com/photo-1453133451515-5ff7c1d0d63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt={ProductList[5].title} className="productimg col-md-5 img-fluid"/>
                 
                 </div>
                 <h3 className="contactTitle productTitle">{ProductList[5].title}</h3>
                 <p className="productDetail col-md-10" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, eligendi nisi doloremque adipisci minima ullam, eum corporis unde consequatur in ipsam delectus. Architecto eius, possimus placeat debitis suscipit unde ea eaque sapiente ipsum assumenda, aut adipisci eos consectetur sint inventore.</p>
                 
                 <p className="productDetail col-md-10" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, porro?</p>

                 <p className="productDetail col-md-10" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse autem ducimus iste accusamus minus, ipsam recusandae voluptatum laboriosam repudiandae?</p>

                 <p className="productDetail col-md-10" >
                    <p> <span>ProjectName:</span> {ProductList[5].title}</p>
                    <p> <span>Client:</span> {ProductList[5].client}</p>
                    <p> <span>Skills:</span> {ProductList[5].skills}</p>
                    <p> <span>Category:</span> {ProductList[5].subtext}</p>
                    <p> <span>Rating:</span> {ProductList[5].review}</p>
                 </p>

                 <Link to='/works' style={{textDecoration:"none"}}>  
                    <div className="readMore">
                         <i className="fa fa-angle-left"></i>| Go Back
                    </div>
                </Link>

            </div>
        </div>
    
    
    
    )
}

export default Product6

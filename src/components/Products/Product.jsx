import React from 'react'
import './product.css'
import {Link} from 'react-router-dom'
import products from './productlist.json'
function Product(props) {
   
    return (
        <div className="row productRow">
            {products.filter(productAll => 
  
  productAll.id<props.count).map(product => (
    
     <div class="product col-md-3">
            <Link to={product.path}> <img src={product.image} alt="Avatar" class="image"/>
                    <div class="overlay">
                        <div class="text">
                        <h4>{product.title}</h4>
                        <p>{product.subtext}</p>
                        </div>
                    
                     </div>
                     <h4 className="number">{product.id}</h4>
        
                     </Link>
    </div>
      
  ))}
          {/* <div class="product col-md-3">
            <img src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Avatar" class="image"/>
                    <div class="overlay">
                        <div class="text">
                        <h4>Project1</h4>
                        <p>Mockup, 3d modelling</p>
                    </div>
            </div>
        </div>
        <div class="product col-md-3">
            <img src="https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" alt="Avatar" class="image"/>
                    <div class="overlay">
                        <div class="text">
                        <h4>Project2</h4>
                        <p>Graphic design, Brand modelling</p>
                    </div>
            </div>
        </div>
        <div class="product col-md-3">
            <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" alt="Avatar" class="image"/>
                    <div class="overlay">
                        <div class="text">
                        <h4>Project3</h4>
                        <p>Web design, SEO</p>
                    </div>
            </div>
        </div>
         */}
        </div>

       
    )
}

export default Product

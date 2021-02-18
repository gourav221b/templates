import React from 'react'
import './landing.css'

function Landing() {
    function changeBack(){
        const homesec = document.querySelector('.home');
        var images = [{
    
            "url": "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "h1": "Innovative Designs",
            "p": "Elegant designs to set a benchmark"
            
        }, {
    
            "url": "https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "h1": "Customer Aquisitions",
            "p": "Attract Customers to your products"
         
        }, {
    
            "url": "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "h1": "Maintained web tools",
            "p": "Hassle free low maintainence"
        
        }
    ];
    
        const len = images.length;
        var i = Math.floor(Math.random() * len);
        homesec.style.background = "url("+images[i].url+") #1515154f";
        document.getElementById('headerText').innerHTML = images[i].h1;
        document.getElementById('headerPara').innerHTML = images[i].p;
    }
   
    // setInterval(changeBack, 5000);
    return (
        <div>
            <div className="home">
                <div className="headercontent">
                <h1 id="headerText">
                    Innovative Designs
                </h1>
                <p id="headerPara">Elegant designs to set a benchmark</p>
                </div>
                </div>        
        </div>
    )
}

export default Landing

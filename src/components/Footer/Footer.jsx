import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <div className=" row footer">
            <section className="left col-md-2">
            <div className="footerBrand">
            <h1>prosto</h1>
            {/* <h6>Designing your dreams.</h6> */}
            <div className="footericons">
            <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
            </div>
            </div>
            </section>
            <section className="center col-md-5 row">
                <div className="supportLinks centerLink col-md-6">
                    <h3>Support Links</h3>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolores</li>
                    </ul>
                </div>
                <div className="foooterAddress centerLink col-md-6">
                    <h3>Get in touch:</h3>
                    <ul>
                    <li>9xx-xxxx-xxx</li>
                    <li>demo@example.com</li>
                    <li>Akshya Nagar 1st Block 1st Cross,<br/> Rammurthy nagar,<br/> Bangalore-560016</li>
                    </ul>
                </div>
            </section>
            <section className="newsletter col-md-3">
                <h3><i className="fa fa-envelope"></i> &nbsp; Stay updated with Prosto</h3>
                <form action="#">
                    <input type="email" name="email" id="email"  placeholder="Enter your e-mail address" required/>
                    <input type="submit" value="Subscribe"/>
                </form>
            </section>
        </div>
    )
}

export default Footer

import React from 'react'
import './service.css'
import Heading from '../Heading/Heading'
import * as Icon from 'akar-icons';
import Product from '../Products/Product'
function Services() {
    window.scrollTo(0,0);
    return (
        <div>   
            <section className="serivceWrapper">
              <Heading genre="What do you need?" title="Services"/>
              <div className="serviceDiv row">
                  
                  <div className="serviceGrid col-md-7 row">
                      <div className="serviceCard row ">
                          <div className="serviceIcon col-xs-3">
                          <Icon.Tag size={35} strokeWidth={1} color={`gray`} />
                          </div>
                          <div className="serviceContent col-xs-8">
                              <h5>Branding</h5>
                              <ul>
                                  <li>Logos</li>
                                  <li>Corporate Identity</li>
                                  <li>Packaging</li>
                              </ul>
                          </div>
                      </div>
                      {/* 2 */}
                      <div className="serviceCard row ">
                          <div className="serviceIcon col-xs-3">
                          <Icon.LightBulb size={35} strokeWidth={1} color={`gray`} />
                          </div>
                          <div className="serviceContent col-xs-8">
                              <h5>Web Apps</h5>
                              <ul>
                                  <li>Webistes</li>
                                  <li>Native Apps</li>
                                  <li>eCommerce</li>
                              </ul>
                          </div>
                      </div>
                      {/* 3 */}
                      <div className="serviceCard row ">
                          <div className="serviceIcon col-xs-3">
                      {/* <i className="fa fa-line-chart" style={{fontSize:35}}></i> */}
                      <Icon.AlignBottom size={35} strokeWidth={1} color={`gray`} />
                          </div>
                          <div className="serviceContent col-xs-8">
                              <h5>Marketing</h5>
                              <ul>
                                  <li>Strategy</li>
                                  <li>Customer Aquisition</li>
                                  <li>SEO</li>
                              </ul>
                          </div>
                      </div>
                      {/* 4 */}
                      <div className="serviceCard row ">
                          <div className="serviceIcon col-xs-3">
                      <Icon.LaptopDevice size={35} strokeWidth={1} color={`gray`} />
                      </div>
                          <div className="serviceContent col-xs-8">
                              <h5>Custom Desings</h5>
                              <ul>
                                  <li>Brand Customization</li>
                                  <li>UI/UX Designs</li>
                                  <li>Responsive Designs</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="image col-md-5">
                      <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                  </div>
              </div>
            </section>
            <section className="products">
                <Heading genre="Portfolio" title="Recent Projects"/>
                <Product count={4}/>
            </section>
        </div>
    )
}

export default Services

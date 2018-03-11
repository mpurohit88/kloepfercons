import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
		return (
          <div className="header wow zoomIn" data-wow-duration="1.5s" data-wow-delay="0.3s">
            <div className="container">
              <div className="logo">
                <h1><a href="index.html"><i><img src="images/logo.png" alt="" /></i>Real Plantation<span>A Best Real Estate</span></a></h1>
              </div>
              <div className="header-left">
                <nav className="navbar navbar-default">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                    
                    <nav className="link-effect-9" id="link-effect-9">
                      <ul className="nav navbar-nav">
                        <li>
                          <Link to="/" className="hvr-bounce-to-bottom">Home</Link>
                        </li>
                        <li>
                          <Link to="/services" className="hvr-bounce-to-bottom">Services</Link>
                        </li>
                        <li>
                          <Link to="/properties" className="hvr-bounce-to-bottom">Properties</Link>
                        </li>
                        {/* <li className="dropdown">
                          <a href="codes.html" className="dropdown-toggle hvr-bounce-to-bottom" data-hover="Pages" data-toggle="dropdown" aria-expanded="false">Pages <b className="caret"></b></a>
                          <ul className="dropdown-menu">
                            <li><a href="icons.html">Font Icons</a></li>
                          
                            <li><a href="codes.html">Short codes</a></li>
                          </ul>
                          </li> */}
                        <li>
                          <Link to="/contact-us" className="hvr-bounce-to-bottom">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </nav>
              </div>
            </div>
          </div>
      )
    }
  }
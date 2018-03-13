import React, { Component } from 'react'
import $ from 'jquery'

export default class ContactUs extends Component {
  componentDidMount() {
		$(document).ready(function() {
      	//Horizontal Tab
				
    });
  }

  render() {
		return (
      <div> 
        <div className="contact">
          <div className="container">
            <h3>Contact</h3>
            <div className="col-md-7 contact_left_w3l">
              <h4>Contact Information</h4>
              <p> Non-Emergency Service 847-272-6101 <br /> 24-Hour Emergency Service 847-280-1603</p>
              <ul className="contact-list">
                <li><span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>Northbrook,  Illinois.</li>
                <li><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span><a href="mailto:example@mail.com">wecare@kloepfercons.com</a></li>
                <li><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>+847-272-6101</li>
              </ul>
              <div id="container">
                <div id="parentHorizontalTab">
                  <ul className="resp-tabs-list hor_1">
                    <li><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span></li>
                    <li><span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span></li>
                    <li><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span></li>
                  </ul>
                  <div className="resp-tabs-container hor_1">
                    <div>
                      <form action="#" method="post">
                        <input type="text" value="Name" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Name';}" required="" />
                        <input type="email" value="Email" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Email';}" required="" />
                        <textarea onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Message...';}" required="">Message...</textarea>
                        <input type="submit" value="Submit" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-md-5 contact_right_w3lagile">
              {/* <h4>Find Us On Map</h4> */}
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2482.432383990807!2d0.028213999961443994!3d51.52362882484525!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1423469959819" style="border:0"></iframe> */}
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    )
  }
}
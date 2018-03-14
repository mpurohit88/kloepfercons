import React, { Component } from 'react'
import $ from 'jquery'

export default class ContactUs extends Component {
  constructor(props){
    super(props);
    this.state = {to: ''};
  }

  componentDidMount() {

		$(document).ready(function() {
      	//Horizontal Tab
			var from,to,subject,text;
       $("#send_email").click(function(){      
            to=$("#to").val();
            subject=$("#subject").val();
            text=$("#content").val();
            $("#message").text("Sending E-mail...Please wait");
            $.get("http://localhost:3001/send",{to:to,subject:subject,text:text},function(data){
              if(data=="sent")
              {
                $("#message").empty().html("Email is been sent at "+to+" . Please check inbox!");
              }
            });
          });
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
                        <input id="to" type="text" required="" placeholder="Email Address" />
                        <input id="subject" type="email" required=""  placeholder="Subject"/>
                        <textarea id="content" required="" placeholder="Message..."></textarea>
                        <input id="send_email" type="button" value="Submit" />
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
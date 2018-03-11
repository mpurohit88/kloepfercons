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
        <div class="services">
          <div class="container">
            <h3>Services</h3>
            <div class="col-md-4 ser-left-grid w3-agile">
              <h4>Main Services</h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus 
              qui blanditiis praesentium voluptatum deleniti atque corrupti. </p>
              <ul>
                <li><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Voluptatem accusantium volup</a></li>
                <li><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Doloremque laudantium dolor</a></li>
                <li><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Molestiae consequatur moles</a></li>
                <li><span class="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Doloremque laudantium dolor</a></li>
              </ul>
            </div>
            <div class="col-md-8 ser-right-grid w3-agile">
              <div class="col-sm-6 main-ser">
                  <div class="cont-grid-left wel-grid">
                    <div class="btm-clr4">
                      <figure class="icon">
                        <img src="images/icon1.png" alt=" " />
                      </figure>
                    </div>
                  </div>
                  <div class="cont-grid-right">
                    <h4>Voluptatem</h4>
                    <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                  </div>
                  <div class="clearfix"></div>
              </div>
              <div class="col-sm-6 main-ser">
                  <div class="cont-grid-left wel-grid">
                    <div class="btm-clr4">
                      <figure class="icon">
                        <img src="images/icon2.png" alt=" " />
                      </figure>
                    </div>
                  </div>
                  <div class="cont-grid-right">
                    <h4>Voluptatem</h4>
                    <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                  </div>
                  <div class="clearfix"></div>
              </div>
              <div class="col-sm-6 main-ser mar-bot">
                  <div class="cont-grid-left wel-grid">
                    <div class="btm-clr4">
                      <figure class="icon">
                        <img src="images/icon3.png" alt=" " />
                      </figure>
                    </div>
                  </div>
                  <div class="cont-grid-right">
                    <h4>Voluptatem</h4>
                    <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                  </div>
                  <div class="clearfix"></div>
              </div>
              <div class="col-sm-6 main-ser mar-bot">
                  <div class="cont-grid-left wel-grid">
                    <div class="btm-clr4">
                      <figure class="icon">
                        <img src="images/icon1.png" alt=" " />
                      </figure>
                    </div>
                  </div>
                  <div class="cont-grid-right">
                    <h4>Voluptatem</h4>
                    <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                  </div>
                  <div class="clearfix"></div>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="services_bot">
          <div class="container">
            <h3>Our Agents</h3>
            <div class="col-md-4 ser_bottom-grid wthree-agileits">
              <div class="btm-right">
                <img src="images/team1.jpg" alt=" " />
                  <div class="captn-icon">
                    <ul>
                      <li><a class="fb" href="#"></a></li>
                      <li><a class="twit" href="#"></a></li>
                      <li><a class="goog" href="#"></a></li>
                    </ul>
                  </div>
                  <div class="captn">
                    <h4>William</h4>	
                  </div>
              </div>
            </div>
            <div class="col-md-4 ser_bottom-grid our_marg wthree-agileits">
              <div class="btm-right">
                <img src="images/team2.jpg" alt=" " />
                  <div class="captn-icon">
                    <ul>
                      <li><a class="fb" href="#"></a></li>
                      <li><a class="twit" href="#"></a></li>
                      <li><a class="goog" href="#"></a></li>
                    </ul>
                  </div>
                  <div class="captn">
                    <h4>Thompson</h4>	
                  </div>
              </div>
            </div>
            <div class="col-md-4 ser_bottom-grid wthree-agileits">
              <div class="btm-right">
                <img src="images/team3.jpg" alt=" " />
                  <div class="captn-icon">
                    <ul>
                      <li><a class="fb" href="#"></a></li>
                      <li><a class="twit" href="#"></a></li>
                      <li><a class="goog" href="#"></a></li>
                    </ul>
                  </div>
                  <div class="captn">
                    <h4>Federic</h4>	
                  </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="ser-foo">
          <div class="container">
            <h3>Featured Services</h3>
            <div class="col-md-4 featured_left text-center">
              <div class="lastest-grid">
                <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                <h4>Dignissimos</h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis vero eos et accusamus et iusto dignissimos ducimus
                  qui blanditiis.</p>
              </div>
            </div>
            <div class="col-md-4 featured_left text-center our_marg">
              <div class="lastest-grid">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                <h4>Accusamus</h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis vero eos et accusamus et iusto dignissimos ducimus
                  qui blanditiis.</p>
              </div>
            </div>
            <div class="col-md-4 featured_left text-center">
              <div class="lastest-grid">
                <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                <h4>Blanditiis</h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis vero eos et accusamus et iusto dignissimos ducimus
                  qui blanditiis.</p>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    )
  }
}
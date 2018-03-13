import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
		return (
      <div className="footer-agileinfo">
      <div className="container">
        <h2>Get In Touch - 24-hour Emergency Service  Available</h2>
        <p className="para">For emergencies phone Jeremy  Kloepfer at: 847-280-1603 <br /> For non-emergencies  phone: 847-272-6101</p>
        <div className="col-md-6 footer-left-wthree-agileits wow zoomIn" data-wow-duration="1.5s" data-wow-delay="0.1s">
          <div className="col-sm-2 foo-left text-center">
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
          </div>
          <div className="col-sm-10 foo-right w3l-agile">
            <h4>Information</h4>
            <p>Written Estimates Provided - We Accept All Major Credit Cards</p>
            <ul className="fb_icons">
              <li><a className="fb" href="#"></a></li>
              <li><a className="twit" href="#"></a></li>
              <li><a className="goog" href="#"></a></li>
              <li><a className="pin" href="#"></a></li>
              <li><a className="drib" href="#"></a></li>
            </ul>

          </div>
          <div className="clearfix"></div>
        </div>
        <div className="col-md-6 footer-right-wthree-agileits wow zoomIn" data-wow-duration="1.5s" data-wow-delay="0.1s">
          <div className="col-sm-2 foo-left w3l-agile text-center">
            <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
          </div>
          <div className="col-sm-10 foo-right">
            <h4>Newsletter</h4>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis.</p>
            <form action="#" method="post">
              <input type="text" name="Your email" value="Your email" onBlur={this.value === '' ? this.value = 'Your email' : this.value} required="" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="clearfix"></div>
        <p className="copy-right">Content Copyright &copy; 2013 Kloepfer Construction Inc. All Rights Reserved</p>
      </div>
    </div>
    )
  }
}
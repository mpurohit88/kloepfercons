import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
		return (
      <div className="banner">
					<div className="container">
						<div className="banner-info">
							<div className="col-md-7 banner-left wow flipInY" data-wow-duration="1.5s" data-wow-delay="0s">
								<h3>Welcome To <span> Real Plantation Estate </span> for sale $1,520,000 </h3>
								<p>Sed ut perspiciatis unde omnis.</p>
								<a className="hvr-outline-out scroll" href="#about">See More About Us</a>
							</div>
							<div className="col-md-5 banner-right wow flipInY" data-wow-duration="1.5s" data-wow-delay="0s">
									<div className="ban-icon ban-col1">
										<img src="images/icon1.png" alt="" />
									</div>
									<div className="ban-icon ban-col2">
										<img src="images/icon2.png" alt="" />
									</div>
									<div className="ban-icon3">
									<img src="images/icon3.png" alt="" />
									</div>
								<div className="clearfix"></div>
							</div>
							<div className="clearfix"></div>
						</div>
					</div>
				</div>
    )
  }
}
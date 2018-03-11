import React, { Component } from 'react'
import jQuery from 'jquery'

import Banner from './Banner'

export default class Home extends Component {

	componentDidMount() {
		jQuery(document).ready(function() {
			function close_accordion_section() {
				jQuery('.accordion .accordion-section-title').removeClass('active');
				jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
			}

			jQuery('.accordion-section-title').click(function(e) {
				// Grab current anchor value
				var currentAttrValue = jQuery(this).attr('href');

				if(jQuery(e.target).is('.active')) {
					close_accordion_section();
				}else {
					close_accordion_section();

					// Add active class to section title
					jQuery(this).addClass('active');
					// Open up the hidden content panel
					jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
				}

				e.preventDefault();
			});
		});
	}
	render() {
		return (
			<div>
				<Banner />
				<div id="about" className="banner-bottom wow bounceInUp" data-wow-duration="1s" data-wow-delay="0s">
					<div className="container">
						<h3>ABOUT THIS PROPERTY</h3>
						<p className="para1">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
						<div className="col-md-4 bottom-grid multi-gd-text">
							<a href="gallery.html"><img src="images/pic6.jpg" alt=" "/></a>
						</div>
						<div className="col-md-4 bottom-grid mar-pad">
							<div  id="top" className="callbacks_container">
								<ul className="rslides" id="slider3">
									<li>
										<h4>Exercitationem</h4>
										<p>At vero eos et accusamus et iusto odio dignissimos ducimus
											qui blanditiis vero eos et accusamus et iusto dignissimos ducimus
											qui blanditiis.</p>
									</li>
									<li>
										<h4>Dignissimos</h4>
										<p>At vero eos et accusamus et iusto odio dignissimos ducimus
											qui blanditiis vero eos et accusamus et iusto dignissimos ducimus
											qui blanditiis.</p>
									</li>
									<li>
										<h4>Exercitationem</h4>
										<p>At vero eos et accusamus et iusto odio dignissimos ducimus
											qui blanditiis vero eos et accusamus et iusto dignissimos ducimus
											qui blanditiis.</p>
									</li>
									<li>
										<h4>Dignissimos</h4>
										<p>At vero eos et accusamus et iusto odio dignissimos ducimus
											qui blanditiis vero eos et accusamus et iusto dignissimos ducimus
											qui blanditiis.</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-4 bottom-grid multi-gd-text">
							<a href="gallery.html"><img src="images/pic7.jpg" alt=" "/></a>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
				<div className="main_ser w3layouts-agileinfo">
					<div className="container">
						<div className="col-md-7 main_ser_one w3l-agile wow zoomIn" data-wow-duration="1.5s" data-wow-delay="0.1s">
							<h3>Easy buying & selling homes</h3>
							<p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
							aut odit aut fugit, sed quia consequuntur magni dolores eos
							qui ratione voluptatem sequi nesciunt. Neque porro quisquam est. </p>
							<div className="cont-grids">
								<div className="col-sm-6 cont-grid-one">
									<div className="cont-grid-left wel-grid">
										<div className="btm-clr4">
											<figure className="icon">
												<img src="images/icon1.png" alt=" " />
											</figure>
										</div>
									</div>
									<div className="cont-grid-right">
										<h4>Voluptatem</h4>
										<p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
									</div>
									<div className="clearfix"></div>
								</div>
								<div className="col-sm-6 cont-grid-one">
									<div className="cont-grid-left wel-grid">
										<div className="btm-clr4">
											<figure className="icon">
												<img src="images/icon2.png" alt=" " />
											</figure>
										</div>
									</div>
									<div className="cont-grid-right">
										<h4>Voluptatem</h4>
										<p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
									</div>
									<div className="clearfix"></div>
								</div>
								<div className="col-sm-6 cont-grid-one yes_magr">
									<div className="cont-grid-left wel-grid">
										<div className="btm-clr4">
											<figure className="icon">
												<img src="images/icon3.png" alt=" " />
											</figure>
										</div>
									</div>
									<div className="cont-grid-right">
										<h4>Voluptatem</h4>
										<p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
									</div>
									<div className="clearfix"></div>
								</div>
								<div className="col-sm-6 cont-grid-one yes_magr">
									<div className="cont-grid-left wel-grid">
										<div className="btm-clr4">
											<figure className="icon">
												<img src="images/icon1.png" alt=" " />
											</figure>
										</div>
									</div>
									<div className="cont-grid-right">
										<h4>Voluptatem</h4>
										<p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
									</div>
									<div className="clearfix"></div>
								</div>
								<div className="clearfix"></div>
							</div>
						</div>
						<div className="col-md-5 main_ser_two w3l-agile wow zoomIn" data-wow-duration="1.5s" data-wow-delay="0.1s">
							<img className="img-responsive" src="images/pic3.jpg" alt=" "/>
							<h4>Consequuntur Voluptatem</h4>
								<div className="accordion">
											<div className="accordion-section">
												<a className="accordion-section-title" href="#accordion-1">Voluptatem Accusantium <i className="glyphicon glyphicon-chevron-down"></i><div className="clearfix"></div>
												</a>
												<div id="accordion-1" className="accordion-section-content">
													<p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices.</p>
												</div>
											</div>

											<div className="accordion-section">
												<a className="accordion-section-title" href="#accordion-2">Interdum Fringilla<i className="glyphicon glyphicon-chevron-down"></i><div className="clearfix"></div>
												</a>
												<div id="accordion-2" className="accordion-section-content">
													<p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices.</p>
												</div>
											</div>

											<div className="accordion-section">
												<a className="accordion-section-title" href="#accordion-3">Curabitur Vitae <i className="glyphicon glyphicon-chevron-down"></i><div className="clearfix"></div>
												</a>
												<div id="accordion-3" className="accordion-section-content">
													<p>Mauris interdum fringilla augue vitae tincidunt. Curabitur vitae tortor id eros euismod ultrices.</p>
												</div>
											</div>
								</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
				<div className="treatments">
					<h3>Featured Properties</h3>
					<p className="para1">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
					<div className="col-md-4 treat-grids treat-pad wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0s">
						<h5>Our Featured Services</h5>
						<ul>
							<li><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Voluptatem accusantium volup</a></li>
							<li><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Doloremque laudantium dolor</a></li>
							<li><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Molestiae consequatur moles</a></li>
							<li><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Doloremque laudantium dolor</a></li>
							<li><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Molestiae consequatur moles</a></li>
						</ul>
					</div>
					<div className="col-md-4 treat-grids grid wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.1s">	
						<figure className="effect-apollo">
							<img src="images/pic8.jpg" alt=" "/>
								<figcaption>
									<p>Real Plantation</p>
								</figcaption>			
						</figure>
					</div>
					<div className="col-md-4 treat-grids treat-pad wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
						<h5>We Offers</h5>
							<ul>
								<li><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Voluptatem accusantium volup</a></li>
								<li><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Doloremque laudantium dolor</a></li>
								<li><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Molestiae consequatur moles</a></li>
								<li><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Doloremque laudantium dolor</a></li>
								<li><span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span><a href="#">Molestiae consequatur moles</a></li>
							</ul>
					</div>
					<div className="col-md-4 treat-grids grid wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">	
						<figure className="effect-apollo">
							<img src="images/pic9.jpg" alt=" "/>
								<figcaption>
									<p>Real Plantation</p>
								</figcaption>			
						</figure>
					</div>
					<div className="col-md-4 treat-grids treat-head treat_mar wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.4s">
						<h4>Our Best Constructors</h4>
						<p>At vero eos et accusamus et iusto 
						odio dignissimos ducimus qui blanditiis
						praesentium voluptatum deleniti atque 
						corrupti quos dolores et quas molestias 
						except.</p>
						<p>At vero eos et accusamus et iusto 
						odio dignissimos ducimus qui blanditiis.</p>
					</div>
					<div className="col-md-4 treat-grids grid treat_mar wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.5s">
						<figure className="effect-apollo">
							<img src="images/pic10.jpg" alt=" "/>
								<figcaption>
									<p>Real Plantation</p>
								</figcaption>			
						</figure>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
			)
	}
}
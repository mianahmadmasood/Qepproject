import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function Service() {
  return (
    <Router>
    <div className="App">
      <section id="subheader" data-stellar-background-ratio=".3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Services</h1>
                        <div className="small-border-deco"><span></span></div>
                        <ul className="crumb">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li className="sep"></li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

       
        <div id="content" className="no-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 mb30">
                        <figure className="pic-hover hover-scale mb20">
                            
                            <span className="bg-overlay"></span>
                            <img src="assets/images/services/pic_1.jpg" className="img-responsive" alt="" />
                        </figure>

                        <h3>General Constructing</h3>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
						
                    </div>

                    <div className="col-md-4 col-sm-6 mb30">
                        <figure className="pic-hover hover-scale mb20">
                            
                            <span className="bg-overlay"></span>
                            <img src="assets/images/services/pic_2.jpg" className="img-responsive" alt="" />
                        </figure>

                        <h3>Construction Management</h3>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
						
                    </div>

                    <div className="col-md-4 col-sm-6 mb30">
                        <figure className="pic-hover hover-scale mb20">
                            
                            <span className="bg-overlay"></span>
                            <img src="assets/images/services/pic_3.jpg " className="img-responsive" alt="" />
                        </figure>

                        <h3>Design and Build</h3>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
						
                    </div>

                    <div className="clearfix"></div>

                    <div className="col-md-4 col-sm-6 mb30">
                        <figure className="pic-hover hover-scale mb20">
                            
                            <span className="bg-overlay"></span>
                            <img src="assets/images/services/pic_4.jpg" className="img-responsive" alt="" />
                        </figure>

                        <h3>Preconstruction Consulting</h3>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
						
                    </div>

                    <div className="col-md-4 col-sm-6 mb30">
                        <figure className="pic-hover hover-scale mb20">
                            
                            <span className="bg-overlay"></span>
                            <img src="assets/images/services/pic_5.jpg" className="img-responsive" alt="" />
                        </figure>

                        <h3>Special Projects</h3>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
					
                    </div>

                    <div className="col-md-4 col-sm-6 mb30">
                        <figure className="pic-hover hover-scale mb20">
                           
                            <span className="bg-overlay"></span>
                            <img src="assets/images/services/pic_6.jpg" className="img-responsive" alt="" />
                        </figure>

                        <h3>Renovations</h3>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
						   
                    </div>


                </div>
            </div>

            

        </div>
    </div>
    </Router>
  );
}

export default Service;

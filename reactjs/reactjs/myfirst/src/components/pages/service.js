import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function Service() {
  return (
    <Router>
    <div className="App">
      <section id="subheader" data-stellar-background-ratio=".3">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Services</h1>
                        <div class="small-border-deco"><span></span></div>
                        <ul class="crumb">
                            <li><Link to={'/'} className="nav-link"> Home </Link></li>
                            <li class="sep"></li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

       
        <div id="content" class="no-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6 mb30">
                        <figure class="pic-hover hover-scale mb20">
                            <span class="center-xy">
                                <a href="">
                                    <i class="fa fa-plus btn-action btn-action-hide"></i>

                                    </a>
                            </span>
                            <span class="bg-overlay"></span>
                            <img src="public/assets/images/services/pic_1.jpg" class="img-responsive" alt="" />
                        </figure>

                        <h3>General Constructing</h3>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
						
                    </div>

                    <div class="col-md-4 col-sm-6 mb30">
                        <figure class="pic-hover hover-scale mb20">
                            <span class="center-xy">
                                <a href="">
                                    <i class="fa fa-plus btn-action btn-action-hide"></i>
                                    
                                    </a>
                            </span>
                            <span class="bg-overlay"></span>
                            <img src="public/assets/images/services/pic_2.jpg" class="img-responsive" alt="" />
                        </figure>

                        <h3>Construction Management</h3>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
						
                    </div>

                    <div class="col-md-4 col-sm-6 mb30">
                        <figure class="pic-hover hover-scale mb20">
                            <span class="center-xy">
                                <a href="">
                                    <i class="fa fa-plus btn-action btn-action-hide"></i>
                                    </a>
                            </span>
                            <span class="bg-overlay"></span>
                            <img src="public/assets/images/services/pic_3.jpg " class="img-responsive" alt="" />
                        </figure>

                        <h3>Design and Build</h3>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
						
                    </div>

                    <div class="clearfix"></div>

                    <div class="col-md-4 col-sm-6 mb30">
                        <figure class="pic-hover hover-scale mb20">
                            <span class="center-xy">
                                <a href="">
                                    <i class="fa fa-plus btn-action btn-action-hide"></i>
                                    </a>
                            </span>
                            <span class="bg-overlay"></span>
                            <img src="public/assets/images/services/pic_4.jpg" class="img-responsive" alt="" />
                        </figure>

                        <h3>Preconstruction Consulting</h3>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
						
                    </div>

                    <div class="col-md-4 col-sm-6 mb30">
                        <figure class="pic-hover hover-scale mb20">
                            <span class="center-xy">
                                <a href="">
                                    <i class="fa fa-plus btn-action btn-action-hide"></i></a>
                            </span>
                            <span class="bg-overlay"></span>
                            <img src="public/assets/images/services/pic_5.jpg" class="img-responsive" alt="" />
                        </figure>

                        <h3>Special Projects</h3>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
					
                    </div>

                    <div class="col-md-4 col-sm-6 mb30">
                        <figure class="pic-hover hover-scale mb20">
                            <span class="center-xy">
                                <a href="">
                                    <i class="fa fa-plus btn-action btn-action-hide"></i></a>
                            </span>
                            <span class="bg-overlay"></span>
                            <img src="public/assets/images/services/pic_6.jpg" class="img-responsive" alt="" />
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

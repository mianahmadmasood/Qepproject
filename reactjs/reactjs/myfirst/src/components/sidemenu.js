import React from 'react';
import Slider from './slider';

function sidemenu() {
  return (
    <div className="App">
      

            <Slider />

            <section id="section-about">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 col-sm-6 wow fadeInUp">

                            <figure className="pic-hover hover-scale mb20">
                            <span className="center-xy">
                                    <a className="image-popup" href="{{asset('public/assets/imageqep/planing.jpg')}}">
                                        <i className="fa fa-image btn-action btn-action-hide"></i></a>
                                </span>
                                <span className="bg-overlay"></span>
                                <img src="{{asset('public/assets/imageqep/planing.jpg')}}" className="img-responsive" alt="" />
                            </figure>

                            <h3>Planning</h3>
                            <p>
                            Effective planning is the core essence in successful execution of project. Our dedicated team responsibly and continuously plan during all stages of the system, from early research to development and design all the way towards implementation and final commissioning.
							              </p>
                        </div>

                        <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                            <figure className="pic-hover hover-scale mb20">
                                <span className="center-xy">
                                    <a className="image-popup" href="{{asset('public/assets/imageqep/engineering.jpg')}}">
                                        <i className="fa fa-image btn-action btn-action-hide"></i></a>
                                </span>
                                <span className="bg-overlay"></span>
                                <img src="{{asset('public/assets/imageqep/engineering.jpg')}}" className="img-responsive" alt="" />
                            </figure>
                            
                            <h3>Engineering</h3>
                            <p>
                            A project has to comply with the framework of planning and execution. Our experienced team executes and supervises through all phases of installation as well as helps you to understand the operational and functional requirements of the equipment for productive performance. <br />
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                            <figure className="pic-hover hover-scale mb20">
                                <span className="center-xy">
                                    <a className="image-popup" href="public/assets/imageqep/services.png">
                                        <i className="fa fa-image btn-action btn-action-hide"></i></a>
                                </span>
                                <span className="bg-overlay"></span>
                                <img src="public/assets/imageqep/services.png" className="img-responsive" alt="" />
                            </figure>
                            <h3>Services</h3>
                            <p>
                            Our team ensures the continuous operation of executed project in accordance with design perimeters. Thus, dedicated maintenance services are provided to ensure the effective functioning of  equipment for durable operations. <br />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section-features" className="text-light no-padding" data-stellar-background-ratio=".2">
                <div className="color-overlay pt80 pb80">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Why Choose Us<span className="tiny-border"></span></h2>
                            </div>

                            <div className="spacer-single"></div>


                            
                            <div className="feature-box-small-icon col-md-4 wow fadeIn" data-wow-delay="0">
                                <div className="inner">
                                    <span className="number wow fadeIn" data-wow-delay=".4s">1</span>
                                    <div className="text">
                                        <h3>RELIABILITY</h3>
                                     </div>
                                </div>
                            </div>
                          
                            <div className="feature-box-small-icon col-md-4 wow fadeIn" data-wow-delay=".2s">
                                <div className="inner">
                                    <span className="number wow fadeIn" data-wow-delay=".6s">2</span>
                                    <div className="text">
                                        <h3>PRINCIPAL APPROACH</h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="feature-box-small-icon col-md-4 wow fadeIn" data-wow-delay=".4s">
                                <div className="inner">
                                    <span className="number wow fadeIn" data-wow-delay=".8s">3</span>
                                    <div className="text">
                                        <h3>COMMITED TO DELIVERY</h3>
                                     </div>
                                </div>
                            </div>
                            

                            <div className="spacer-single"></div>

                            
                            <div className="feature-box-small-icon col-md-4 wow fadeIn" data-wow-delay=".6s">
                                <div className="inner">
                                    <span className="number wow fadeIn" data-wow-delay="1s">4</span>
                                    <div className="text">
                                        <h3>QUALITY ASSURANCE</h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="feature-box-small-icon col-md-4 wow fadeIn" data-wow-delay=".8s">
                                <div className="inner">
                                    <span className="number wow fadeIn" data-wow-delay="1.2s">5</span>
                                    <div className="text">
                                        <h3>AFTER-SALES SERVICES</h3>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="feature-box-small-icon col-md-4 wow fadeIn" data-wow-delay="1s">
                                <div className="inner">
                                    <span className="number wow fadeIn" data-wow-delay="1.4s">6</span>
                                    <div className="text">
                                        <h3>VIABLE SOLUTIONS</h3>
                                     </div>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </section>
            
            <section id="section-deco-1" className="text-light no-top no-bottom" data-bgcolor="#333" data-stellar-background-ratio=".2">
                <div className="color-overlay pt80">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>We Proud To Be <span className="id-color">Awards Winning</span> Engineering Company<span className="tiny-border"></span></h2>

                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>Our Vision</h3>
                                        <p>
                                           
                                        We escalate to journey beyond attainable into the realm of discovery for reliable and innovative prospects. Our inspiration is to ignite the idea of possibility for what is yet impossible.
                                     
                                        </p>
                                    </div>

                                    <div className="col-md-6">
                                        <h3>Our Mission</h3>
                                        <p>
                                        We have taken up the mission to observe and explore the technology shifts around the world for premier yet viable solutions. Further, to achieve the proper implementation of scrutinized propositions here in Pakistan for productive, reliable and innovative effect.
                                        </p>
                                    </div>
                                </div>


                            </div>

                            <div className="col-md-6">
                                <img src="public/assets/images/misc/team-1.png" className="img-responsive mt-20 wow fadeInLeft" alt="" />
                            </div>

                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  );
}

export default sidemenu;

import React from 'react';

function AboutUs() {
  return (
    <div className="App">
          
        <section id="subheader" data-stellar-background-ratio=".3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>About Us</h1>
                        <div className="small-border-deco"><span></span></div>
                        <ul className="crumb">
                            <li><a href="">Home</a></li>
                            <li className="sep"></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
       
        <div id="content" className="no-bottom">

            <div className="container">
                <div className="row" style={{textAlign:"justify"}}>
                    <div className="col-md-9">
                        <div className="row">

                        <div className="col-md-12">

                               

                                <h2>About Us</h2>
                                <p>
                                The world around us is in constant transformation. Adopting and innovating recent trends in technology. In Pakistan the transition is steady as, fusion of obsolete and trending technology yet prevails. We here at Quantum Engineering Pakistan initiated the fusion of different technical specialties into one realm. The trending engineering solutions from around the world are brought here succeeding enthusiastic research and forensic scrutiny. Thus, we are an Engineering, Procurement and Support Services Company based in Pakistan on a mission to transform.
                                    </p>
                            </div>
                            <div className="col-md-6">
                                <div className="padding30 mb30" data-bgcolor="#eee">
                                    <div className="box-icon-simple left">
                                        <i className="icon_comment_alt wow bounceIn id-color" data-wow-delay=".5s"></i>
                                        <div className="text">
                                            <h3 style={{fontWeight:"800"}} >Our Mission</h3>
                                            We have taken up the mission to observe and explore the technology shifts around the world for premier yet viable solutions. Further, to achieve the proper implementation of scrutinized propositions here in Pakistan for productive, reliable and innovative effect.
                                      
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="padding30 mb30" data-bgcolor="#eee">
                                    <div className="box-icon-simple left">
                                        <i className="icon_clock_alt wow bounceIn id-color" data-wow-delay=".5s"></i>
                                        <div className="text">
                                            <h3 style={{fontWeight:"800"}}>Our Vision</h3>
                                            We escalate to journey beyond attainable into the realm of discovery for reliable and innovative prospects. Our inspiration is to ignite the idea of possibility for what is yet impossible.
                                     
                                        </div>
                                    </div>
                                </div>
                            </div>

                           


                            

                            
                        </div>
                    </div>

                  
                </div>
            </div>

        


        </div>
    </div>
  );
}

export default AboutUs;

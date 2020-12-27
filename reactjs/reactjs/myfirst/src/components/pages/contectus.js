import React from 'react';
import Iframe from 'react-iframe';

function ContectUs() {
  return (
    <div className="App">
     
     
        <section id="subheader" data-stellar-background-ratio=".3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Contact Us</h1>
                        <div className="small-border-deco"><span></span></div>
                        <ul className="crumb">
                            <li><a href="">Home</a></li>
                            <li className="sep"></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <div id="content">


            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="de_tab tab_style_2">
                            <ul className="de_nav">
                                <li className="active" data-wow-delay="0s"><span>Lahore</span><div className="v-border"></div>
                                </li>
                               
                            </ul>

                            <div className="de_tab_content tc_style-1">

                                <div id="tab1">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="map-container">
                                                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840289118618!2d144.9537363149519!3d-37.817209742012885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sid!4v1462781318185" width="600" height="380" frameborder="0" style={{border:"0"}} allowfullscreen />
                                            </div>
                                        </div>

                                        <div className="col-md-6">

                                            <address className="address-style-2">
                                                <span><strong>Address:</strong>Office# 33 2nd Floor Taj Arcade 73-Jail Road Lahore, Pakistan</span>
                                                <span><strong>Phone:</strong>+92 3000 321 737</span>
                                                <span><strong>Email:</strong><a href="mailto:info@qep.com.pk">info@qep.com.p</a></span>
                                                <span><strong>Web:</strong><a href="https://qep.com.pk/">https://qep.com.pk</a></span>
                                                <span><strong>Open</strong>Monday - Friday 09:00-18:00</span>

                                            
                            
                                                
                                            </address>
                                        </div>
                                    </div>

                                </div>

                                  

                            </div>

                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="padding30" data-bgcolor="#f5f5f5">

                            <h3>Send Us Message
							<span className="tiny-border"></span>
                            </h3>
                            <form name="contactForm" id='contact_form' method="post" >
                                <div className="row">
                                    <div className="col-md-12">
                                        <div id='name_error' class='error'>Please enter your name.</div>
                                        <div>
                                            <input type='text' name='name' id='name' className="form-control" placeholder="Your Name" />
                                        </div>

                                        <div id='name_error' class='error'>Please enter your Company Name.</div>
                                        <div>
                                            <input type='text' name='name' id='name' className="form-control" placeholder="Your Company Name" />
                                        </div>

                                        <div id='email_error' class='error'>Please enter your valid E-mail ID.</div>
                                        <div>
                                            <input type='text' name='email' id='email' className="form-control" placeholder="Your Email" />
                                        </div>

                                        <div id='phone_error' class='error'>Please enter your phone number.</div>
                                        <div>
                                            <input type='text' name='phone' id='phone' className="form-control" placeholder="Your Phone" />
                                        </div>

                                        <div id='message_error' class='error'>Please enter your message.</div>
                                        <div>
                                            <textarea name='message' id='message' className="form-control" placeholder="Your Message"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div id='submit'>
                                            <input type='submit' id='send_message' value='Submit Form' className="btn btn-line" />
                                        </div>
                                        <div id='mail_success' class='success'>Your message has been sent successfully.</div>
                                        <div id='mail_fail' class='error'>Sorry, error occured this time sending your message.</div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>


                </div>
            </div>
        </div>

    </div>
  );
}

export default ContectUs;

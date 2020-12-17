import React from 'react';

function footer() {
  return (
    <div className="App">
      
      <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img style={{maxHeight: "210px"}} src="public/assets/images/logo_qepf.png" className="logo-small" alt="" /><br />
                    </div>
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <h3>Contact Us</h3>
                        <div className="widget widget-address">
                            <address>
                                <span>Office# 33 2nd Floor Taj Arcade 37-Jail Road Lahore, Pakistan</span>
                                <span><strong>Phone:</strong>(92) 3000 321 737</span>
                                <span><strong>Email:</strong><a href="mailto:info@qep.com.pk">info@qep.com.pk</a></span>
                                <span><strong>Web:</strong><a href="https://qep.com.pk/">https://qep.com.pk/</a></span>
                            </address>
                        </div>
                    </div>
                </div>
            </div>

            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            &copy; Copyright 2020 - Quantum Engineering Pakistan                  
                        </div>
                        
                    </div>
                </div>
            </div>

        </footer>

    </div>
  );
}

export default footer;

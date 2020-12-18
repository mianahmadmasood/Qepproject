import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './sidemenu';
import Services from './pages/service';
import Contact from './pages/contectus';
import About from './pages/about';


function header() {
  return (
    <Router>
      <header className="App-header">
        <div className="info">
          <div className="container">
              <div className="row">
                  <div className="col-md-8 headsideFont" >
                      <div className="col"><span className="id-color"><i className="fa fa-map-marker"></i></span>Lahore, Pakistan </div>
                      <div className="col"><span className="id-color"><i className="fa fa-clock-o"></i></span>Monday - Friday 09:00-18:00</div>
                      <div className="col"><span className="id-color"><i className="fa fa-phone"></i></span>+92 3000 321 <span className="headTextcolor">QEP</span></div>
      
        
                  </div>
                  <div className="col-md-4 text-right">
                      
                      <div className="col social">
                          
                          <a href="https://api.whatsapp.com/send?phone=+923000321737"><i className="fa fa-whatsapp"></i></a>
                          <a href="mailto:info@qep.com.pk"><i className="fa fa-envelope-o"></i></a>
                          
                      </div>
                      
                  </div>
              </div>
          </div>
        </div>
        <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="logo">
                            <Link to={'/'} className="nav-link">  
                                <img className="logo" style={{width: "200px"}}  src="assets/images/logo_qep.png" alt="" />
                                <img className="logo-2" src="assets/images/logo_qep.png" alt="" />
                            </Link>
                        </div>
                        <span id="menu-btn"></span>
                       
                        <nav>
                            <ul id="mainmenu">
                                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                                <li><Link to={'/services'} className="nav-link"> Services </Link></li>
                                <li><Link to={'/about'} className="nav-link"> About Us </Link></li>
                                <li><Link to={'/contact'} className="nav-link"> Contact </Link></li>
                            </ul>
                        </nav>
                       
                       
                </div>
            </div>
        </div>
      </header>
      </Router>
  );
}

export default header;

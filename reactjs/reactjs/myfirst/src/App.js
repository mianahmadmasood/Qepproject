
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Sidemenu from './components/sidemenu';
import Footer from './components/footer';

import Services from './components/pages/service';
import Contact from './components/pages/contectus';
import About from './components/pages/about';


function App() {
  return (
    
    <Router>
      <div>
          <Header />  
          
         
          <Switch>
            <Route exact path="/" component={Sidemenu}></Route>
            <Route exact path="/services" component={Services}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route component={Sidemenu}></Route>
          </Switch>
          <Footer />
      </div>
      </Router>
      
  );
}

export default App;

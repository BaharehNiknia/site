import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.js";
import Abb from "./Abb.js";
import Cntct from "./Cntct.js";
import Release from "./Release.js";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Header from './components/common/Header.js'

ReactDOM.render(
  <fragment>
    <Header></Header>
  <Router>
    <div>

      <main>
      <Route exact path="/" component={App} />
        <Route exact path="/home" component={App} />
        <Route path="/about" component={Abb} />
        <Route path="/contact" component={Cntct} />
        <Route path="/Releases" component={Release} />
      </main>
    </div>
  </Router>
 
  </fragment>
  ,
  document.getElementById("root")
);


//<aside>
//<Link to={`/`}>App</Link>
 //  <Link to={`/home`}>Home</Link>
 // <Link to={`/about`}>About</Link>
//  <Link to={`/contact`}>contact</Link>
//</aside> 

















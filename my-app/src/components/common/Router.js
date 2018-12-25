import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from "../../App.js";
import Abb from "../../Abb.js";
import Cntct from "../../Cntct.js";
import Release from "../../Release.js";
import ShowQs from "../../ShowQs.js";
import Servershow from "../../Servershow.js";
import React from 'react';
import RouteNotFound from "../../RouteNotFound.js";

//const posts = [
  //  { id: 1, title: 'First', content: 'Hello world!' },
 //   { id: 2, title: 'Second', content: 'Hello again!' }
 // ]
  
  //const Post = ({post}) => (
  //  <div>
   //   <h2>{post.title}</h2>
   //   {post.title}
  //  </div>
  //)

class Router1 extends React.Component{
   render(){
       return(<Router>
        <div>
          <main>
          <Route exact path="/" component={App} />
            <Route exact path="/home" component={App} />
            <Route path="/about" component={Abb} />
            <Route path="/contact" component={Cntct} />
            <Route path="/Releases" component={Release} />
            <Route path="/Qs" component={ShowQs} />
            <Route path="/server" component={Servershow} />
           
          </main>
        </div>
      </Router>);
   }}

export default Router1;
// <Route render={() => <RouteNotFound />}></Route>
//<aside>//            <Route exact path="/post/:id" render={({match}) => (<Post post={posts.find(p => p.id === match.params.id)} />)} />
//<Link to={`/`}>App</Link>
 //  <Link to={`/home`}>Home</Link>
 // <Link to={`/about`}>About</Link>
//  <Link to={`/contact`}>contact</Link>
//</aside> 
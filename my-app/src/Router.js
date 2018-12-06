

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="./Home">Home</Link>
          </li>
          <li>
            <Link to="./About">About</Link>
          </li>
         
        </ul>
      </nav>

      <Route path="./Home" exact component={Index} />
      <Route path="./About" component={About} />
    </div>
  </Router>
);

export default AppRouter;

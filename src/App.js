import React from 'react';

import About from './componentes/About';
import Home from './componentes/Home';
import Users from './componentes/Users';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="container">
      <Router>
        <div className="container mt-3">
          <div className="btn btn-dark">
            <Link to="/" className="btn - btn-dark">Home</Link>
            <Link to="/about" className="btn - btn-dark">About</Link>
            <Link to="/users" className="btn - btn-dark">Users</Link>
          </div>
        </div>
      
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;

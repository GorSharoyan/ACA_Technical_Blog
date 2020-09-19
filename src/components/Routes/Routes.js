import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './Routes.css'

export default function Routes () {
    return (
        <div className='routing'>
            <Router>
                <div className='nav-items'>
                    <Link  to='/'>Login</Link>
                    <br></br>
                    <Link to='/'>Home</Link>
                    <br></br>
                    <Link to='/'>Interests</Link>
                    <br></br>
               </div>
            <Switch>
                <Route exact path ='/'>
                    <h1>Login</h1>
                </Route>
                <Route exact path ='/'>
                    <h1>Home</h1>
                </Route>
                <Route exact path ='/'>
                    <h1>Interests</h1>
                </Route>
            </Switch>
            </Router>
        </div> 
      )   
}
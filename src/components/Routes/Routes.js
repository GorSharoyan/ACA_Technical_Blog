import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Routes () {
    return (
        <Router>
           <Link  to='/'>Login</Link>
           <Link to='/'>Home</Link>
           <Link to='/'>Interests</Link>

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
      )   
}
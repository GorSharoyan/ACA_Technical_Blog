import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       return ( <Router>
            <Link  to='/'>Home</Link>
            <Link to='/'>Contacts</Link>
            <Link to='/'>Interests</Link>
            <Switch>
                <Route exact path ='/'>
                    <h1>Home</h1>
                </Route>
                <Route exact path ='/'>
                    <h1>Contacts</h1>
                </Route>
                <Route exact path ='/'>
                    <h1>Interests</h1>
                </Route>
            </Switch>
          </Router>
       )   
    }

}
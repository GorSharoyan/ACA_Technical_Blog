import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Routes from './components/Routes/Routes'

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render () {
        return(
       <Header />,
       <Routes />
        )
    }
}
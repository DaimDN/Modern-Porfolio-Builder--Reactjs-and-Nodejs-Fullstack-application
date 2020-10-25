import React from 'react'
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Homepage from '../Pages/Home';
import Navbar from './navbar';
import Login from '../Pages/login';
import Register from '../Pages/register';
import NotFound from '../Pages/404';


export default function Routing() {
    return (
       
        <Router>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/" component={Homepage}/>
                <Route component={NotFound}/>
              
            </Switch>
        </div>
    </Router>
    )
}

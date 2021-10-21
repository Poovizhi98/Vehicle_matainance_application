import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'

import Welcome from './components/Welcome'
import Dealer from './components/Dealer'
import User from './components/User'
import ADD_UPDATE_MAINTAINANCE from './components/ADD_UPDATE_MAINTAINANCE'
import login_updated from './components/login_updated';
import loginDealer from './components/loginDealer';
import loginUser from './components/loginUser';
import sendEmail from './components/sendEmail';
import addDealer from './components/addDealer';

import calendar from './components/calender';




class App extends Component {
 
  render() {
    return (
      <div>
       <Router>
         <Switch>
         <Route exact path='/' component={Welcome} />
         <Route exact path = '/login' component = {login_updated}/>
         <Route exact path = '/dealer/:did' component = {Dealer}/>
         <Route exact path = '/user/:uid' component = {User}/>
         <Route exact path = '/update_add/:uid/:mid' component = {ADD_UPDATE_MAINTAINANCE}/>
         <Route exact path = '/update_add/:uid/' component = {ADD_UPDATE_MAINTAINANCE}/>
         <Route exact path = '/signUp/dealer' component = {loginDealer}/>
         <Route exact path = '/signUp/user' component = {loginUser}/>
         <Route exact path = '/signUp/dealer/:dealerID' component = {Dealer}/>
         <Route exact path = '/update_add/dealer/:uid/:dealerID' component = {ADD_UPDATE_MAINTAINANCE}/>
         <Route exact path = '/sendEmail/:uid' component = {sendEmail}/>
         <Route exact path = '/addDealer/:uid' component = {addDealer}/>
         <Route exact path = '/schedule/:uid' component = {calendar}/>
         
         </Switch>
       </Router>
      
        </div>
        );
  }
}
export default App;
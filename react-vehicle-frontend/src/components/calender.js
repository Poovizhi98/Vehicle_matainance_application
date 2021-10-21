import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import logo from './logo.jpg'
import Calendar from 'react-calendar-pane';
import moment, { calendarFormat } from 'moment';
import date from 'react-calendar-pane';
import './calendar.css'
import ProductService from '../service/ProductService';
import { Formik, Form,Field,ErrorMessage } from 'formik';

class calender extends Component {

    constructor(props){
        super(props);
        this.state={
          selectedDate:moment(),
          userID:this.props.match.params.uid,
          value:'',
          notes:''
        }
        console.log(this.state.selectedDate.format('YYYY-MM-DD'))
        this.sendEmail=this.sendEmail.bind(this)
        
      }
      
      sendEmail(value){
        console.log(value)
        
          ProductService.sendEmail(this.state.userID,value.notes,this.state.selectedDate.format('YYYY-MM-DD')).then(
              response=>{
                 alert("Your Maintainance has been scheduled")
              }
          )

      }
      onSelect=(e)=>{
        this.setState({selectedDate:e})
      }
    render() {
        let {notes}=this.state
        return (
            <div className="u1">
            <header className="header">
            <nav className="navbar navbar-style">
            <div className="container" id="c1">
                    <div className="navbar-header">
                       <img src={logo} class="logo1" alt="not found"></img> 
                    </div>{
                     <h1 id="h1">Vehicle Maintenance App</h1>} 
                    <div className= "nav ">
                        <a href ="https://www.google.com/">home</a>
                        <a href ="">contact</a>
                        <a href ="">about us</a>
                        <a href ="">check</a>
                    </div>
               </div>
            </nav>
        </header>

        <div>
            <div className="App">
            <header className="App-header">
              <h1 id="h1" className="App-title">Schedule Maintainence</h1>
            </header>
            <p id="p1"> The date you've selected is: {this.state.selectedDate.format('YYYY-MM-DD')} </p>
            <div className="calendar-part">
            <Calendar date={moment("5/12/2019", "DD/MM/YYYY")} onSelect={this.onSelect} />
            </div>
            <div className="container"> 
          {/* <h1>App</h1> */}
         
              <div class = "col-md-4">
                 
                  <Formik
                   initialValues={{ notes}}
                  enableReinitialize = "true"
                  validateOnChange={false}
                  validateOnBlur={false}
                  
                  onSubmit={this.sendEmail}>

                    <div className="vehicle">
                      <Form>
                        <pre></pre>
                        <pre></pre>

                      <fieldset className="form-group">
                              <label id="p1">Enter any notes to the dealer</label>
                                 <Field className="form-control"  type="text" name="notes" placeholder="Enter Notes"></Field>
                      </fieldset>
                     
         
                        <div>
                        <button className="btn btn-success"  type="submit">Schedule Maintainence</button>
                        </div> 
                      </Form>
                      </div>
                      </Formik>
                </div>
          </div>
         
    
          </div>
          </div>
            <div>
               
                
            </div>
            <footer className="footer1">
            &copy; Copyright: <a href="">Vehicle Maintenance</a>
                <div className = "footer-icons">
                <SocialIcon url="https://www.facebook.com/"  />
                <SocialIcon url="https://www.instagram.com/?hl=en"  />
                <SocialIcon url="https://twitter.com/login"  />
                <SocialIcon url="https://www.whatsapp.com/"  />
             
                </div>
            </footer>
            </div>
        );
    }
}

export default calender;
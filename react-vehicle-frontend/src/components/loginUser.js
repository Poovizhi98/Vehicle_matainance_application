import React, { Component } from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import ProductService from '../service/ProductService';
import logo from './logo.jpg'
import { SocialIcon } from 'react-social-icons';
import './login_updated.css'

class loginUser extends Component {
    constructor(props){
        super(props)
    
        this.state = ({
            userName: '',
            email:'',
            password:'',
            contactNumber:'',
            pinCode:'',
            signUp:'',
            value:'option',
            userId:'',
            dealer:null,
            maintainace:[]
        })
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("Inside handleChange")
    this.setState({value: event.target.value});
    console.log("Inside Handle Change the value is "+this.state.value)
    
  }

  handleSubmit(event) {
      console.log("Inside handle submit")
      console.log(event)
      ProductService.addUser(event).then(
          response=>{
            this.props.history.push(`/login`)
          }
      )
  
  }
  


    validateForm(values){
      let errors={}
      ProductService.validateUser(values.userId).then(
        response=>{
          console.log(response.status)
          if(response.status==200){
            localStorage.setItem("userID",200)
          }
          else if(response.status==204)
          {
            console.log("else part")
            localStorage.setItem("userID",204)
          }
          
        }
      )
      
      
      if(200==localStorage.getItem("userID")){
          errors.userId="Please Enter unique user ID"
      }
      
      else if(!values.userId){
        errors.userId="Please enter user ID"
      }
      
      else if(!values.userName){
          errors.userName = 'please enter name'
      }

      else if(!values.email){
          errors.email='please enter email'
      }
      else if(!values.password){
          errors.password='please enter password'
      }
      else if(!values.contactNumber){
          errors.contactNumber='please enter your phone number'
      }
      else if(!values.pinCode){
          errors.pinCode='please enter pincode'
      }
      // else if(!values.signUp){
      //     errors.signUp='please select any one'
      // }
      else if(values.password.length<6){
          errors.password="password should not be less than 6"
      }
      console.log(errors)
      return errors
    }
    render() {
        let { userName, email, password, contactNumber, pinCode,maintainace,userId,dealer } = this.state
      return (
        <div className="ok1"> 
        <header className="header">
                <nav className="navbar navbar-style">
                <div className="container" id="c1">
                        <div className="navbar-header">
                           <img src={logo} class="logo" alt="not found"></img> 
                        </div>{
                         <h1 id="h1">Vehicle Maintenance App</h1>} 
                        <div className= "nav">
                            <a href ="https://www.google.com/">home</a>
                            <a href ="">contact</a>
                            <a href ="">about us</a>
                            <a href ="">check</a>
                        </div>
                   </div>
                </nav>
            </header>
        <div className="container"> 
         
         
              
                 
                  <Formik
                   initialValues={{ userName, email, password, contactNumber, pinCode,userId,maintainace,dealer }}
                  enableReinitialize = "true"
                  validateOnChange={true}
                  validateOnBlur={false}
                  validate ={this.validateForm}
                  onSubmit={this.handleSubmit}
                  
                  >
                   
                      <Form>
                        <div>
                        <div className= "col-md-4" id ="div10">
                        <h2 id="h2">Sign Up</h2>
                      <ErrorMessage name="userName" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="userId" component="div"
                        className = "alert alert-warning"></ErrorMessage>

                        <ErrorMessage name="email" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="password" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="contactNumber" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="pinCode" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        <ErrorMessage name="signUp" component="div"
                        className = "alert alert-warning"></ErrorMessage>
                        
                    


                      <fieldset className="form-group">
                              <label>User ID</label>
                                 <Field className="form-control"  type="text" name="userId" placeholder="Enter your User ID"></Field>
                      </fieldset>
                      <fieldset className="form-group">
                              <label>Name</label>
                                 <Field className="form-control"  type="text" name="userName" placeholder="Enter your name"></Field>
                      </fieldset>
                          <fieldset className="form-group">
                              <label>Email</label>
                              <Field className="form-control" type="email" name="email"placeholder="Enter your email"></Field>
                          </fieldset>
                          <fieldset className="form-group">
                              <label>Password </label>
                              <Field className="form-control" type="password" name="password" placeholder="Enter your password"></Field>
                          </fieldset>
                          <fieldset className="form-group">
                              <label> Confirm Password </label>
                              <Field className="form-control" type="password" name="confirmPassword" placeholder="Enter your password again"></Field>
                          </fieldset>
                          <fieldset className="form-group">
                              <label>Mobile Number</label>
                              <Field className="form-control" type="text" name="contactNumber" placeholder="Enter your mobile number"></Field>
                          </fieldset>
                          <fieldset className="form-group">
                              <label>Pincode</label>
                              <Field className="form-control" type="text" name="pinCode" placeholder = "Enter pincode"></Field>
                          </fieldset>
                          
         
                        <div>
                          <button value={this.state.value} className="btn btn-success" type="submit">Sign up</button>
                        </div> 
                        </div>
                        </div>
                      </Form>
                  </Formik>
                </div>
                <footer className="footer">
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

export default loginUser;
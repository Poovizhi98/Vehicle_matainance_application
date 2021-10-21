import React, { Component } from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import ProductService from '../service/ProductService';
import { SocialIcon } from 'react-social-icons';
import logo from './logo.jpg'
import './login_updated.css'


class login_updated extends Component {

    constructor(props){
        super(props)
    
        this.state = ({
            email:'',
            password:'',
            signUp:'',
            value:"option",
            userID:'',
            email:'',
            passwprd:''
        })
        this.maintenanceClicked=this.maintenanceClicked.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.sleep=this.sleep.bind(this)
        this.validateForm=this.validateForm.bind(this)
        this.insideValidation=this.insideValidation.bind(this)
    }
   
    handleChange(event){
        this.setState({value: event.target.value});
    }
    async  sleep(msec) {
        return new Promise(resolve => setTimeout(resolve, msec));
    }

    async maintenanceClicked(event){
        console.log("inside handleClick")
        console.log(this.state.value)
        
        console.log(event)
        if(this.state.value=="dealer"){ 
            ProductService.loginDealer(event.email).then(
            response=>{
                this.props.history.push(`/dealer/${response.data}`)            
                  })}
        else if(this.state.value=="user"){
            ProductService.loginUser(event.email).then(
                response=>{
                    this.props.history.push(`/user/${response.data}`)
                }

            )

        }
       

            
        
        
        console.log("Inside Submit")
        
      
            
    }
    insideValidation(){

    }
        
   

    validateForm(values){
        
        console.log("Inside validate form")
        
        let errors={}
        ProductService.loginUser(values.email).then(response=>{

             
           if(response.status==200){
               ProductService.getUser(response.data).then(resolve=>{
                   console.log(resolve)
                   if(resolve.status==200){localStorage.setItem("email",resolve.data.email)
                   localStorage.setItem("password",resolve.data.password)
                   console.log(localStorage.getItem("email"))
                   console.log(localStorage.getItem("password"))
            }
                  
                   
               })
              
              
            }
            ProductService.loginDealer(values.email).then(response=>{
                if(response.status==200){
                    ProductService.getDealer(response.data).then(response=>{
                        if(response.status==200){
                            localStorage.setItem("email",response.data.dealerEmail)
                            localStorage.setItem("password",response.data.dealerpassword)
                            console.log(response.data)
                            
                         //    localStorage.setItem("Demail",response.data.email)
                        }
                    })
                }
                
            })
            

            
           

        })
        console.log(localStorage.getItem("email"))
        console.log(localStorage.getItem)
                    
     
        if(!(values.email==localStorage.getItem("email"))){
            errors.email='Please enter  email'
        }
        else if(!values.password){
            errors.password="Enter Password"
        }
        else if(!(values.password==localStorage.getItem("password"))){
            errors.password='Incorrect Password Entered'
        }
        else if(values.signUp=="option"){
            errors.signUp='please select any one of the options'
        }
        
        console.log(errors)
        return errors
        
       
                  
        
        
      }
    render() {
        let {  email, password,signUp} = this.state
        return (
            <div className="top">
                <header className="header">
                <nav className="navbar navbar-style">
                <div className="container" id="c1">
                        <div className="navbar-header">
                           <img src={logo} class="logo1" alt="not found"></img> 
                        </div>{
                         <h1 id="h1">Vehicle Maintenance App</h1>} 
                        <div className= "nav ">

                  
                           
                            <a href ="">About us</a>
                            <a href ="/signUp/user"> Sign Up as User </a>
                            <a href ="/signUp/dealer">Sign Up as Dealer </a>
                        </div>
    
                        </div>
      
                </nav>
            </header>
            
            <div className="container">
               
                
                   

                
                <Formik
                initialValues={{ email, password,signUp}}
               
                enableReinitialize={true} onSubmit={this.maintenanceClicked} validateOnChange= {false} validateOnBlur={false} validate={this.validateForm}>
                    <Form>
                   
 
                <ErrorMessage name="email" component="div"
                className = "alert alert-warning"></ErrorMessage>
                <ErrorMessage name="password" component="div"
                className = "alert alert-warning"></ErrorMessage>
                <ErrorMessage name="signUp" component="div"
                className = "alert alert-warning"></ErrorMessage>
                         <div>
                    <div className= "col-md-4" id ="div10">
                        <h2 id="h2">Login</h2>

                    <fieldset className="form-group">
                              <label>Email</label>
                              <Field className="form-control" type="email" name="email"placeholder="Enter your email"></Field>
                    </fieldset>

                    <fieldset className="form-group">
                              <label>Password </label>
                              <Field className="form-control" type="password" name="password" placeholder="Enter your password"></Field>
                     </fieldset>
                     <fieldset className="form-group">
                     <label>Sign up as</label>
                     <Field className="form-control" id="myClass" as="select" name="signUp" value={this.state.value} onChange={this.handleChange}  placeholder="please select">
                              <option value="option">Please select an option</option>
                              <option value="dealer">Dealer</option>
                              <option value="user">User</option>    
                     </Field>
                    </fieldset>
                     <div>
                         <td>
                               <button className="btn btn-success"id="button" type="submit" >Login</button>
                          </td>
                          {/* <td>
                               <button className="btn-btn-primary" id="button" onClick = {() => this.Redirect()}>Sign Up</button>
                          </td> */}
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

export default login_updated;
import React, { Component } from 'react';
import { Formik, Field,Form, ErrorMessage } from 'formik';
import ProductService from '../service/ProductService'
import { SocialIcon } from 'react-social-icons';
import logo from './logo.jpg'
import './add_update_maintainance.css'


class ADD_UPDATE_MAINTAINANCE extends Component {
    constructor(props){
        super(props)
        console.log(this.props.match.params.uid)
        this.state=({
            dealerID:this.props.match.params.dealerID,
            maintainID:this.props.match.params.mid,
            userID:this.props.match.params.uid,
            vehicleName:'',
            service:'',
            date:'',
            mileage:'',
            disabled:true,
            btntext:'UPDATE',
            title:'UPDATE Maintainance List',
            show:false,
            logic:false,
            message:""
            
        })
        this.onSubmit=this.onSubmit.bind(this);
        this.validateMaintainanceForm=this.validateMaintainanceForm.bind(this);
    }
    validateMaintainanceForm(values){
        let errors={}
        // localStorage.setItem("dealerID",204)
        console.log("Inside validate")
        console.log(values)
        console.log(values.maintainID)
        if(!(this.state.maintainID==values.maintainID)){
            console.log("inside if")
            ProductService.checkUniqueMaintainanceID(this.state.userID,values.maintainID).then(
                response=>{
                    console.log("Inside checccck unique Id")
                    if(response.status==204){
                        localStorage.setItem("ID",204)
                    }
                    else if(response.status==200){
                        localStorage.setItem("ID",200)
                    }
                }
            )
        }
        
        console.log(localStorage.getItem("ID"))
        if(values.maintainID==undefined){
            errors.maintainID="Enter maintainance ID"
        }
  
        else if(values.maintainID==""){
            errors.maintainID="Enter maintainance ID"
        }
        else if(localStorage.getItem("ID")==200){
            console.log("maintainance Id exists")
            errors.maintainID="Enter Unique maintainance  ID"
        }
        else if(values.vehicleName==""){
            errors.vehicleName="Enter vehicle Name"
        }
        else if(values.vehicleName==undefined){
            errors.vehicleName="Enter vehicle Name"
        }
        else if(values.service==""){
            errors.vehicleName="Enter Service "
        }
        else if(values.service==undefined){
            errors.vehicleName="Enter  Service"
        }
        else if(values.date==""){
            errors.date="Choose Date"
        }
        else if(values.date==undefined){
            errors.date="Choose Date"
        }
        else if(values.mileage==""){
            errors.mileage="Enter Mileage for the car"
        }
        else if(values.mileage==undefined){
            errors.mileage="Enter Mileage for the car"
        }
        else if(!(values.mileage>0)){
            errors.mileage="Enter valid mileage for the car"
        }
        
        
       
        console.log(errors)
        return errors

    }
    onSubmit(value){
        console.log("Inside onSubmit")
        console.log(value);
        console.log(this.state.dealerID)
        
        if(!(this.state.dealerID==undefined)){
            this.props.history.push(`/signUp/dealer/${this.state.dealerID}`)

        }
        if(this.state.maintainID==value.maintainID){
            ProductService.updateMaintainance(this.state.maintainID,this.state.userID,value).then(
                response=>{
                    if(response.status==200){
                    this.setState({
                        logic:true,
                        message:"Your data has been successfully updated"
                    })}
                    this.props.history.push(`/user/${this.state.userID}`)
    
                }
            )
         
        }
        else{
            ProductService.addMaintainance(this.state.userID,value).then(
                response=>{
                    if(response.status==200){
                    this.setState({
                        logic:true,
                        message:"Your data has been successfully Added"
                    })}
                    this.props.history.push(`/user/${this.state.userID}`)
    
                }
            )
        }
        
     
          this.setState({
              show:true
          })

    }
   
    componentWillMount(){
        
        ProductService.getMaintainace(this.state.userID,this.state.maintainID).then(
            response =>{
                console.log("get maintainance is working")
                console.log(response.data)
                // response.data.map(maintain=>
                    
                // this.setState({
                //     vehicleName:maintain.vehicleName,
                //     service:maintain.service,
                //     date:maintain.date,
                //     mileage:maintain.mileage
                // })
                // )
                console.log(response)
                this.setState({
                        vehicleName:response.data.vehicleName,
                        service:response.data.service,
                        date:response.data.date,
                        mileage:response.data.mileage
                    })
                console.log(this.state.vehicleName)
                
            }
            
        )
        if(!this.state.maintainID){
            this.setState({
                btntext:"ADD",
                disabled:false,
                title:"ADD Maintainance Record"
            })
        }

    }
    render() {let {maintainID,vehicleName,service,date,mileage}=this.state
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
           
                 <div className="container" id="a2">
                    <h2 id="h2">{this.state.title}</h2>
        {this.state.logic &&<div className="alert alert-success">{this.state.message}</div> }
              <Formik
                  initialValues={{maintainID,vehicleName,service,date,mileage}}
                  enableReinitialize={true} onSubmit={this.onSubmit} validateOnChange= {false} validateOnBlur={false} validate={this.validateMaintainanceForm}>
                      
                  <Form>
                  <div className= "col-md-6"  id ="div1" >
                  <div>
                  <ErrorMessage name="maintainID" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="vehicleName" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="service" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="date" component="div" className="alert alert-warning"/>
                  <ErrorMessage name="mileage" component="div" className="alert alert-warning"/>
                    
                      <h2 id="h2">Add Your Maintainance</h2>
                      <fieldset className="form-group">
                          
                          <label>Maintain ID</label>
                          <Field className="form-control" type="text" name="maintainID" disabled={this.state.disabled} />
                      </fieldset>
                      <fieldset className="form-group">
                          <label>Vehicle Name</label>
                          <Field className="form-control" type="text" name="vehicleName" />
                      </fieldset>
                      <fieldset className="form-group">
                          <label>service</label>
                          <Field className="form-control" type="text" name="service" />
                      </fieldset>
                      <fieldset className="form-group">
                          <label>date</label>
                          <Field className="form-control" type="date" name="date" />
                      </fieldset>
                     
                      <fieldset className="form-group">
                          <label>Mileage</label>
                          <Field className="form-control" type="text" name="mileage" />
                      </fieldset>
                      <fieldset>
                      <div>
                      <button className="btn btn-success float-left" id="button" type="submit">{this.state.btntext}</button>
                      </div>
                      </fieldset>
                      
                      </div>
                      </div> 
                    
                      
                  </Form>
              </Formik>
              {/* <br/>
              <div>
              </div> */}
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

export default ADD_UPDATE_MAINTAINANCE;
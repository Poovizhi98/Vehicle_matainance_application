import React, { Component } from 'react';
import './Dealer.css'
import ProductService from '../service/ProductService';
import { SocialIcon } from 'react-social-icons';
import logo from './logo.jpg'
class Dealer extends Component {
    constructor(props){
        super(props)
        this.state=({
            user:[],
            maintainace:[],
            dealerID:this.props.match.params.dealerID
        })
        this.refreshProduct=this.refreshProduct.bind(this);
        this.deleteMaintainance=this.deleteMaintainance.bind(this);
        this.addMaintainance=this.addMaintainance.bind(this);
    }
    addMaintainance(userID,dealerID){
      this.props.history.push(`/update_add/dealer/${userID}/${dealerID}`)


    }
    deleteMaintainance(userID,maintainID){
      ProductService.deleteMaintainace(userID,maintainID).then(
        response=>{
          this.refreshProduct()

        }
      )
    }
    componentWillMount(){
        
      this.refreshProduct();
    
  }
    refreshProduct(){
      ProductService.history(this.state.dealerID).then(
          response =>{
              
              this.setState({
                  user:response.data
              })
              // this.refreshProduct()
              console.log(this.state.user)
          }
          
          
      )
      
  }
    render() {
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
               <div className="container" id="c2">
            <h2 id="h2"> Vehilcle app</h2>
        {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
  <table className="table table-striped table-dark table-hover">
  <thead>
    <tr>
      <th>User Name</th>
      <th>User Email</th>
      <th>Contact Number</th>
      <th>Pin Code</th>
      <th>maintainace</th>
      
      
    </tr>
  </thead>
  <tbody>
      {
      this.state.user.map(user =>
    <tr key={user.userName}> 
        <td>{user.userName}</td>
        <td>{user.email}</td>
      <td>{user.contactNumber}</td>
      <td>{user.pinCode}</td>
      {<td>{user.maintainace.map(maintainace =><div>
    <td >vehicleName:{maintainace.vehicleName}</td>    
    <td>service:{maintainace.service}</td>
    <td>date: {maintainace.date}</td>
    <td>mileage: {maintainace.mileage}</td>
    <td><button className="btn btn-danger" onClick={()=>this.deleteMaintainance(user.userId,maintainace.maintainID)}>Delete</button></td>
    <td><button className="btn btn-success " onClick={()=>this.addMaintainance(user.userId,this.state.dealerID)}>ADD</button></td>
    
    </div>
      

      )}</td>}
     
      
      {/* <td><button className="btn btn-warning" onClick={()=>this.updateProductClicked(product.productId)}>Update</button></td>
      <td><button className="btn btn-danger" onClick={()=>this.deleteButtonClick(product.productId)}>Delete</button></td>
      <td><button className="btn btn-success " onClick={()=>this.giveRating(product.productId)}>Write review</button></td>
    */}
    
      
    </tr>
      )
      }
      
  </tbody>
  
</table>




            </div>
            <footer className="footer3">
            &copy; Copyright: <a href="">Vehicle Maintenance</a>
                <div className = "footer-icons">
                <SocialIcon url="https://www.facebook.com/"  />
                <SocialIcon url="https://www.instagram.com/?hl=en"  />
                <SocialIcon url="https://twitter.com/login"  />
                <SocialIcon url="https://www.whatsapp.com/"  />
             
                </div>
            </footer>
            </div>
            </div>
            
            
        );
    }
}

export default Dealer;
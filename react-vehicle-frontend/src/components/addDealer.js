import React, { Component } from 'react';
import ProductService from '../service/ProductService';
import { SocialIcon } from 'react-social-icons';
import logo from './logo.jpg'
import './user.css'


class addDealer extends Component {
    constructor(props) {
        super(props);
        this.state=({
            userID:this.props.match.params.uid,
            dealer:[],
            dealerId:'',
            dealerName:'',
            dealerEmail:'',
            dealerContactNumber:'',
            dealerPinCode:'',
            dealerAddress:''


    
     })
        this.refreshDealer=this.refreshDealer.bind(this)
        this.addDealer=this.addDealer.bind(this)
    }
    addDealer(userID,dealerId){
        console.log("inside add dealer")
        ProductService.getDealer(dealerId).then(
            response=>{console.log(response.status)
                ProductService.addDealerWithUserID(userID,response.data).then(
                    response=>{
                        
                        if(response.status==200){
                            alert("Dealer Successfully Added")
                        }
                        else if(response.status=204){
                            alert("Dealer already Added")
                            
                        }
                        
                    }
                )

            }
        )
        

    }
    
    componentWillMount(){
        this.refreshDealer()
        
        
    }
    refreshDealer(){
        ProductService.getAllDealer().then(
            response=>{
                this.setState({
                    dealer:response.data
                })

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
                      
                      <a href ="">about us</a>
                      
                  </div>
             </div>
          </nav>
      </header>
            <div>
                <div className="container" id="c2">
                    <h2 id="h2">Maintainance List</h2>
                    <table className="table table-striped table-dark table-hover">
  <thead>
    <tr>
      <th>Dealer Id</th>
      <th>Dealer Name</th>
      <th>Dealer Email</th>
      <th>Dealer Contact Number</th>
      <th>Dealer PinCode</th>
      <th>Dealer Address</th>
      
      
      
    </tr>
  </thead>
  <tbody>
      {
      this.state.dealer.map(dealer =>
    <tr key={dealer.dealerId}> 
        <td>{dealer.dealerId}</td>
      <td>{dealer.dealerName}</td>
      <td>{dealer.dealerEmail}</td>
      <td>{dealer.dealerContactNumber}</td>
      <td>{dealer.dealerPinCode}</td>
      <td>{dealer.dealerAddress}</td>
      <td><button className="btn btn-success" onClick={()=>this.addDealer(this.state.userID,dealer.dealerId)}>ADD This Dealer</button></td>
      
      
      {/* <td><button className="btn btn-warning" onClick={()=>this.updateMaintainanceClicked(maintainance.maintainID,this.state.userID)}>Update</button></td>
      <td><button className="btn btn-danger" onClick={()=>this.deleteButtonClick(maintainance.maintainID)}>Delete</button></td>
       */}
   
    
      
    </tr>
      )
      }
  </tbody>
  
</table>
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
            </div>
        );
    }
}

export default addDealer;


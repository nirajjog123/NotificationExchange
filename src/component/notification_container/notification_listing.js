import React from "react";
import { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Redirect,Route,router } from 'react-router'

class Notification_listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listingData : {},
            create_Msg: false,
          };
          this.handleCreate = this.handleCreate.bind(this);
      }

      handleCreate(event){
          this.setState({create_Msg:true});    
        
      
    }
   
    render() {
       const {create_msg} = this.state;
       
    return (
        <div>
        <div>
        <button  className="btn btn-primary" onClick={this.handleCreate}>Create +</button>
        </div>
        <BootstrapTable options={ { noDataText: 'This is custom text for empty data' }}>
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Template Name</TableHeaderColumn>
        <TableHeaderColumn dataField='msg'>Messsage</TableHeaderColumn>
        <TableHeaderColumn dataField='time'>Last updated</TableHeaderColumn>
        <TableHeaderColumn dataField='edit'>Edit</TableHeaderColumn>
        <TableHeaderColumn dataField='delete'>Delete</TableHeaderColumn>
      </BootstrapTable>

      {create_msg &&<Redirect to = {{pathname:'/message'}}/>}
      </div>
    );
  }
}
export default Notification_listing;
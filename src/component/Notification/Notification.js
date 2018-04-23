import React from "react";
import { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Redirect, Route, router } from 'react-router';
import axios from 'axios';
import Const from '../../common/Constants';
import '../Notification/Notification.css';


class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {           
            create_Msg: false,
            data: [],
            edit : false,
            selectedCandidate: {},
            mug : "mugdha"
        };
        this.handleCreate = this.handleCreate.bind(this);
        this.editNotificationButton = this.editNotificationButton.bind(this);
        this.deleteNotificationButton = this.deleteNotificationButton.bind(this);
        this.editData = this.editData.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.toggleOnOffButton = this.toggleOnOffButton.bind(this);
        
        
    }
    editNotificationButton(cell, row) {
        return <i class="fa fa-pencil text-primary fontsize25" aria-hidden="true" onClick={() => this.editData(row, 'Edittt')}></i>
        // <button className="btn notificationBtn" onClick={() => this.editData(row, 'Edittt')}>Edit</button>;
        }
        toggleOnOffButton(cell, row) {
            return <div className="margin-l-45">
            <span className="lft">
            <div><i class="fa fa-envelope-open text-success" aria-hidden="true"></i></div>
            <div> <i class="fa fa-toggle-on text-primary" aria-hidden="true"></i></div>
            </span>
            <span className="lft"> 
            <div> <i class="fa fa-bell text-primary margin-lr-25" aria-hidden="true"></i> </div>
            <div> <i class="fa fa-toggle-on text-primary" aria-hidden="true"></i></div>
            </span>
            <span className="lft"> 
            <div> <i class="fa fa-envelope text-gray" aria-hidden="true"></i> </div>
            <div> <i class="fa fa-toggle-on text-primary" aria-hidden="true"></i></div>
            </span>
            </div>
            }
            deleteNotificationButton(cell, row) {
            return <i class="fa fa-trash text-gray fontsize25" aria-hidden="true" onClick={() => this.deleteData(row, 'Delete')}></i>
            // <button className="btn notificationBtn" onClick={() => this.deleteData(row, 'Delete')}>Delete</button>
            }
            editData(row) {
            this.setState({ edit: true, selectedCandidate: row });
            }
            deleteData(row) {
            let arr = this.state.data;
            arr.splice(arr.indexOf(row), 1);
            this.setState({
            data: [...arr]
            })
            }
            handleCreate(event) {
            this.setState({ create_Msg: true });
            }
          
    componentDidMount = () => {
        var self = this;
        // fetch(Const.URL)
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (json) {
        //         self.setState({ data: json.dashboardDetails.messageTemplates.data });
        //     });

            let config = {
                headers: { 'authorization': localStorage.getItem('tokenId') }
              };
        
                axios.get('api/template',config)
                    .then(function (response) {
                        console.log( response.data.messageTemplates.data);
                        self.setState({ data: response.data.messageTemplates.data });
                    },this)
            
    };
    render() {
        const { create_Msg,edit } = this.state;
        

        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-b-35 margin-t-70">
                </div>
                <button className="btn notificationBtn" onClick={this.handleCreate}>Create +</button>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <BootstrapTable data={this.state.data} headerStyle={{ background: '#3a3a40', color: 'white' }} options={{ noDataText: 'This is custom text for empty data' }} 
                    striped={true} hover={true} search searchPlaceholder="Search" version='4'
                    pagination={true}>
                    <TableHeaderColumn dataField='_id' dataAlign="center" isKey>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='templateName' dataAlign="center">Template Name</TableHeaderColumn>
                    <TableHeaderColumn dataAlign="center" dataFormat={this.toggleOnOffButton}>Channel</TableHeaderColumn>
                    <TableHeaderColumn dataField='creationDate' dataAlign="center">Last updated</TableHeaderColumn>
                    <TableHeaderColumn dataField='edit' dataAlign="center" dataFormat={this.editNotificationButton}>Edit</TableHeaderColumn>
                    <TableHeaderColumn dataField='delete' dataAlign="center" dataFormat={this.deleteNotificationButton}>Delete</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                {create_Msg && <Redirect to={{ pathname: '/message' }} />}
                {edit && <Redirect to={{ 
                    pathname: '/message',
                    state :  this.state.selectedCandidate
                    }} />}
            </div>
        );
    }
}
export default Notification;
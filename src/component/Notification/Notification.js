import React from "react";
import { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Redirect, Route, router } from 'react-router';
import Const from '../../common/Constants';
import '../Notification/Notification.css';


class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listingData: {},
            create_Msg: false,
            data: []
        };
        this.handleCreate = this.handleCreate.bind(this);
        this.editNotificationButton = this.editNotificationButton.bind(this);
        this.deleteNotificationButton = this.deleteNotificationButton.bind(this);
    }
    editNotificationButton(cell, row) {
        return <button className="btn notificationBtn" onClick={() => this.editData(row, 'Edit')}>Edit</button>;
    }
    deleteNotificationButton(cell, row) {
        return <button className="btn notificationBtn" onClick={() => this.deleteData(row, 'Delete')}>Delete</button>
    }
    handleCreate(event) {
        this.setState({ create_Msg: true });
    }
    componentDidMount = () => {
        var self = this;
        fetch(Const.URL)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                self.setState({ data: json });
            });
    };
    render() {
        const { create_msg } = this.state;

        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-b-35 margin-t-70">
                    <button className="btn notificationBtn" onClick={this.handleCreate}>Create +</button>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <BootstrapTable data={this.state.data} options={{ noDataText: 'This is custom text for empty data' }} striped={true} hover={true} search searchPlaceholder="Search" version='4'
                        pagination={true}>
                        <TableHeaderColumn dataField='id' dataAlign="center" isKey>Product ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='templatename' dataAlign="center">Template Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='message' dataAlign="center">Messsage</TableHeaderColumn>
                        <TableHeaderColumn dataField='lastupdated' dataAlign="center">Last updated</TableHeaderColumn>
                        <TableHeaderColumn dataField='edit' dataAlign="center" dataFormat={this.editNotificationButton}>Edit</TableHeaderColumn>
                        <TableHeaderColumn dataField='delete' dataAlign="center" dataFormat={this.deleteNotificationButton}>Delete</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                {create_msg && <Redirect to={{ pathname: '/message' }} />}
            </div>
        );
    }
}
export default Notification;
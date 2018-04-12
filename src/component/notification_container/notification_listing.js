import React from "react";
import { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Redirect, Route, router } from 'react-router'

class Notification_listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listingData: {},
            create_Msg: false,
        };
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate(event) {
        this.setState({ create_Msg: true });
    }

    render() {
        const { create_msg } = this.state;

        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-b-30 margin-t-20">
                    <button className="btn btn-primary" onClick={this.handleCreate}>Create +</button>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    <BootstrapTable data={this.props.data} options={{ noDataText: 'This is custom text for empty data' }} striped={true} hover={true} search searchPlaceholder="Search" version='4' 
                    pagination={true}>
                        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='name'>Template Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='msg'>Messsage</TableHeaderColumn>
                        <TableHeaderColumn dataField='time'>Last updated</TableHeaderColumn>
                        <TableHeaderColumn dataField='edit'>Edit</TableHeaderColumn>
                        <TableHeaderColumn dataField='delete'>Delete</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                {create_msg && <Redirect to={{ pathname: '/message' }} />}
            </div>
        );
    }
}
export default Notification_listing;
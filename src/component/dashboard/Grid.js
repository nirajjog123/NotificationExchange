import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import '../Notification/Notification.css';
import Const from '../../common/Constants';
import { router, Redirect, Route } from 'react-router';
import { Link } from 'react-router-link';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            analytics: false,
            analyticsdata: {}
        }
        this.analyticsInfo = this.analyticsInfo.bind(this);
    }
    analyticsInfo(cell, row) {
        //return <button className="btn notificationBtn" id='analytics' onClick={() => this.openAnalytics(row, 'Analytics')}>View Analytics</button>;
        return <div>
            <div className="row">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <i class="fa fa-line-chart text-green fontsize25" aria-hidden="true" id='analytics' onClick={() => this.openAnalytics(row, 'Analytics')}></i>
                </div>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <i class="fa fa-pencil text-primary fontsize25" aria-hidden="true"></i>
                </div>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <i class="fa fa-trash text-orange fontsize25" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    }
    openAnalytics(rowdata, name) {
        if (name === 'Analytics') {
            this.setState({ analytics: true })
        }
        this.setState({
            analyticsdata: rowdata
        })

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
        const { analytics, analyticsdata } = this.state;
        return (
            <div className="grid">
                <BootstrapTable data={this.state.data} options={{ noDataText: 'This is custom text for empty data' }} striped={true} hover={true}>
                    <TableHeaderColumn dataField='id' dataAlign="center" isKey>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='templatename' dataAlign="center">Template Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='message' dataAlign="center">Messsage</TableHeaderColumn>
                     <TableHeaderColumn dataField='lastupdated' dataAlign="center">Last Sent</TableHeaderColumn>
                    <TableHeaderColumn dataField='lastupdated' dataAlign="center">Last updated</TableHeaderColumn>
                    <TableHeaderColumn dataField='edit' dataAlign="center" dataFormat={this.analyticsInfo}>Analytics</TableHeaderColumn>
                </BootstrapTable>
                {analytics && <Redirect to={{
                    pathname: '/analytics',
                    state: analyticsdata
                }} />}
            </div>
        );
    }
}
export default Grid;
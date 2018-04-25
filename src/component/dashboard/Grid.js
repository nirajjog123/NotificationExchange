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
            analyticsdata :{}
        }
        this.analyticsInfo = this.analyticsInfo.bind(this);
    }
    analyticsInfo(cell, row) {
        return <button className="btn notificationBtn" id='analytics' onClick={() => this.openAnalytics(row, 'Analytics')}>Show Analytics</button>;
    }
    openAnalytics(rowdata, name) {      
        if (name === 'Analytics') {
            this.setState({ analytics: true })
        }
        this.setState({
            analyticsdata:rowdata
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
        const { analytics,analyticsdata } = this.state;
        return (
            <div className="grid">
                <BootstrapTable data={this.state.data} options={{ noDataText: 'This is custom text for empty data' }} striped={true} hover={true}>
                    <TableHeaderColumn dataField='id' dataAlign="center" isKey>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='templatename' dataAlign="center">Template Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='message' dataAlign="center">Messsage</TableHeaderColumn>
                    <TableHeaderColumn dataField='lastupdated' dataAlign="center">Last updated</TableHeaderColumn>
                    <TableHeaderColumn dataField='edit' dataAlign="center" dataFormat={this.analyticsInfo}>Analytics</TableHeaderColumn>
                </BootstrapTable>
                {analytics && <Redirect to={{ pathname: '/analytics',
                 state:analyticsdata }} />}
            </div>
        );
    }
}
export default Grid;
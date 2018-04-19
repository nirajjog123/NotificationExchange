import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import '../Notification/Notification.css';
import Const from '../../common/Constants';

class Grid extends Component {
    constructor(props){
        super(props);
        this.state = {
            data :[]
        }
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
        return(
            <div>
                <BootstrapTable data={this.state.data} options={{ noDataText: 'This is custom text for empty data' }} striped={true} hover={true}>
                    <TableHeaderColumn dataField='id' dataAlign="center" isKey>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='templatename' dataAlign="center">Template Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='message' dataAlign="center">Messsage</TableHeaderColumn>
                    <TableHeaderColumn dataField='lastupdated' dataAlign="center">Last updated</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );        
    }
}
export default Grid;
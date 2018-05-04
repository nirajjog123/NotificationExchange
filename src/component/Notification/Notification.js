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
            edit: false,
            selectedCandidate: {}
        };
        this.handleCreate = this.handleCreate.bind(this);
        this.editNotificationButton = this.editNotificationButton.bind(this);
        this.deleteNotificationButton = this.deleteNotificationButton.bind(this);
        this.editData = this.editData.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.toggleOnOffButton = this.toggleOnOffButton.bind(this);
        this.readableData = this.readableData.bind(this);
    }
    editNotificationButton(cell, row) {
        return <i class="fa fa-pencil text-primary fontsize25" aria-hidden="true" onClick={() => this.editData(row, 'Edittt')}></i>
        // <button className="btn notificationBtn" onClick={() => this.editData(row, 'Edit')}>Edit</button>;
    }
    toggleOnOffButton(cell, row) {
        let rowIcons = row;
        return <div>
            {rowIcons.smsTemplate && <span className="lft col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div><i class="fa fa-envelope-open text-success margin-lr-8" aria-hidden="true"></i></div>
                <div>
                    <div class="switch">
                        <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                        <label for="cmn-toggle-4"></label>
                    </div>
                </div>
            </span>}
            {rowIcons.deviceTemplate && <span className="lft col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div><i class="fa fa-bell text-primary margin-lr-8" aria-hidden="true"></i> </div>
                <div>
                    <div class="switch">
                        <input id="cmn-toggle-2" class="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                        <label for="cmn-toggle-2"></label>
                    </div>
                </div>
            </span>}
            {rowIcons.emailTemplate && <span className="lft col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <div> <i class="fa fa-envelope text-orange margin-lr-8" aria-hidden="true"></i> </div>
                <div>
                    <div class="switch">
                        <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
                        <label for="cmn-toggle-1"></label>
                    </div>
                </div>
            </span>}
        </div>
    }

    readableData(cell, row) {
        let dateObj = new Date(row.creationDate);
        return dateObj.toDateString();

    }
    deleteNotificationButton(cell, row) {
        return <i class="fa fa-trash text-orange fontsize25" aria-hidden="true" onClick={() => this.deleteData(row, 'Delete')}></i>
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

        let config = {
            headers: { 'authorization': localStorage.getItem('tokenId') }
        };

        axios.get('api/template', config)
            .then(function (response) {
                console.log(response.data.messageTemplates.data);
                self.setState({ data: response.data.messageTemplates.data });
            }, this)

    };
    render() {
        const { create_Msg, edit } = this.state;


        return (
            <div className="notify">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 margin-t-70">
                    <button className="btn notificationBtn" onClick={this.handleCreate}>Create +</button>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <BootstrapTable data={this.state.data} headerStyle={{ background: '#436397', color: 'white' }} options={{ noDataText: 'This is custom text for empty data' }}
                        striped={true} hover={true} search searchPlaceholder="Search" version='4'
                        pagination={true}>
                        <TableHeaderColumn dataField='_id' dataAlign="center" isKey>Template ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='templateName' dataAlign="center">Template Name</TableHeaderColumn>
                        <TableHeaderColumn dataAlign="center" dataFormat={this.toggleOnOffButton}>Channel</TableHeaderColumn>
                        <TableHeaderColumn dataField='creationDate' dataAlign="center" dataFormat={this.readableData}>Last updated</TableHeaderColumn>
                        <TableHeaderColumn dataField='edit' dataAlign="center" dataFormat={this.editNotificationButton}>Edit</TableHeaderColumn>
                        <TableHeaderColumn dataField='delete' dataAlign="center" disabled
                            dataFormat={this.deleteNotificationButton}>Delete</TableHeaderColumn>
                    </BootstrapTable>
                </div>
                {create_Msg && <Redirect to={{ pathname: '/message' }} />}
                {edit && <Redirect to={{
                    pathname: '/message',
                    state: this.state.selectedCandidate
                }} />}
            </div>
        );
    }
}
export default Notification;
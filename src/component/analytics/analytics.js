import React, { Component } from 'react';
import './analytics.css';
import Graphcombo from '../graph/graphcombo';
import Graphcombo2 from '../graph/graphcombo2';
import chartStaticData from "../../chartsStaticData/chartData";
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DatetimeRangePicker from '../daterangepicker/datarangepicker';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.css';

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidebox: false,
      startDate: moment(),
      endDate: moment(),
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      }
    };
    console.log("this.state", );
    this.handleApply = this.handleApply.bind(this);
    this.showChartDetails = this.showChartDetails.bind(this);
  }
  showChartDetails() {
    this.setState({ hidebox: !this.state.hidebox });
  }
  handleApply(event, picker) {
    this.setState({
      startDate: picker.startDate,
      endDate: picker.endDate,
    });
  }

  render() {
    const templatename = this.props.location.state ? this.props.location.state : "Stock Market Promotion Activity";
    let start = this.state.startDate.format('DD-MM-YYYY');
    let end = this.state.endDate.format('DD-MM-YYYY');
    let label = start + '  -  ' + end;
    if (start === end) {
      label = start;
    }

    return (
      <div className="col-md-12 col-lg-12 analytics">

        <div className="margin-t-65">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="row date-template">
            {/* <button className="btn notificationBtn"  onClick={this.showChartDetails}>More details about charts</button> */}

            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
              <h3>Template - {templatename}</h3>
            </div>
            <a className="btn notificationBtn page-scroll page-scroll" href="#accordion" onClick={this.showChartDetails}>More details about charts</a>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <div>
                {/* <span>Select Date</span> */}
                <DatetimeRangePicker
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onApply={this.handleApply}
                  opens={"left"}
                >
                  <div className="input-group">
                    <input type="text" className="form-control" value={label} />
                    <span className="input-group-btn">
                      <Button className="default date-range-toggle">
                        <i className="fa fa-calendar" />
                      </Button>
                    </span>
                  </div>
                </DatetimeRangePicker>
              </div>
            </div>
          </div>
            <div className="margin-t-30"><Graphcombo /></div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {this.state.hidebox && <div>

              <div id="accordion">
                <div class="card">
                  <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#collapseOne">
                      SMS</a>
                  </div>
                  <div id="collapseOne" class="collapse show" data-parent="#accordion">
                    <div class="card-body">
                      <div className="margin-t-30"><Graphcombo2 chartStaticData={chartStaticData.smsChartsData} /></div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#collapseTwo">
                      EMAIL</a>
                  </div>
                  <div id="collapseTwo" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                      <div className="margin-t-30"><Graphcombo2 chartStaticData={chartStaticData.emailChartsData} /></div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#collapseThree">
                      PUSH</a>
                  </div>
                  <div id="collapseThree" class="collapse" data-parent="#accordion">
                    <div class="card-body">
                      <div className="margin-t-30"><Graphcombo2 chartStaticData={chartStaticData.pushChartsData} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Analytics;
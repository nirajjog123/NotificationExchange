import React, { Component } from 'react';
import './Dashboard.css';
import Quota from './Quota';
//import 'open-iconic/font/css/open-iconic-foundation.css';
import Graph from '../graph/graph';

class Dashboard extends Component {
  render() {
    return (
      <div className="col-md-12 demo-div heading-section defaultAlign">
        <div className="margin-t-95">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="widget widget-card">
                <div className="widget-body">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                      <span class="widget-icon">
                        <i className="fa fa-fw fa-sign-out"></i>
                        <i class="fa fa-address-book-o"></i>
                      </span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                      <div class="slide">
                        <h6 class="no-margin">VISITS TODAY</h6>
                        <p class="fw-normal">12,324</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <p>text1</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <p>text2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="widget widget-card">
                <div className="widget-body">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                      <span class="widget-icon">
                        <i class="glyphicon glyphicon-user text-info"></i>
                      </span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                      <div class="slide">
                        <h6 class="no-margin">VISITS TODAY</h6>
                        <p class="fw-normal">12,324</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <p>text1</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <p>text2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div className="widget widget-card">
                <div className="widget-body">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                      <span class="widget-icon">
                        <i class="glyphicon glyphicon-user text-info"></i>
                      </span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                      <div class="slide">
                        <h6 class="no-margin">VISITS TODAY</h6>
                        <p class="fw-normal">12,324</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <p>text1</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                      <p>text2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div class="card">
                <div class="card-body">
                  <div class="mr-5">Quota</div>
                </div>
                <Graph />
              </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div class="card">
                <div class="card-body">
                  <div class="mr-5">Quota</div>
                </div>
                <Graph />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Flag from 'react-flagkit';
import Card from '../Card';
import DoghnutChart from '../DoghnutChart/DoghnutChart';
import MixChart from '../MixChart/MixChart'
import './DashboardContent.css'
const DashboardContent = () => {
    return (
        <Grid fluid>
            <Row>
                <Col xs={3}>
                    <Card>
                        <div className="card-row">
                            <div>
                                <small>Revenue</small>
                                <h3 style={{ margin: '0px' }}>150 USD</h3>
                            </div>
                            <FontAwesomeIcon size="2x" color="#FFA534" icon="wallet" />
                        </div>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <div className="card-row">
                            <div>
                                <small>Sales Orders</small>
                                <h3 style={{ margin: '0px' }}>234</h3>
                            </div>
                            <FontAwesomeIcon size="2x" color="#FB404B" icon="shopping-cart" />
                        </div>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <div className="card-row">
                            <div>
                                <small>Units Sold</small>
                                <h3 style={{ margin: '0px' }}>657</h3>
                            </div>
                            <FontAwesomeIcon size="2x" color="lightgreen" icon={['fas', 'gift']} />
                        </div>
                    </Card>
                </Col>
                <Col xs={3}>
                    <Card>
                        <div className="card-row">
                            <div>
                                <small>Low Stock</small>
                                <h3 style={{ margin: '0px' }}>2</h3>
                            </div>
                            <FontAwesomeIcon size="2x" color="#23CCEF" icon="layer-group" />
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Card>
                        <div className="table-container">
                            <h4 style={{ color: '#2f353b', fontSize: '2rem' }}>RECENT ORDERS</h4>
                            <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th>Channel</th>
                                        <th>Order Item</th>
                                        <th>Qty</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mobile</td>
                                        <td>10</td>
                                        <td>Shipped</td>
                                        <td>12-06-2018</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Tablet</td>
                                        <td>34</td>
                                        <td>Shipped</td>
                                        <td>10-09-2017</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Computer</td>
                                        <td>44</td>
                                        <td>Rejected</td>
                                        <td>10-07-2017</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Laptop</td>
                                        <td>445</td>
                                        <td>Rejected</td>
                                        <td>10-07-2017</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Mouse</td>
                                        <td>344</td>
                                        <td>Rejected</td>
                                        <td>10-07-2017</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Computer</td>
                                        <td>56</td>
                                        <td>Rejected</td>
                                        <td>10-07-2017</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card>
                        <div className="table-container">
                            <h4 style={{ color: '#2f353b', fontSize: '2rem' }}>SALES BY LOCATIONS</h4>
                            <Table striped condensed hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Country</th>
                                        <th>No of Products</th>
                                        <th>Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Flag country="IN" /></td>
                                        <td>India</td>
                                        <td>875565</td>
                                        <td>89%</td>
                                    </tr>
                                    <tr>
                                        <td><Flag country="US" /></td>
                                        <td>USA</td>
                                        <td>34564</td>
                                        <td>85%</td>
                                    </tr>
                                    <tr>
                                        <td><Flag country="GE" /></td>
                                        <td>Germany</td>
                                        <td>4654</td>
                                        <td>78%</td>
                                    </tr>
                                    <tr>
                                        <td><Flag country="AU" /></td>
                                        <td>Australia</td>
                                        <td>445</td>
                                        <td>75%</td>
                                    </tr>
                                    <tr>
                                        <td><Flag country="GB" /></td>
                                        <td>United Kingdom</td>
                                        <td>344</td>
                                        <td>70%</td>
                                    </tr>
                                    <tr>
                                        <td><Flag country="RU" /></td>
                                        <td>Russia</td>
                                        <td>56</td>
                                        <td>65%</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Card>
                        <DoghnutChart />
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    <Card>
                        <MixChart />
                    </Card>
                </Col>
            </Row>
            {/* <Row className="footer-container">
                <Col xs={12}>
                    <Footer />
                </Col>
            </Row> */}
        </Grid>
    )
}

export default DashboardContent

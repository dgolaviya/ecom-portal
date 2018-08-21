import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import TopHeader from '../TopHeader/TopHeader';
import Footer from '../Footer';
import DashboardContent from '../DashboardContent';
import './Dashboard.css';
import ContentNavbar from '../ContentNavbar'
const Dashboard = () => {
    return (
        <Grid fluid>
            <Row>
                <Col xs={12}>
                    <TopHeader />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <ContentNavbar />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <DashboardContent />
                </Col>
            </Row>
            <Row className="footer-container">
                <Col xs={12}>
                    <Footer />
                </Col>
            </Row>
        </Grid>
    )
}

export default Dashboard

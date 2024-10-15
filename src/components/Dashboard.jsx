// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import Dashboardmain from './Dashboard-main';
import WorkoutLog from './WorkoutLog';
import Goals from './Goals';
import ProgressChart from './ProgressChart';
import Header from './Header';

function Dashboard() {

return (
    <>
     <Header/>
    <Container className="mt-4">
      <h1 className="text-center">Fitness Dashboard</h1>
      <Row className='mt-4'>
        <Col md={6}>
          <Dashboardmain />
        </Col>
        <Col md={6}>
          <WorkoutLog />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Goals />
        </Col>
        <Col md={6}>
          <ProgressChart />
        </Col>
      </Row>
    </Container>
    </>
  );

}

export default Dashboard;

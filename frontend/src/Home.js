import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap'
import Placeholder from './Placeholder';

class Home extends Component {
    render(){
		return (
			<Container className="Home">
			<Row>
			<Col>
			<h1 style ={{margin: "20px 0"}}> Welcome</h1>
			</Col>
			</Row>
            <Row>
                <Col>
                <Placeholder />
                </Col>
            </Row>
            </Container>
    )
  }


}

export default Home;
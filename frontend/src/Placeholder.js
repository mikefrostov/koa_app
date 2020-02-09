import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap'

class Placeholder extends Component {
    render(){
		return (
			<Container className="Placeholder">
			<Row>
			<Col>
			<h1 style ={{margin: "20px 0"}}> Placeholder </h1>
			</Col>
			</Row>
            </Container>
    )
  }


}

export default Placeholder;
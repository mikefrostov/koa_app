import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap'
import Placeholder from './Placeholder';

class Home extends Component {
    render(){
		return (
    <React.Fragment>
    <button onClick={this.props.getNext} className='nextBtn'
      type='button'>Next</button>
    </React.Fragment>
    )
  }
  
});


//}

export default Home;

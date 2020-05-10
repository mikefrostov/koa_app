import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap'
import Placeholder from './Placeholder';
import { Button } from 'react-bootstrap';


function fetchAPI(listid) {
      return fetch('http://192.168.1.7:3002/lists/' + listid, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(item => {
        console.log('listid = ' + listid)
        console.log('item = ' + item) 
      })
      .catch(err => console.log(err))
  }



class Home extends Component {
  state = { result : null, listid: 'default' };  
  toggleButtonState = () => {
    this.state.listid = Math.random().toString(36).replace(/[^a-z]+/g, '') + Math.random().toString(36).substring(2, 36);
    console.log("generated this.state.listid = " + this.state.listid)
    fetchAPI(this.state.listid).then(result => {
      this.setState({ result });
    });
  };
//   render() {
//   return ( <div> <Button className="btn"  onClick={()=> { this.toggleButtonState }}>Click Me!</Button> <h2>{ this.state.listid  }</h2> </div> );
//   }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.toggleButtonState}> Create list </button>
        <div>{this.state.result}</div>
      </div>
    );
  }



  //  render(){
//		return (
  //  <React.Fragment>
  //  <button onClick={this.props.getNext} className='nextBtn'
  //    type='button'>Next</button>
  //  </React.Fragment>
  //  )
//  }
  
}


//}

export default Home;

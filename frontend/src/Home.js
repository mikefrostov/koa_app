import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap'
import Placeholder from './Placeholder';
import { Button } from 'react-bootstrap';
// Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);


//function fetch() {
//  return new Promise(resolve => setTimeout(() => resolve(42), 1000));
//}

//submitFormAdd = e => {
/*    fetch('http://192.168.1.7:3002/posts/' + this.state.listid, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        post: this.state.post
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
         this.props.addItemToState(item[0])
         this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }*/


function fetchAPI(param) {
  // param is a highlighted word from the user before it clicked the button
//  return fetch("https://api.com/?param=" + param);
        var listid = "default"
	listid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	console.log("generated listid = " + listid) 
      return fetch('http://192.168.1.7:3002/lists/' + listid, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }//,
      //body: JSON.stringify({
      //  post: this.state.post
      //})
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
         this.props.addItemToState(item[0])
         this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }



class Home extends Component {
    state = { result : null };
    
  toggleButtonState = () => {
    let selectedWord = window.getSelection().toString();
    fetchAPI(selectedWord).then(result => {
      this.setState({ result });
    });
  };

  render() {
    return (
      <div>
        <button variant="outline-dark" onClick={this.toggleButtonState}> Click me </button>
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

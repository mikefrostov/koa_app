import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap'
import Placeholder from './Placeholder';
import { Button } from 'react-bootstrap';


function fetchAPI(listid) {
      return fetch('http://192.168.1.7:4002/lists/' + listid, {
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
  state = { result : null, listid: '' };  
  toggleButtonState = () => { 
    this.setState({ listid: Math.random().toString(36).replace(/[^a-z]+/g, '') + Math.random().toString(36).substring(2, 36) }, () =>
    fetchAPI(this.state.listid));
  };
//   render() {
//   return ( <div> <Button className="btn"  onClick={()=> { this.toggleButtonState }}>Click Me!</Button> <h2>{ this.state.listid  }</h2> </div> );
//   }

  render() {
    return (
      /*<div class="cover-container d-flex w-50 h-50 p-3 mx-auto flex-column">
        <header class="masthead mb-auto">
          <div class="inner">
	    <h1 class="cover-heading">Simple task lists</h1>
          </div>
        </header>

        <main role="main" class="inner cover">
	  <h3 class="masthead-brand"> 1. Press button to generate a list ID</h3>
	  <h3 class="masthead-brand"> 2. Put ID after slash '/' and use the list </h3>
	  <h3 class="masthead-brand"> 3. Save the ID to access the list later. </h3>
          <p class="lead"> Task lists are preserved, so you can access it later using any device that has an internet browser.</p>
          <p class="lead">
            <div>
               </div>
	  </p>
          </main>
      </div> */

<body class="text-center">
<div class="cover-container d-flex w-50 h-50 p-3 mx-auto flex-column">
	    <h1 class="cover-heading">Simple task lists</h1>
          </div>
<div class="container-fluid">
    <div class="row"> 
        <div class="col-lg-12 col-md-12 col-sm-12">
            <p class="page-top1 col-md-12 col-sm-6">1. Press button to generate a list ID</p>
            <p class="page-top2 col-md-12 col-sm-3">2. Put ID after slash</p>
            <p class="page-top3 col-md-12 col-sm-3">3. Save the ID to access the list later</p>
        </div>
    </div>
</div>
    
<button class="btn btn-lg btn-secondary" onClick={this.toggleButtonState}>Generate</button>

<div style={{padding: "15px", fontSize: "25px",color: "green"}}><a href={'http://192.168.1.7:4001/' + this.state.listid}> {this.state.listid} </a> </div>

</body>
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

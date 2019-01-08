import React, { Component } from 'react';

import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>{this.props.age}</span>
          <span><button onClick={this.props.onAgeUp}>AGE UP </button>
          <button onClick={this.props.onAgeDown}>AGE DOWN </button></span>

        </header>
      </div>
    );
  }
}
const mapStateToProps= state =>{
  return  { age:state.age };
};

const  mapDispatchToProps = dispatch =>{
  return {
    onAgeUp:() =>dispatch({type:"AGE_UP",value:1}),
    onAgeDown:() =>dispatch({type:"AGE_DOWN",value:1})
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

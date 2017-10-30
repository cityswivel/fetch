import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {itemsFetchData} from '../actions';
class App extends Component {
componentDidMount() {
	this.props.onTodoClick('https://api.cityswivel.com/list_tourpoints');
	this.props.onTodoClick('https://api.cityswivel.com/list_events');

}
componentDidUpdate() {
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
	<span onClick={() => {this.props.onTodoClick('https://api.cityswivel.com/list_events')}}>click</span>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(itemsFetchData(id))
    }
  }
}
const mapStatetoProps = state => {
        return {
        my_store : state
        }
}
export default connect(mapStatetoProps,mapDispatchToProps)(App);

import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import ToDoList from '../containers/ToDoList';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm />
        <ToDoList todos={this.props.todos}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);

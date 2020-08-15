import React from 'react';
import { connect } from 'react-redux';
import { showAll, showActive, showCompleted } from '../actions'
import Todo from './Todo'

const ToDoList = ({ todos, showAll, showActive, showCompleted }) => {
  const displayTodos = todos.map(todo => {
    return (
      <Todo
        {...todo}
        key={todo.id}
      />
    )
  })

  return (
    <main>
      <button onClick={showAll}>Show All</button>
      <button onClick={showActive}>Show Active</button>
      <button onClick={showCompleted}>Show Completed</button>
      <ul>
        {displayTodos}
      </ul>
    </main>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  showAll: () => dispatch( showAll() ),
  showActive: () => dispatch( showActive() ),
  showCompleted: () => dispatch( showCompleted() )
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
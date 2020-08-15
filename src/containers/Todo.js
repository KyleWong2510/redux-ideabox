import React from 'react';
import { completeToDo } from '../actions'
import { connect } from 'react-redux'

const ToDo = ({ id, todo, completed, completeToDo }) => {
  return (
    <li
      className={completed ? 'completed' : 'not-completed'}
      onClick={() => completeToDo(id)}
    >
      {todo}
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  completeToDo: id => dispatch( completeToDo(id) )
})

export default connect(null, mapDispatchToProps)(ToDo);
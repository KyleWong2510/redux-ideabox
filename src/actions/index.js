export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
})

export const completeToDo = id => ({
  type: 'COMPLETE_TODO',
  id
})
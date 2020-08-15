export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), todo: action.todo, completed: false }];
    case 'COMPLETE_TODO':
      return state.map(todo => {
        if (action.id === todo.id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    case 'SHOW_ALL': 
      return state
    case 'SHOW_ACTIVE':
      return state.filter(todo => {
        if (!todo.completed) {
          return todo
        }
      })
    case 'SHOW_COMPLETED':
      return state.filter(todo => {
        if (todo.completed) {
          return todo
        }
      })
    default: 
      return state
  }
}
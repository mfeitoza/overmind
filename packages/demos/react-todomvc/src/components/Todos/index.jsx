import * as React from 'react'
import { connect } from '../../app'
import { List } from './elements'
import Todo from '../Todo'

const Todos = ({ app }) => (
  <List>
    {app.state.todos.map(
      (todo) =>
        console.log('todo ID', todo.id) || <Todo key={todo.id} todo={todo} />
    )}
  </List>
)

export default connect(Todos)

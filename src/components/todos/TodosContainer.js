import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((t, id) => <Todo key={id} text={t} />)

  render() {
    return (
      <ul>{this.renderTodos()}</ul>
    );
  }

}

export default connect(state => ({todos: state.todos}))(TodosContainer);

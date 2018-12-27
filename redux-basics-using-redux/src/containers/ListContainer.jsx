import React from 'react';
import {connect} from 'react-redux';    // connect генерирует контейнеры
import List from '../components/List';

import {deleteTodo, editTodo, toggleTodo} from "../actions";

// todos={this.context.getState()}
// onDelete={id => this.store.dispatch(deleteTodo(id))}
// onToggle={id => this.store.dispatch(toggleTodo(id))}
// onEdit={(id, title) => this.store.dispatch(editTodo(id, title))}

function mapStateToProps(state) {   //  сопоставить состояния со свойствами
  return {
    todos: state
  };
}

function mapDispatchToProps(dispatch) {// сопоставление событий компонента с изменияющимися состояниями
  return {
    onDelete: id => dispatch(deleteTodo(id)),
    onToggle: id => dispatch(toggleTodo(id)),
    onEdit: (id, title) => dispatch(editTodo(id, title))
  }
}

const createContainerFor = connect(mapStateToProps, mapDispatchToProps);

const ListContainer = createContainerFor(List);


export default ListContainer;
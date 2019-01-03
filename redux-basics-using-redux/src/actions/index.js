export const ADD_TODO = 'ADD_TODO';   // константы будут использоваться функцией reducer() для определения типа действия
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'ADD_TODO';
export const EDIT_TODO = 'ADD_TODO';

let nextId = 5;

export function addTodo(title) {
  return {
    type: ADD_TODO,
    id: nextId++,
    title
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function editTodo(id, title) {   // принимает id и новое значение заголовка
  return {
    type: EDIT_TODO,
    id,
    title
  };
}
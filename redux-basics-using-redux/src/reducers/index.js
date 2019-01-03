import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "../actions"; //  импортируем типы действий

function todoReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.nextId(),
        title: action.title,
        completed: false
      };

    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    case EDIT_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {        // если задачи равны
        title: action.title
      });
  }
}

export default function reducer(state = [], action) { // принимает состояние и действие, произошедшее в приложении
  switch (action.type) {
    case ADD_TODO:
      return [...state, todoReducer(undefined, action)];

    case DELETE_TODO:
      const index = state.findIndex(todo => todo.id === action.id);   // находим индекс задачи, который нам нужно удалить

      return [     // создаем новый массив, который будет состоять из элементов, которые будут идти до удаляемых элементов и после
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];

    case TOGGLE_TODO:
      return state.map(todo => todoReducer(todo, action));      // перебираем массив. сравниваем id текущей задачи с переданным id. если они не равны, то просто возвращаем объект задачи

    case EDIT_TODO:
      return state.map(todo => todoReducer(todo, action));        // перебираем массив. сравниваем id текущей задачи с переданным id. если они не равны, то просто возвращаем объект задачи

    default:
      return state;
  }
}
export function createStore(reducer, initialState) {   // reducer - функция, изменяющая состояние. initialState - начальное состояние
  let state = initialState;   // переменная для хранения состояния
  let callbacks = []; // переменная для хранения функции обратного вызова

  const getState = () => state;   // функция, которая вовращает текущее состояние

  const dispatch = action => {
    state = reducer(state, action);   //  получим новое состояние
    callbacks.forEach(callback => callback()); // перебираем массив, сообщаем каждой из функций
  };

  const subscribe = callback => {
    callbacks.push(callback);
    return () => callbacks.filter(cb => cb !== callback);
  };

  dispatch({}); // отправим пустой объект как начальное состояние

  return { getState, dispatch, subscribe }; // благодаря замыканию имеют доступ к state и callbacks
}
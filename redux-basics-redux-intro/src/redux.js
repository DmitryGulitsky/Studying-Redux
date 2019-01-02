export function createStore(reducer, initialState) {
  // функция для создания хранилища
  // reducer - функция, изменяющая состояние.
  // initialState - начальное состояние
  let state = initialState;   // переменная для хранения состояния
  let callbacks = []; // переменная для хранения функции обратного вызова

  const getState = () => state;   // функция, которая вовращает текущее состояние

  const dispatch = action => {  // функция, которая изменяет состояние. принимает аргумент - действие
    state = reducer(state, action);   //  получим новое состояние, вызывая функция reducer
    callbacks.forEach(callback => callback()); // перебираем массив, сообщаем каждой из функций
  };

  const subscribe = callback => {   //  подписка на состояние
    callbacks.push(callback);     // в массив добавим переданную функцию
    return () => callbacks.filter(cb => cb !== callback);    // filter вернет новый массив без функции, передоваемов в метод subscribe. Для этого проверяем не является ли очередная функция массива переданной в метод subscribe
  };

  dispatch({}); // отправим пустой объект как начальное состояние

  return { getState, dispatch, subscribe }; // благодаря замыканию имеют доступ к state и callbacks
}
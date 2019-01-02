export default class Store {
  constructor(updateState, state) {   // первый аргумент - функция
    this._updateState = updateState;
    this._state = state;
    this._callbacks = [];   //    хранилище списка функций
  }

  get state() {       //  возвращаем текущее состояние
    return this._state;
  }

  update(action) {        // функция, которая имеет возможность изменять состояния. action - объект действия. Просто уведомляем о событии хранилище, ничего не получая в ответ
    this._state = this._updateState(this._state, action);       // this._state - текущее состояние, action - объект действия
    this._callbacks.forEach(callback => callback());      // перебрать массив методов и вызвать каждую функцию
  }

  subscribe(callback) {   // метод с помощью которого можно подписаться на обновления состояний хранилища
    this._callbacks.push(callback);     // в массив добавим переданную функцию
    return () => this._callbacks = this._callbacks.filter(cb => cb !== callback);    // filter вернет новый массив без функции, передоваемов в метод subscribe. Для этого проверяем не является ли очередная функция массива переданной в метод subscribe
  }
}
import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store/store';
import TodoApp from './src/screen/TodoApp';



export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );
  }
}

import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react';
import App from './App';

const store = createStore(() => {
  return 'state';
});

console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
// wyświetla stan magazyni,
// w konsoli zobaczymy 'state'
// czyli to, co zwraca funkcja
// przekazana przez parametr
// root

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import PokemonsView from './components/containers/PokemonsView';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PokemonsView />
    </Provider>
  );
}

export default App;

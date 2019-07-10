import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import PokemonsView from './components/containers/PokemonsView';
import PokemonDetail from './components/pokemon-detail/PokemonDetail';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PokemonsView />
      <PokemonDetail />
    </Provider>
  );
}

export default App;

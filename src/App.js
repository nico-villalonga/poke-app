import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
// import PokemonsView from './components/containers/PokemonsView';
import TrainersView from './components/containers/TrainersView';
import PokemonDetail from './components/pokemon-detail/PokemonDetail';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      {/* <PokemonsView /> */}
      <TrainersView />
      <PokemonDetail />
    </Provider>
  );
}

export default App;

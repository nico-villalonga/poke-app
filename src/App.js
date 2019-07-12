import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import PokemonsView from './components/containers/PokemonsView';
import TrainersView from './components/containers/TrainersView';
import PokemonDetail from './components/pokemon-detail/PokemonDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={PokemonsView} />
      <Route path='/trainers' component={TrainersView} />
      <PokemonDetail />
    </Router>
  );
}

export default App;

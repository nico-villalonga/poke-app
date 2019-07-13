import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import PokemonsView from './components/containers/PokemonsView';
import TrainersView from './components/containers/TrainersView';
import PokemonDetail from './components/detail-view/PokemonDetail';
import TrainerDetail from './components/detail-view/TrainerDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={PokemonsView} />
      <Route path='/trainers' component={TrainersView} />
      <PokemonDetail />
      <TrainerDetail />
    </Router>
  );
}

export default App;

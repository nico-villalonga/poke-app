import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import PokemonsView from './components/containers/PokemonsView';
import TrainersView from './components/containers/TrainersView';
import GymsView from './components/containers/GymsView';
import { fetchBadges } from './redux/actions/badge';
import './App.css';

const mapDispatchToProps = dispatch => ({
	getBadges: query => dispatch(fetchBadges()),
});

const App = props => {
  props.getBadges();

  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={PokemonsView} />
      <Route path='/trainers' component={TrainersView} />
      <Route path='/gyms' component={GymsView} />
    </Router>
  );
}

export default connect(null, mapDispatchToProps)(App);

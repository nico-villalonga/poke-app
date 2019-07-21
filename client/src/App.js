import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import PokemonsContainer from './components/containers/PokemonsContainer';
import TrainersContainer from './components/containers/TrainersContainer';
import GymsContainer from './components/containers/GymsContainer';
import Notification from './components/notification/Notification';
import { fetchBadges } from './redux/actions/badge';

const mapDispatchToProps = dispatch => ({
	getBadges: query => dispatch(fetchBadges()),
});

const App = props => {
  props.getBadges();

  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={PokemonsContainer} />
      <Route path='/trainers' component={TrainersContainer} />
      <Route path='/gyms' component={GymsContainer} />
      <Notification />
    </Router>
  );
}

export default connect(null, mapDispatchToProps)(App);

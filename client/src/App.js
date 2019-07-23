import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBadges } from './redux/actions/badge';
import { showOffline } from './redux/actions/ui';
import Navbar from './components/navbar/Navbar';
import PokemonsContainer from './containers/PokemonsContainer';
import TrainersContainer from './containers/TrainersContainer';
import GymsContainer from './containers/GymsContainer';
import Notification from './components/notification/Notification';

const mapDispatchToProps = dispatch => ({
  getBadges: query => dispatch(fetchBadges()),
  notifyOffline: () => dispatch(showOffline()),
});

class App extends Component {
  componentDidMount() {
    const { getBadges, notifyOffline } = this.props;

    getBadges();
    window.addEventListener('offline', notifyOffline);
  }

  componentWillUnmount() {
    const { notifyOffline } = this.props;
    window.removeEventListener('offline', notifyOffline);
  }

  render() {
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
}

export default connect(null, mapDispatchToProps)(App);

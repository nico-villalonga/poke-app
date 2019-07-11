import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrainer } from '../../redux/actions/trainer';
import { getTrainersArray } from '../../redux/reducers/trainer';

const mapStateToProps = state => ({
  trainers: getTrainersArray(state),
});

const mapDispatchToProps = dispatch => ({
  getTrainer: query => dispatch(fetchTrainer({ query })),
});

class TrainersView extends Component {
	componentDidMount() {
		const { getTrainer } = this.props;

		getTrainer('1');
		getTrainer('2');
	}

	render() {
    const { trainers } = this.props;
    console.log('*****', trainers);

		return (
      <div>
        <h1>Trainers</h1>
        <p>look in console.log</p>
      </div>
    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainersView);

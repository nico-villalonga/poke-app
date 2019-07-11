import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrainer } from '../../redux/actions/trainer';
import { getTrainersArray } from '../../redux/reducers/trainer';
import List from '../list/List';
import Trainer from '../trainer/Trainer';

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
		getTrainer('3');
	}

	render() {
    const { trainers } = this.props;
    console.log('*****', trainers);

		return (
			<List
				collection={ trainers }
				Entity={ Trainer }
				// showDetail={ this.showDetail }
			/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainersView);

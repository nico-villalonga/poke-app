import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import { fetchTrainer, selectTrainer } from '../../redux/actions/trainer';
import { getTrainersArray } from '../../redux/reducers/trainer';
import List from '../list/List';
import Trainer from '../trainer/Trainer';

const mapStateToProps = state => ({
  trainers: getTrainersArray(state),
});

const mapDispatchToProps = dispatch => ({
	getTrainer: query => dispatch(fetchTrainer({ query })),
	showDetail: id => dispatch(selectTrainer({ id })),
});

class TrainersView extends Component {
	componentDidMount() {
		const { trainers, getTrainer } = this.props;

		if (isEmpty(trainers)) {
			getTrainer('1');
			getTrainer('2');
			getTrainer('3');
		}
	}

	showDetail = id => () => {
		const { showDetail } = this.props;
		showDetail(id);
	}

	render() {
    const { trainers } = this.props;

		return (
			<List
				collection={ trainers }
				entity={ Trainer }
				showDetail={ this.showDetail }
			/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainersView);

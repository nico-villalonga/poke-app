import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import { fetchTrainer, selectTrainer } from '../../redux/actions/trainer';
import { getTrainersArray, getSelectedTrainerId } from '../../redux/reducers/trainer';
import Modal from '../modal/Modal';
import List from '../list/List';
import Trainer from '../trainer/Trainer';
import TrainerDetail from '../detail-view/TrainerDetail';

const mapStateToProps = state => ({
	selectedId: getSelectedTrainerId(state),
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
    const { selectedId, trainers } = this.props;

		return (
			<Fragment>
				<List
					collection={ trainers }
					entity={ Trainer }
					showDetail={ this.showDetail }
				/>

				{
					selectedId
					&& (
						<Modal>
							<TrainerDetail />
						</Modal>
					)
				}
			</Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainersView);

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import { fetchTrainer, selectTrainer } from '../../redux/actions/trainer';
import { showModal } from '../../redux/actions/ui';
import { getTrainersArray } from '../../redux/reducers/trainer';
import { getModalVisibility } from '../../redux/reducers/ui';
import Modal from '../modal/Modal';
import List from '../list/List';
import Trainer from '../trainer/Trainer';
import TrainerDetail from '../detail-view/TrainerDetail';

const mapStateToProps = state => ({
	trainers: getTrainersArray(state),
	modalVisible: getModalVisibility(state),
});

const mapDispatchToProps = dispatch => ({
	getTrainer: query => dispatch(fetchTrainer({ query })),
	setTrainer: id => dispatch(selectTrainer({ id })),
	modalShow: () => dispatch(showModal()),
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
		const { setTrainer, modalShow } = this.props;
		setTrainer(id);
		modalShow();
	}

	render() {
		const { trainers, modalVisible } = this.props;

		return (
			<Fragment>
				<List
					collection={ trainers }
					entity={ Trainer }
					showDetail={ this.showDetail }
				/>

				{
					modalVisible
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

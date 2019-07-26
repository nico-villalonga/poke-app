import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { newArrayIds } from '../utils/array';
import {
	cacheOrFetchTrainers, fetchTrainer, selectTrainer, unselectTrainer,
} from '../redux/actions/trainer';
import { showModal } from '../redux/actions/ui';
import { getTrainersArray } from '../redux/selectors/trainer';
import { getModalVisibility } from '../redux/selectors/ui';
import Modal from '../components/modal/Modal';
import List from '../components/list/List';
import TrainerDetail from '../components/detail-view/TrainerDetail';

const mapStateToProps = state => ({
	trainers: getTrainersArray(state),
	modalVisible: getModalVisibility(state),
});

const mapDispatchToProps = dispatch => ({
	getTrainer: query => dispatch(fetchTrainer({ query })),
	getInitialTrainers: ids => dispatch(cacheOrFetchTrainers({ ids })),
	setTrainer: id => dispatch(selectTrainer({ id })),
	modalShow: () => dispatch(showModal()),
	closeModal: () => dispatch(unselectTrainer()),
});

class TrainersView extends Component {
	componentDidMount() {
		const { getInitialTrainers } = this.props;
		const ids = newArrayIds(6);

		getInitialTrainers(ids);
	}

	showDetail = id => () => {
		const { setTrainer, modalShow } = this.props;

		setTrainer(id);
		modalShow();
	}

	render() {
		const { trainers, closeModal } = this.props;

		return (
			<Fragment>
				<List
					className="trainer"
					collection={ trainers }
					showDetail={ this.showDetail }
				/>

				<Modal closeModal={ closeModal }>
					<TrainerDetail />
				</Modal>
			</Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainersView);

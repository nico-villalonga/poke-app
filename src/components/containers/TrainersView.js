import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { newArrayIds } from '../../utils/array';
import { fetchTrainer, selectTrainer, checkOrFetchTrainers } from '../../redux/actions/trainer';
import { showModal } from '../../redux/actions/ui';
import { getTrainersArray } from '../../redux/reducers/trainer';
import { getModalVisibility } from '../../redux/reducers/ui';
import Modal from '../modal/Modal';
import List from '../list/List';
import TrainerDetail from '../detail-view/TrainerDetail';

const mapStateToProps = state => ({
	trainers: getTrainersArray(state),
	modalVisible: getModalVisibility(state),
});

const mapDispatchToProps = dispatch => ({
	getTrainer: query => dispatch(fetchTrainer({ query })),
	getInitialTrainers: ids => dispatch(checkOrFetchTrainers({ ids })),
	setTrainer: id => dispatch(selectTrainer({ id })),
	modalShow: () => dispatch(showModal()),
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
		const { trainers, modalVisible } = this.props;

		return (
			<Fragment>
				<List
					className="trainer"
					collection={ trainers }
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

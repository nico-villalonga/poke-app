import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import { fetchGyms, selectGym } from '../../redux/actions/gym';
import { showModal } from '../../redux/actions/ui';
import { getGymsArray } from '../../redux/reducers/gym';
import { getModalVisibility } from '../../redux/reducers/ui';
import Modal from '../modal/Modal';
import List from '../list/List';
import Gym from '../gym/Gym';
import GymDetail from '../detail-view/GymDetail';

const mapStateToProps = state => ({
	gyms: getGymsArray(state),
	modalVisible: getModalVisibility(state),
});

const mapDispatchToProps = dispatch => ({
	getGyms: query => dispatch(fetchGyms()),
	setGym: id => dispatch(selectGym({ id })),
	modalShow: () => dispatch(showModal()),
});

class GymsView extends Component {
	componentDidMount() {
		const { gyms, getGyms } = this.props;

		if (isEmpty(gyms)) {
			getGyms();
		}
	}

	showDetail = id => () => {
		const { setGym, modalShow } = this.props;
		setGym(id);
		modalShow();
	}

	render() {
		const { gyms, modalVisible } = this.props;

		return (
			<Fragment>
				<List
					collection={ gyms }
					entity={ Gym }
					showDetail={ this.showDetail }
				/>

				{
					modalVisible
					&& (
						<Modal>
							<GymDetail />
						</Modal>
					)
				}
			</Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GymsView);

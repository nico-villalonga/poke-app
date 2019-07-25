import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import { fetchGyms, selectGym, unselectGym } from '../redux/actions/gym';
import { showModal } from '../redux/actions/ui';
import { getGymsArray } from '../redux/selectors/gym';
import Modal from '../components/modal/Modal';
import List from '../components/list/List';
import GymDetail from '../components/detail-view/GymDetail';

const mapStateToProps = state => ({
	gyms: getGymsArray(state),
});

const mapDispatchToProps = dispatch => ({
	getGyms: query => dispatch(fetchGyms()),
	setGym: id => dispatch(selectGym({ id })),
	modalShow: () => dispatch(showModal()),
	closeModal: () => dispatch(unselectGym()),
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
		const { gyms, closeModal } = this.props;

		return (
			<Fragment>
				<List
					className="gym"
					collection={ gyms }
					showDetail={ this.showDetail }
				/>

				<Modal closeModal={ closeModal }>
					<GymDetail />
				</Modal>
			</Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GymsView);

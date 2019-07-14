import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import { fetchGym, selectGym } from '../../redux/actions/gym';
import { showModal } from '../../redux/actions/ui';
import { getGymsArray } from '../../redux/reducers/gym';
import { getModalVisibility } from '../../redux/reducers/ui';
import List from '../list/List';
import Gym from '../gym/Gym';

const mapStateToProps = state => ({
	gyms: getGymsArray(state),
	modalVisible: getModalVisibility(state),
});

const mapDispatchToProps = dispatch => ({
	getGym: query => dispatch(fetchGym({ query })),
	setGym: id => dispatch(selectGym({ id })),
	modalShow: () => dispatch(showModal()),
});

class GymsView extends Component {
	componentDidMount() {
		const { gyms, getGym } = this.props;

		if (isEmpty(gyms)) {
			getGym('1');
			getGym('2');
			getGym('3');
		}
	}

	showDetail = id => () => {
		const { setGym, modalShow } = this.props;
		setGym(id);
		modalShow();
	}

	render() {
		const { gyms } = this.props;

		return (
			<Fragment>
				<List
					collection={ gyms }
					entity={ Gym }
					showDetail={ this.showDetail }
				/>
			</Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GymsView);

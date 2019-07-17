import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import { fetchPokemon, selectPokemon } from '../../redux/actions/pokemon';
import { showModal } from '../../redux/actions/ui';
import { getPokemonsArray } from '../../redux/selectors/pokemon';
import { getModalVisibility } from '../../redux/selectors/ui';
import Modal from '../modal/Modal';
import List from '../list/List';
import PokemonDetail from '../detail-view/PokemonDetail';

const mapStateToProps = state => ({
	pokemons: getPokemonsArray(state),
	modalVisible: getModalVisibility(state),
});

const mapDispatchToProps = dispatch => ({
	getPokemon: query => dispatch(fetchPokemon({ query })),
	setPokemon: id => dispatch(selectPokemon({ id })),
	modalShow: () => dispatch(showModal()),
});

class PokemonsView extends Component {
	componentDidMount() {
		const { pokemons, getPokemon } = this.props;

		if (isEmpty(pokemons)) {
			getPokemon(1);
			getPokemon(4);
		}
	}

	showDetail = id => () => {
		const { setPokemon, modalShow } = this.props;
		setPokemon(id);
		modalShow();
	}

	render() {
		const { pokemons, modalVisible } = this.props;

		return (
			<Fragment>
				<List
					collection={ pokemons }
					showDetail={ this.showDetail }
				/>

				{
					modalVisible
					&& (
						<Modal>
							<PokemonDetail />
						</Modal>
					)
				}
			</Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsView);

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { newArrayIds } from '../utils/array';
import { cacheOrFetchPokemons, selectPokemon, unselectPokemon } from '../redux/actions/pokemon';
import { showModal } from '../redux/actions/ui';
import { getPokemonsArray } from '../redux/selectors/pokemon';
import Modal from '../components/modal/Modal';
import List from '../components/list/List';
import PokemonDetail from '../components/detail-view/PokemonDetail';

const mapStateToProps = state => ({
	pokemons: getPokemonsArray(state),
});

const mapDispatchToProps = dispatch => ({
	getInitialPokemons: ids => dispatch(cacheOrFetchPokemons({ ids })),
	setPokemon: id => dispatch(selectPokemon({ id })),
	modalShow: () => dispatch(showModal()),
	closeModal: () => dispatch(unselectPokemon()),
});

class PokemonsView extends Component {
	componentDidMount() {
		const { getInitialPokemons } = this.props;
		const ids = newArrayIds(9);

		getInitialPokemons(ids);
	}

	showDetail = id => () => {
		const { setPokemon, modalShow } = this.props;

		setPokemon(id);
		modalShow();
	}

	render() {
		const { pokemons, closeModal } = this.props;

		return (
			<Fragment>
				<List
					className="pokemon"
					collection={ pokemons }
					showDetail={ this.showDetail }
				/>

				<Modal closeModal={ closeModal }>
					<PokemonDetail />
				</Modal>
			</Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsView);

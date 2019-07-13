import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import { fetchPokemon, selectPokemon } from '../../redux/actions/pokemon';
import { getPokemonsArray, getSelectedPokemonId } from '../../redux/reducers/pokemon';
import Modal from '../modal/Modal';
import List from '../list/List';
import Pokemon from '../pokemon/Pokemon';
import PokemonDetail from '../detail-view/PokemonDetail';

const mapStateToProps = state => ({
	selectedId: getSelectedPokemonId(state),
	pokemons: getPokemonsArray(state),
});

const mapDispatchToProps = dispatch => ({
	getPokemon: query => dispatch(fetchPokemon({ query })),
	showDetail: id => dispatch(selectPokemon({ id })),
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
		const { showDetail } = this.props;
		showDetail(id);
	}

	render() {
		const { selectedId, pokemons } = this.props;

		return (
			<Fragment>
				<List
					collection={ pokemons }
					entity={ Pokemon }
					showDetail={ this.showDetail }
				/>

				{
					selectedId
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

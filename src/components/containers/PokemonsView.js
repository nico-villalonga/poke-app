import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import { fetchPokemon, selectPokemon } from '../../redux/actions/pokemon';
import { getPokemonsArray } from '../../redux/reducers/pokemon';
import List from '../list/List';
import Pokemon from '../pokemon/Pokemon';

const mapStateToProps = state => ({
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
		const { pokemons } = this.props;

		return (
			<List
				collection={ pokemons }
				entity={ Pokemon }
				showDetail={ this.showDetail }
			/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsView);

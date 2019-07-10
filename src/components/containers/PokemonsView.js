import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../../redux/actions/pokemon';
import { getPokemonsArray } from '../../redux/reducers/pokemon';
import PokemonList from '../pokemon-list/PokemonList';

const mapStateToProps = state => ({
	pokemons: getPokemonsArray(state),
});

const mapDispatchToProps = dispatch => ({
	getPokemon: query => dispatch(fetchPokemon({ query })),
});

class PokemonsView extends Component {
	componentDidMount() {
		const { getPokemon } = this.props;

		getPokemon('pokemon/1');
	}

	render() {
    const { pokemons } = this.props;

		return <PokemonList collection={ pokemons } />;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsView);

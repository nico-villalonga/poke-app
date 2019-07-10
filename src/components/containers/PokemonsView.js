import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../../redux/actions/pokemon';

const mapStateToProps = ({ pokemons }) => ({ pokemons });

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
    console.log('*****', pokemons);

		return (
      <p>Look in console.log</p>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsView);

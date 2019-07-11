import React, { Component } from 'react';
import { connect } from 'react-redux';
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
		const { getPokemon } = this.props;

		getPokemon('pokemon/1');
		getPokemon('pokemon/4');
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
				Entity={ Pokemon }
				showDetail={ this.showDetail }
			/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsView);

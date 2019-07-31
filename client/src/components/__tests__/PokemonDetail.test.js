import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { assocPath, dissocPath, path } from 'ramda';
import reducer from '../../redux/reducers';
import PokemonDetail from '../detail-view/PokemonDetail';

function renderWithRedux(
  component,
  {
    initialState = {},
    store = createStore(reducer, initialState)
  } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

const initialState = {
  pokemons: {
    selectedPokemonId: 1,
    collection: {
      1: {
        id: 1,
        name: 'bulbasaur',
        sprites: { front_default: '/images/pokemons/bulbasaur.png' },
        height: 7,
        weight: 69,
        types: [
          { type: { name: 'poison' } },
          { type: { name: 'grass' } },
        ],
        abilities: [
          { ability: { name: 'chlorophyll' } },
          { ability: { name: 'overgrow' } },
        ],
      }
    },
  },
  trainers: {},
  gyms: {},
  badges: {},
  ui: {},
  notifications: {},
};

const selectedPokemon = path(['pokemons', 'collection', 1], initialState);


describe('test PokemonDetail component', () => {
  it('should render component', () => {
    const {
      queryByTestId,
      queryByText,
    } = renderWithRedux(<PokemonDetail />, { initialState });
    const matchText = text => queryByText((_, node) => node.textContent === text);

    expect(queryByTestId('pokemon-detail')).toBeInTheDocument();
    // Image container
    expect(queryByTestId(`${selectedPokemon.name}-img`)).toBeInTheDocument();
    expect(queryByText(selectedPokemon.name)).toBeInTheDocument();
    // // Info container
    expect(matchText(`Height: ${selectedPokemon.height}`)).toBeInTheDocument();
    expect(matchText(`Weight: ${selectedPokemon.weight}`)).toBeInTheDocument();
    expect(queryByTestId('pokemon-types')).toBeInTheDocument();
    selectedPokemon.types.forEach(t => expect(queryByText(t.type.name)).toBeInTheDocument());
    expect(queryByTestId('pokemon-abilities')).toBeInTheDocument();
    selectedPokemon.abilities.forEach(a => expect(queryByText(a.ability.name)).toBeInTheDocument());
  });

  it('should NOT render pokemon image if not in sprites', () => {
    const newState = dissocPath(['pokemons', 'collection', 1, 'sprites'], initialState);
    const {
      queryByText,
      queryByTestId,
    } = renderWithRedux(<PokemonDetail />, { initialState: newState });

    expect(queryByText(selectedPokemon.name)).toBeInTheDocument();
    expect(queryByTestId(`${selectedPokemon.name}-pokemon`)).toBeNull();
  });

  it('should render just title if empty types collection', () => {
    const newState = assocPath(['pokemons', 'collection', 1, 'types'], [], initialState);
    const {
      queryByText,
      queryByTestId,
    } = renderWithRedux(<PokemonDetail />, { initialState: newState });

    expect(queryByText('Types:')).toBeInTheDocument();
    expect(queryByTestId('pokemon-types')).toBeEmpty();
  });

  it('should render just title if empty abilities collection', () => {
    const newState = assocPath(['pokemons', 'collection', 1, 'abilities'], [], initialState);
    const {
      queryByText,
      queryByTestId,
    } = renderWithRedux(<PokemonDetail />, { initialState: newState });

    expect(queryByText('Abilities:')).toBeInTheDocument();
    expect(queryByTestId('pokemon-abilities')).toBeEmpty();
  });
});

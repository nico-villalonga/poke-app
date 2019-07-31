import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { dissocPath, path, pluck, values } from 'ramda';
import reducer from '../../redux/reducers';
import { getTrainerPokemons } from '../../redux/selectors/trainer';
import TrainerDetail from '../detail-view/TrainerDetail';

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
    collection: {
      1: {
        id: 1,
        name: 'bulbasaur',
        sprites: { front_default: '/images/pokemons/bulbasaur.png' },
      },
      4: {
        id: 4,
        name: 'charmander',
        sprites: { front_default: '/images/pokemons/charmander.png' },
      },
      7: {
        id: 7,
        name: 'squirtle',
        sprites: { front_default: '/images/pokemons/squirtle.png' },
      },
    },
  },
  trainers: {
    selectedTrainerId: 1,
    collection: {
      1: {
        name: 'Ash Ketchum',
        sprites: {},
        gender: 'Male',
        homeTown: 'Pallet Town',
        region: 'Kanto',
        pokemons: [25, 7, 1, 4, 17],
      }
    },
  },
  gyms: {},
  badges: {},
  ui: {},
  notifications: {},
};

const selectedTrainer = path(['trainers', 'collection', 1], initialState);


describe('test TrainerDetail component', () => {
  it('should render component', () => {
    const trainerPokemons = getTrainerPokemons(initialState);
    const {
      queryByTestId,
      queryByText,
    } = renderWithRedux(<TrainerDetail />, { initialState });
    const matchText = text => queryByText((_, node) => node.textContent === text);

    expect(queryByTestId('trainer-detail')).toBeInTheDocument();
    // Image container
    expect(queryByTestId(`${selectedTrainer.name}-img`)).toBeInTheDocument();
    expect(queryByText(selectedTrainer.name)).toBeInTheDocument();
    // // // Info container
    expect(matchText(`HomeTown: ${selectedTrainer.homeTown}`)).toBeInTheDocument();
    expect(matchText(`Region: ${selectedTrainer.region}`)).toBeInTheDocument();
    expect(matchText(`Gender: ${selectedTrainer.gender}`)).toBeInTheDocument();
    // Trainer pokemons
    expect(queryByText('Pokemons:')).toBeInTheDocument();
    expect(trainerPokemons.length).toEqual(3);
    trainerPokemons.forEach(p => expect(queryByTestId(`${p.name}-img`)).toBeInTheDocument());
  });

  it('should NOT render trainer image if not in sprites', () => {
    const newState = dissocPath(['trainers', 'collection', 1, 'sprites'], initialState);
    const {
      queryByText,
      queryByTestId,
    } = renderWithRedux(<TrainerDetail />, { initialState: newState });

    expect(queryByText(selectedTrainer.name)).toBeInTheDocument();
    expect(queryByTestId(`${selectedTrainer.name}-img`)).toBeNull();
  });

  it('should NOT render pokemons section if not in store', () => {
    const newState = dissocPath(['trainers', 'collection', 1, 'pokemons'], initialState);
    const pokemonNames = pluck('name', values(path(['pokemons', 'collection'], newState)));
    const {
      queryByText,
      queryByTestId,
    } = renderWithRedux(<TrainerDetail />, { initialState: newState });

    expect(queryByText('Pokemons:')).toBeNull();
    pokemonNames.forEach(p => expect(queryByTestId(`${p.name}-img`)).toBeNull());
  });
});

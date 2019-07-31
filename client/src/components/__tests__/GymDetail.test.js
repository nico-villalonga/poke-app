import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { dissocPath, path } from 'ramda';
import reducer from '../../redux/reducers';
import GymDetail from '../detail-view/GymDetail';

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
  pokemons: {},
  trainers: {
    collection: {
      3: { id: 3, name: 'Brock', sprites: { front_default: '/images/trainers/brock.png' } },
    }
  },
  gyms: {
    selectedGymId: 1,
    collection: {
      1: {
        id: 1,
        name: 'Pewter',
        location: 'Pewter City',
        region: 'Kanto',
        badgeId: 1,
        leaderId: 3,
        type: 'Rock',
        sprites: { front_default: '/images/gyms/pewter.png' },
      },
    },
  },
  badges: {
    collection: {
      1: { id: 1, name: 'boulder', sprites: { front_default: '/images/badges/boulder.png' } },
    }
  },
  ui: {},
  notifications: {},
};

const selectedGym = path(['gyms', 'collection', 1], initialState);
const gymLeader = path(['trainers', 'collection', selectedGym.leaderId], initialState);
const gymBadge = path(['badges', 'collection', selectedGym.badgeId], initialState);


describe('test GymDetail component', () => {
  it('should render component', () => {
    const {
      queryByTestId,
      queryByText,
    } = renderWithRedux(<GymDetail />, { initialState });
    const matchText = text => queryByText((_, node) => node.textContent === text);

    expect(queryByTestId('gym-detail')).toBeInTheDocument();
    // Image container
    expect(queryByTestId(`${selectedGym.name}-img`)).toBeInTheDocument();
    expect(queryByText(selectedGym.name)).toBeInTheDocument();
    // Info container
    expect(matchText(`Location: ${selectedGym.location}`)).toBeInTheDocument();
    expect(matchText(`Region: ${selectedGym.region}`)).toBeInTheDocument();
    expect(matchText(`Type: ${selectedGym.type}`)).toBeInTheDocument();
    // Gym leader
    expect(queryByText('Leader:')).toBeInTheDocument();
    expect(queryByTestId(`${gymLeader.name}-img`)).toBeInTheDocument();
    // Gym badge
    expect(queryByText('Badge:')).toBeInTheDocument();
    expect(queryByTestId(`${gymBadge.name}-img`)).toBeInTheDocument();
  });

  it('should NOT render gym image if not in sprites', () => {
    const newState = dissocPath(['gyms', 'collection', 1, 'sprites'], initialState);
    const {
      queryByText,
      queryByTestId,
    } = renderWithRedux(<GymDetail />, { initialState: newState });

    expect(queryByTestId(`${selectedGym.name}-img`)).toBeNull();
    expect(queryByText(selectedGym.name)).toBeInTheDocument();
  });

  it('should NOT render leader section if not in store', () => {
    const newState = dissocPath(['trainers', 'collection', selectedGym.leaderId], initialState);
    const {
      queryByText,
      queryByTestId,
    } = renderWithRedux(<GymDetail />, { initialState: newState });

    expect(queryByText('Leader:')).toBeNull();
    expect(queryByTestId(`${gymLeader.name}-img`)).toBeNull();
  });

  it('should NOT render badge section if not in store', () => {
    const newState = dissocPath(['badges', 'collection', selectedGym.badgeId], initialState);
    const {
      queryByText,
      queryByTestId,
    } = renderWithRedux(<GymDetail />, { initialState: newState });

    expect(queryByText('Badge:')).toBeNull();
    expect(queryByTestId(`${gymBadge.name}-img`)).toBeNull();
  });
});

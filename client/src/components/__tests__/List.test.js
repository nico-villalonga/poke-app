import React from 'react';
import { render } from '@testing-library/react';
import List from '../list/List';

describe('test List component', () => {
  it('should render nothing for empty collection', () => {
    const className = 'trainer';
    const showDetail = id => () => {};
    const collection = [];
    const props = { className, collection, showDetail };

    const { queryByTestId } = render(<List {...props} />);

    expect(queryByTestId('list')).toBeNull();
  });

  it('should render a list of ListElement (trainers)', () => {
    const className = 'trainer';
    const showDetail = id => () => {};
    const collection = [{
      id: 1,
      name: 'Ash Ketchum',
      sprites: { front_default: '/images/trainers/ash.png' },
    }, {
      id: 2,
      name: 'Misty',
      sprites: { front_default: '/images/trainers/misty.png' },
    }, {
      id: 3,
      name: 'Brock',
      sprites: { front_default: '/images/trainers/brock.png' },
    }];
    const props = { className, collection, showDetail };

    const { getByText } = render(<List {...props} />);

    collection.forEach(trainer => {
      expect(getByText(trainer.name)).toBeInTheDocument();
    });
  });
});

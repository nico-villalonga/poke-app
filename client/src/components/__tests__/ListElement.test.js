import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListElement from '../list-element/ListElement';

describe('test ListElement component', () => {
  it('should render a trainer element', () => {
    const className = 'trainer';
    const mockedFn = jest.fn();
    const showDetail = id => mockedFn;
    const data = {
      id: 1,
      name: 'Ash Ketchum',
      sprites: { front_default: '/images/trainers/ash.png' },
    };
    const props = { className, data, showDetail };

    const { getByText } = render(<ListElement {...props} />);

    expect(getByText(data.name)).toBeInTheDocument();
    expect(mockedFn).not.toHaveBeenCalled();

    fireEvent.click(getByText(data.name))
    expect(mockedFn).toHaveBeenCalled();
  });
});

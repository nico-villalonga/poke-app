import React from 'react';
import { isEmpty, isNil } from 'ramda';
import ListElement from '../list-element/ListElement';
import { Wrapper, Ul} from './ListStyle';

const List = props => {
  const { className, collection, showDetail } = props;

  if (isEmpty(collection) || isNil(collection)) {
    return null;
  }

  return (
    <Wrapper data-testid="list">
      <Ul>
        {
          collection.map(data => (
            <li key={ data.id }>
              <ListElement
                className={ className }
                data={ data }
                showDetail={ showDetail }
              />
            </li>
          ))
        }
      </Ul>
    </Wrapper>
  );
}

export default List;

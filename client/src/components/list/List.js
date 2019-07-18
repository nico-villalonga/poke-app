import React from 'react';
import ListElement from '../list-element/ListElement';
import { Wrapper, Ul} from './ListStyle';

const List = props => {
  const { className = '', collection, showDetail } = props;

  return (
    <Wrapper>
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

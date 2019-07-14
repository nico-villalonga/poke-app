import React from 'react';
import { Wrapper, Ul} from './ListStyle';

const List = props => {
  const { collection, entity: Entity, showDetail } = props;

  return (
    <Wrapper>
      <Ul>
        {
          collection.map(data => (
            <Entity
              key={ data.id }
              data={ data }
              showDetail={ showDetail }
            />
          ))
        }
      </Ul>
    </Wrapper>
  );
}

export default List;

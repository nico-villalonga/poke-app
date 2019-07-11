import React from 'react';

const List = props => {
  const { collection, Entity, showDetail } = props;

  return (
    <ul>
      {
        collection.map(data => (
          <Entity
            key={ data.id }
            data={ data }
            showDetail={ showDetail }
          />
        ))
      }
    </ul>
  );
}

export default List;

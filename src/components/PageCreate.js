import React from 'react';
import {map} from 'lodash';

import BookCard from './BookCard';
import {books_list} from '../actions/books'

const PageCreate = () => {
  
  const [items, set_items] = React.useState([]);

  React.useEffect(() => {
    books_list().then(payload => set_items(payload))
      
  }, [])

  if(!items)
    return <pre>no-items</pre>

  return (
    <div style={{width: '100%', height: 100}}>
      
      <pre>Consultas agendadas {items.length}</pre>
      
      {map(items, (item, key) => 
        <BookCard key={key} content={item} onClick={() => console.log(`click ${key}`)} />)}

      <pre>Agendar nova consulta</pre>
    </div>
  );
};

export default PageCreate;
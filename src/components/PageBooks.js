import React from 'react';
import axios from 'axios'
import {map} from 'lodash';

import BookCard from './BookCard';

const api_root = `http://localhost:3001/api`

const PageBooks = () => {
  
  const [items, set_items] = React.useState([]);

  React.useEffect(() => {
    axios.post(`${api_root}/books/list`)
      .then(payload => set_items(payload.data.items))
      .catch(e => console.error(e))
  }, [])

  return (
    <div style={{width: '100%', height: 100}}>
      
      <pre>Consultas agendadas {items.length}</pre>
      
      {map(items, (item, key) => 
        <BookCard key={key} content={item} onClick={() => console.log(`click ${key}`)} />)}

      <pre>Agendar nova consulta</pre>
    </div>
  );
};

export default PageBooks;
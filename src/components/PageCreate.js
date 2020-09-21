import React from 'react';
import {map} from 'lodash';

import BookCard from './BookCard';

import {books_list} from '../actions/books'
import {skills_list} from '../actions/skills'

const PageCreate = () => {
  
  const [items, set_items] = React.useState([]);
  const [skills, set_skills] = React.useState([]);

  React.useEffect(() => {
    books_list().then(payload => set_items(payload))
    skills_list().then(payload => set_skills(payload))
  }, [])

  if(!items)
    return <pre>no-items</pre>

  return (
    <div style={{width: '100%', height: 100}}>
      
      <pre>Consultas agendadas {items.length}</pre>
      
      <pre>Skills {skills.length}</pre>
      
      {map(items, (item, key) => 
        <BookCard key={key} content={item} onClick={() => console.log(`click ${key}`)} />)}

      <pre>Agendar nova consulta</pre>
    </div>
  );
};

export default PageCreate;
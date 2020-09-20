import {Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import {useSelector} from 'react-redux';

const Home = props => {

  const testando = useSelector(state => state);
  console.log(testando);

  const handleClick = () => {
    props.history.push('page1');
  };

  return (
    <Button color='primary' onClick={handleClick}>Ir para página 1</Button>
  );
};

Home.propTypes = {
  history: PropTypes.object,
};

export default Home;
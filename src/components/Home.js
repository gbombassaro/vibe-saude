import {Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const Home = props => {

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
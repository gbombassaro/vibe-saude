import {TextField, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

// import {useSelector} from 'react-redux';
import DoctorCard from './DoctorCard';

const styles = () => ({
  input: {
    width: '100%'
  }
});

const Home = ({classes}) => {

  // const testando = useSelector(state => state);
  const mock = {
    id: '1',
    name: 'Floriano Peixoto',
    skills: ['testando', 'testando 2']
  };

  return (
    <React.Fragment>
      <Grid container spacing={2} justify='center'>
        <Grid item xs={12} md={6}>
          <TextField className={classes.input} label='Pesquisar' variant='outlined' />
        </Grid>
      </Grid>
      <Grid container spacing={2} justify='center'>
        <Grid item xs={12} md={6}>
          <DoctorCard content={mock} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Home.propTypes = {
  history: PropTypes.object,
};

export default withStyles(styles)(Home);
import {Button, TextField, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {map} from 'lodash';

// import {useSelector, useDispatch} from 'react-redux';
import DoctorCard from './DoctorCard';
// import {loadDoctors} from '../reducers/doctor'
import axios from 'axios'

const styles = () => ({
  input: {
    width: '100%'
  }
});

const Home = ({classes}) => {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    axios.post('http://localhost:3001/api/doctors/list')
      .then(payload => setData(payload.data.items))
      .catch(e => console.error(e))
  }, [])

  const searchDoc = () => {
    axios.post('http://localhost:3001/api/doctors/list', {name: search})
      .then(payload => setData(payload.data.items))
      .catch(e => console.error(e))
  }

  const handleSearch = ({target}) => {
    setSearch(target.value);
  }

  // const state = useSelector(state => state);
  // const dispatch = useDispatch();

  // const handleClick = () => {
  //   axios.post('http://localhost:3001/api/doctors/list')
  //   .then(payload => console.log(payload.data))
  //   .catch(e => console.error(e))
  // }

  console.log(data);

  return (
    <React.Fragment>
      <Grid container spacing={2} justify='center'>
        <Grid item xs={12} md={6}>
          <TextField className={classes.input} onChange={handleSearch} label='Pesquisar' variant='outlined' />
          <Button onClick={() => searchDoc()}>Buscar</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify='center'>
        <Grid item xs={12} md={6}>
          {map(data, (item, key) => <DoctorCard key={key} content={item} onClick={() => console.log(`click ${key}`)} />)}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Home.propTypes = {
  history: PropTypes.object,
};

export default withStyles(styles)(Home);
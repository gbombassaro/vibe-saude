import {Grid, Box} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {map} from 'lodash';

import DoctorCard from './DoctorCard';
import Filters from './Filters';
import {doctors_list} from '../actions/doctors'

const Home = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    doctors_list()
      .then(payload => setData(payload))
      .catch(e => console.error(e));
  }, [])

  const search = params => {
    doctors_list(params).then(payload => setData(payload)).catch(e => console.error(e))
  }

  console.log(data);

  return (
    <Box>
      <Box mb={4}>
        <Filters onSearch={search} />
      </Box>
      <Grid container spacing={2} justify='center'>
        <Grid item xs={12} md={6}>
          {map(data, (item, key) => <DoctorCard key={key} content={item} onClick={() => console.log(`click ${key}`)} />)}
        </Grid>
      </Grid>
    </Box>
  );
};

Home.propTypes = {
  history: PropTypes.object,
};

export default Home;